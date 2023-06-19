import { Transform, pipeline } from 'stream';

const transform = async () => {
    
    const myTransform = new Transform({

        transform(chunk, _, cb) {
            const res = chunk.toString().trim().split('').reverse().join('');
            this.push(`${res}\n`);
            cb();
        },
    });

    pipeline(process.stdin, myTransform, process.stdout, (err) =>
        console.log(err)
    );
};

await transform();