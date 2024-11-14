var array = [6, 7, 8, 1, 4, 5, 2, 3, 9, 10];
array.sort((a, b) => a - b);
console.log(array);

var result = array.find((num) => num % 2 === 0 && num % 3 === 0);

console.log(result);
