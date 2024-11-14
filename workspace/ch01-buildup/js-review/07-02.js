var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = 0;

var newArray = array.map((item) => (item % 2 !== 0 ? item : 0));

newArray.forEach((item) => (result += item));

console.log(result);
