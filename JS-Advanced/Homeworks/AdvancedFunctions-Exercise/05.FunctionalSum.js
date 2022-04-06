function add(number) {
    let sum = number;

    function result(nextNumber) {
        
        sum += nextNumber;

        return result;
    }

    result.toString = function () {
        return sum;
    };

    return result;
}

console.log(Number(add(1)(6)(-3)));
