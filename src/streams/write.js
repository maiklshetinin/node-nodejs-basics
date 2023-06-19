import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
    const writeStream = createWriteStream(
        join(__dirname, 'files', 'fileToWrite.txt')
    );

    process.stdin.pipe(writeStream);
};

await write();