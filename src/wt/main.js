import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {

    const cor = cpus();

    const res = await Promise.allSettled(
        cor.map(
            (_, i) =>
                new Promise((res, rej) => {
                    const n = 10 + i;
                    const worker = new Worker(join(__dirname, 'worker.js'), {
                        workerData: n,
                    });
                    worker.on('message', (msg) => {
                        res(msg);
                    });
                    worker.on('error', (msg) => {
                        rej(msg);
                    });
                })
        )
    );

    res.forEach(({ status, value }) =>
        console.log({
            status: status === 'fulfilled' ? 'resolved' : 'error',
            data: value || null,
        })
    );
};

await performCalculations();