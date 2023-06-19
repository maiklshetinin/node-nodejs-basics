import { createGzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
    const input = createReadStream(
        join(__dirname, 'files', 'fileToCompress.txt')
    );
    const output = createWriteStream(join(__dirname, 'files', 'archive.gz'));

    const compress = createGzip();

    input.pipe(compress).pipe(output);
};

await compress();