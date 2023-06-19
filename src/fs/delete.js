import { dirname, join } from 'path';
import { rm } from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
    const path = join(__dirname, 'files', 'fileToRemove.txt');

    rm(path).catch(() => {
        throw Error('FS operation failed');
    });
};

await remove();