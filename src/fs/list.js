import { readdir } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
    const path = join(__dirname, 'files');

    const files = await readdir(path).catch(() => {
        throw Error('FS operation failed');
    });
    console.table(files);
};

await list();