function squareOfStar(Number) {
    let size = Number;
    let string = '';

    if (size === 0) {
        size += 5;
    }

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            string += '* ';
        }
        string += '\n';
    }

    console.log(string);
}

squareOfStar(0);