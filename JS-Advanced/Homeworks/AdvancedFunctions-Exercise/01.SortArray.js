function add(array, commands) {
    if (commands === 'asc') {
       return array.sort((a, b) => a - b);
    } else if (commands === 'desc') {
       return array.sort((a, b) => b - a);
    }
}

console.log(add([14, 7, 17, 6, 8], 'asc'));