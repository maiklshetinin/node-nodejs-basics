import { dirname, join } from 'path';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const path = join(__dirname, 'files', 'fileToRead.txt');

    const text = await readFile(path, { encoding: 'utf8' }).catch(() => {
        throw Error('FS operation failed');
    });
    console.log(text);
};

await read();