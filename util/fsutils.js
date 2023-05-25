import fs from 'node:fs/promises';

// https://stackoverflow.com/questions/50767829/why-node-js-fs-existssync-doesnt-work-well-when-wrapped-in-promise
function accessPromise(dir) {
    return new Promise((resolve, reject) => {
        fs.access(dir, (err) => {
            if (err) reject();
            else resolve(true);
        });
    });
}

export {accessPromise};