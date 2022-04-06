function aggregateElements(array) {
    let sum = 0;
    let sumOfTheInverseValues = 0;
    let stringConcat = '';

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        sum += element;
        sumOfTheInverseValues += 1 / element;
        stringConcat += element;
    }


    console.log(sum);
    console.log(sumOfTheInverseValues);
    console.log(stringConcat);
}

aggregateElements([2, 4, 8, 16])