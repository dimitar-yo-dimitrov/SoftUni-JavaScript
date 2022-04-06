function calculateCircleArea(input) {
    if (typeof (input) !== 'number') {
      return console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }

    let area = (input * input * Math.PI);
    console.log(area.toFixed(2));
}

calculateCircleArea(5);
calculateCircleArea('name');