import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
    const input = await readFile(join(__dirname, 'files', 'fileToCalculateHashFor.txt'), { encoding: 'utf8' });

    const hash = createHash('sha256');

    const output = hash.update(input).digest('hex');

    console.log(output);
};

await calculateHash();