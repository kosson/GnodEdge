import fs from 'node:fs/promises';
import sqlite3 from 'sqlite3';
import path from 'node:path';

// import from util methods to work with the pronisified version of fs node module
import {accessPromise} from './util/fsutils.js';

// Import from util `__dirname` creator
import fileDirName from './util/fileDirName.js';
const { __dirname, __filename } = fileDirName(import.meta);

const filepath = path.join(__dirname, 'publications.sqlite');
// console.log(`The path of the database file should be ${filepath}`);

async function connectToDatabase() {
    try {
        // FIXME: TypeError [ERR_INVALID_ARG_TYPE]: The "mode" argument must be of type number. Received type function ([Function (anonymous)])
        if (await accessPromise(filepath)) {
            return new sqlite3.Database(filepath);
          } else {
            const db = new sqlite3.Database(filepath, (error) => {
              if (error) {
                return console.error(error.message);
              }
              // console.log("Connection established");
            });
            return db;
          }
    } catch (error) {
        console.log(error);
    }
}

export {connectToDatabase};