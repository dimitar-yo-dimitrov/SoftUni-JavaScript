function validityChecker(...parameters) {
    const x1 = Number(parameters[0]);
    const y1 = Number(parameters[1]);
    const x2 = Number(parameters[2]);
    const y2 = Number(parameters[3]);

    function calculateDistance(x1, y1, x2, y2) {
        const distanceX = x1 - x2;
        const distanceY = y1 - y2;
        return Math.sqrt(distanceX ** 2 + distanceY ** 2);
    }

    Number.isInteger(calculateDistance(x1, y1, 0, 0))
        ? console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
        : console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    Number.isInteger(calculateDistance(x2, y2, 0, 0))
        ? console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
        : console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    Number.isInteger(calculateDistance(x1, y1, x2, y2))
        ? console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
        : console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
}

validityChecker(2, 1, 1, 1)