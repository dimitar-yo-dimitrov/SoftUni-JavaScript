function solve(input) {
    const data = {};

    let commands = {
        create: (name, inherit, parentName) =>
            (data[name] = inherit ? Object.create(data[parentName]) : {}),
        set: (name, key, value) => (data[name][key] = value),
        print: name => {
            const entry = [];

            for (const key in data[name]) {
                entry.push(`${key}:${data[name][key]}`)
            }

            console.log(entry.join(','));
        },
    }

    input.forEach(x => {
        const [c, n, k, v] = x.split(' ');

        commands[c](n, k, v);
    });
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);
