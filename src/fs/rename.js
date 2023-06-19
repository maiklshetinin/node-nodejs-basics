import { access, rename as renameFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const rename = async () => {

    const error = Error('FS operation failed');
    const firstName = 'wrongFilename.txt';
    const secondName = 'properFilename.md';


    const oldPath = join(__dirname, 'files', firstName);
    const newPath = join(__dirname, 'files', secondName);

    await access(newPath)
        .then(() => {
            throw error;
        })
        .catch((err) => {
            if (err === error) {
                throw error;
            }
        });

    renameFile(oldPath, newPath).catch(() => {
        throw error;
    });
};

await rename();