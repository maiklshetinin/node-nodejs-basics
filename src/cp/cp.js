import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {

    const cp = spawn('node', [join(__dirname, 'files', 'script.js'), ...args]);

    process.stdin.pipe(cp.stdin);

    cp.stdout.pipe(process.stdout);
};

spawnChildProcess(process.argv.slice(2));