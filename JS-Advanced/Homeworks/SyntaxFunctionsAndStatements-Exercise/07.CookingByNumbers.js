function cookingByNumbers(...input) {
    let number = Number(input.shift());
    let result;

    for (let index = 0; index < input.length; index++) {
        switch (input[index]) {
            case 'chop': result = number / 2; break;
            case 'dice': result = Math.sqrt(number); break;
            case 'spice': result = number + 1; break;
            case 'bake': result = number * 3; break;
            case 'fillet': result = number * 0.80; break;
        }
       
        number = result;
        console.log(result);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')