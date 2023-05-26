import { access, constants } from 'node:fs/promises';

// https://stackoverflow.com/questions/50767829/why-node-js-fs-existssync-doesnt-work-well-when-wrapped-in-promise
async function accessPromise (path) {
    try {
        if (await access(path, constants.R_OK | constants.W_OK)) {
            return true;
        };
    } catch (error) {
        console.error(error);
    }
}

export {accessPromise};