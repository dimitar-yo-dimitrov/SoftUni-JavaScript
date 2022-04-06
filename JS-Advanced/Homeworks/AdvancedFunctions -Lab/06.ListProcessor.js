function solve(commands) {

    let listProcessor = (() => {
        let list = [];
        return {
            add: (newItem) => list.push(newItem),
            remove: (item) => list = list.filter(x => x !== item),
            print: () => console.log(list.join(','))
        }
    })();

    for (const cmd of commands) {
        let [cmdName, arg] = cmd.split(' ');
        listProcessor[cmdName](arg);
    }
}

solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);