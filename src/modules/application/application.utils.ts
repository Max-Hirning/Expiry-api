const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const splitRandomSum = (total: number, parts: number): number[] => {
    if (parts === 1) {
        return [total];
    }

    const cuts: number[] = [];

    for (let index = 0; index < parts - 1; index++) {
        cuts.push(Math.random());
    }

    cuts.sort((a, b) => a - b);

    const result: number[] = [];
    let prev = 0;

    for (const cut of cuts) {
        result.push(Math.round((cut - prev) * total));
        prev = cut;
    }

    result.push(total - result.reduce((a, b) => a + b, 0)); // остаток

    return result;
};

export { getRandomInt, splitRandomSum };
