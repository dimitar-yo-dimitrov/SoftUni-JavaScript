function solve(commands) {
    let result = [];

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'add') {
            result.push(i +1);
        } else {
            result.pop();
        }
    }

    return result.length != 0 ? result.join('\n') : 'Empty';
}

console.log(solve(['remove', 'remove', 'remove']));