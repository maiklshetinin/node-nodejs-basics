const parseEnv = () => {

    const prefix = 'RSS_';
    const variables = process.env;

    const varsPref = Object.keys(variables)
        .filter((key) => key.includes(prefix))
        .map((el) => `${el} = ${variables[el]}`);

    console.log(varsPref.join('; '));
};

parseEnv();