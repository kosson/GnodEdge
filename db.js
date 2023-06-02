import sqlite3 from 'sqlite3';
import pkg from 'sqlite';
const { open } = pkg;
import path from 'node:path';

// import from util methods to work with the pronisified version of fs node module
import {accessPromise} from './util/fsutils.js';

// Import from util `__dirname` creator
import fileDirName from './util/fileDirName.js';
const { __dirname, __filename } = fileDirName(import.meta);

/**
 * The function creates connection to the database file
 *
 * @returns {Object} db
 */
// async function connectToDatabase(dbFileName) {
//     try {
//       const filepath = path.join(__dirname, dbFileName);
//       // console.log(`The path of the database file should be ${filepath}`);
      
//       if (await accessPromise(filepath)) {
//           return new sqlite3.Database(filepath);
//       } else {
//         const db = new sqlite3.Database(filepath, sqlite3.OPEN_READWRITE, function clbkCreateDb (error) {
//           if (error) {
//             throw new Error (`At the time I tried to create db this error was thrown: ${error}`);
//           }
//           // console.log("Connection established");
//         });
//         return db;
//       }
//     } catch (error) {
//         console.log(error);
//     }
// }

async function connectToDatabase (dbFileName) {
  const filepath = path.join(__dirname, dbFileName);
  console.log(`Numele este ${typeof(filepath)}`);
  try {
    const db = await open({
      filename: `/home/nicolaie/Desktop/DEVELOPMENT/GnodEdge/publications.sqlite`,
      driver: sqlite3.cached.Database
    });
    return db;
  } catch (error) {
    console.log(error);
  }
}

export {connectToDatabase};