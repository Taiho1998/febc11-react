var array = [6, 7, 8, 1, 4, 5, 2, 3, 9, 10];

var result = array.reduce((sum, num) => {
  if (num % 2 !== 0) {
    return sum + num;
  } else {
    return sum;
  }
}, 0);

var result = array.reduce((sum, num) => {
  return num % 2 ? sum + num : sum;
}, 0);

var result = array.reduce((sum, num) => (num % 2 ? sum + num : sum), 0);

var result = array.reduce((sum, num) => (sum += num % 2 && num), 0);

console.log(result);
