import { createUnzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
    const input = createReadStream(join(__dirname, 'files', 'archive.gz'));
    const output = createWriteStream(
        join(__dirname, 'files', 'fileToCompress.txt')
    );
    const decompress = createUnzip();
    input.pipe(decompress).pipe(output);
};

await decompress();