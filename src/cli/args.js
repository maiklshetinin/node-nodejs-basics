const parseArgs = () => {
    const args = process.argv.slice(2);

    console.log(args.map((el) => el.startsWith('--') ? `${el.replace('--', '')} is` : `${el},`).join(' '));
};

parseArgs();