import fs from 'node:fs/promises';
import { parse } from 'csv-parse';

(async function GnodeEdge () {

    // read the file source
    const fd = await fs.open("./sourcefile/data-prima-forma.csv");
    fd.createReadStream()
        .pipe(parse({ delimiter: ",", from_line: 2 }))
        .on("data", function (row) {
            console.log(row);
        })
        .on("end", function () {
            console.log("finished");
        })
        .on("error", function (error) {
            console.log(error.message);
        });
})()