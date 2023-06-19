import { ReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const read = ReadStream(join(__dirname, 'files', 'fileToRead.txt'));
    read.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
};

await read();