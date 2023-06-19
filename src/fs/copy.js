import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { mkdir, access, readdir, copyFile } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const copying = async (curDir, targDir, error) => {
    await mkdir(targDir).catch(() => {
        throw error;
    });

    const files = await readdir(curDir, { withFileTypes: true });

    await Promise.all(
        files.map((file) => {
            const current = join(curDir, file.name);
            const target = join(targDir, file.name);
            if (file.isFile()) {
                return copyFile(current, target)
            } else return copying(current, target, error);
        })
    ).catch((err) => {
        throw Error('copy error');
    });
};

const copy = async () => {
    const oldPath = join(__dirname, 'files');
    const newPath = join(__dirname, 'files-copy');

    const error = Error('FS operation failed');

    await access(oldPath).catch(() => {
        throw error;
    });

    copying(oldPath, newPath, error);
};

copy();