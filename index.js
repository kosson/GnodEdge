import fs from 'node:fs/promises';
import { parse } from 'csv-parse';

import {connectToDatabase} from './db.js';
let db = connectToDatabase(); // connect to the database

(async function GnodeEdge () {

    // read the file source
    const fd = await fs.open("./sourcefile/data-prima-forma.csv");
    fd.createReadStream()
        .pipe(parse({ delimiter: ",", from_line: 2 }))
        .on("data", function (row) {
            // console.log(row);
            db.serialize(function clbkSerializer () {
                db.run(
                  `INSERT INTO migration VALUES (?, ?, ? , ?, ?, ?, ?)`,
                  [row[0], row[1], row[2], row[3], row[4], row[5], row[6]],
                  function clbkerrorinsert(error) {
                    if (error) {
                      return console.log(error.message);
                    }
                    console.log(`Inserted row: ${this.lastID}`);
                  }
                );
            });
        })
        .on("end", function () {
            console.log("finished");
        })
        .on("error", function (error) {
            console.log(error.message);
        });
})()