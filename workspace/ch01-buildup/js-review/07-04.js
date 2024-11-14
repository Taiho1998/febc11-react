var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = 0;

array.filter((num) => num % 2 !== 0).forEach((num) => (result += num));

console.log(result);
