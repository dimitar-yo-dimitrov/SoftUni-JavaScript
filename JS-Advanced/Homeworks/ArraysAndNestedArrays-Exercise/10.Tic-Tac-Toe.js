function solve(nestedArray){
    return nestedArray.join(',\n');
}

console.log(solve([
"0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
));