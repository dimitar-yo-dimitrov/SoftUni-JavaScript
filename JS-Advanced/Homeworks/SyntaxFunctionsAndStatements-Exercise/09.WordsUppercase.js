function solve(text) {
   const regex = /\w+/g;

   let result = text.match(regex)

    console.log(result.join(', ').toUpperCase());
}

solve('Hi, how are you?')