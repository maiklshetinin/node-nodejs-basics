import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import * as fs from 'fs';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const create = async () => {
    fs.writeFile(
        path.join(__dirname, './files/fresh.txt'),
        "I am fresh and young",
        err => {
            if (err) throw Error("FS operation failed");
        }
    );
};



await create();