import { fileURLToPath } from 'url';
import { dirname } from 'path';

// https://codingbeautydev.com/blog/javascript-dirname-is-not-defined-in-es-module-scope/
export default function fileDirName(meta) {
  const __filename = fileURLToPath(meta.url);

  const __dirname = dirname(__filename);

  return { __dirname, __filename };
};