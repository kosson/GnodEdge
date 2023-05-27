import fs from 'node:fs/promises';
import { parse } from 'csv-parse';
import inquirer from 'inquirer';

import {connectToDatabase} from './db.js';
let db = await connectToDatabase(); // connect to the database

async function populateTable () {
  // read the file source
  const fd = await fs.open("./sourcefile/data-prima-forma.csv");
  fd.createReadStream()
      .pipe(parse({ delimiter: ",", from_line: 2 }))
      .on("data", function clbkWorkOnRow(row) {
        // console.log(`Valorile rândului sunt ${row[0]}, apoi ${row[1]}`);

        let prepStmt = db.prepare(`INSERT INTO articles(Id,Label,Year,Author,JournalAccr,Kw) VALUES (?, ?, ?, ?, ?, ?)`);
        prepStmt.run([row[0],row[3],row[1],row[2],row[4],row[5]], function clbkerrorinsert(error) {
          if (error) {
            throw new Error(`At inserting the data, this error appeared: ${error.message}`);
          } else {
            console.log(`Inserted row: ${this.lastID}`);
          }
        });
        prepStmt.finalize();

        // check if all was loaded OK
        // db.each("SELECT rowid AS id, title FROM articles", function(err, row) {
        //   console.log(row.id + ": " + row.title);
        // });
      })
      .on("end", function () {
          console.log("finished");
      })
      .on("error", function (error) {
          console.log(error.message);
      }); 
}

try {
  // the query needed to create `articles` table
  let tableExistsQuery = `SELECT count(*) FROM sqlite_master WHERE type='table' AND name='articles'`;

  // investigate if the table exists. If it exists, ask user if she/he wants to wipe clean the data.
  // if it doesn't exists, create the table
  db.get(tableExistsQuery, async function clbkTableExists (error, count) {
    if (error) {
      throw new Error(`I've looked for the table, but this error appeared ${error}`);
    }
    if (count === 1) {
      console.log(`Table already exists, silly ol' chap!`);

      // put an option to cleaning the existing data (https://betterprogramming.pub/how-to-create-beautiful-command-line-interactions-with-node-js-2fcdfbbac62c)
      inquirer.prompt([
        {
          type: 'checkbox',
          name: 'wipe',
          message: 'Would you like me to clean the data of the articles table?',
          default: 'no',
          choices: [
            {name: 'no'},
            {name: 'yes', checked: false},
          ],
        },
      ]).then(async function getMeAnswers (answers) {
        // if you want to clean the data from the table
        if (answers.wipe == 'yes') {
          db.run("DELETE FROM articles", function clbkDeleteFromArticles (error) {
            if (error) {
              throw new Error (`Wipping table data raised this error: ${error}`);
            } else {
              console.log(`I've cleaned data from the table`);
            }
          });
          await populateTable();
        }
      }).catch((error) => {
        if (error.isTtyError) {
          throw new Error (`Prompt couldn't be rendered in the current environment`);
        } else {
          throw new Error (`When cleaning the table the following error was raised: ${error}`);
        }      
      });
    } else {
      db.exec(`
        CREATE TABLE articles
        (
          Id           VARCHAR(10),
          Label        VARCHAR(50),
          Year         INT,
          Author       VARCHAR(20),
          JournalAccr  VARCHAR(10),
          Kw           VARCHAR(50)
        )
      `);
      await populateTable();
    }
  });
} catch (error) {
  console.log(error);
}

