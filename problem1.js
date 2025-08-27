// If n is positive integer : calculate sum from 1 to n
// If n is negative integer : calculate sum from -n to -1

var sum_to_n_a = function (n) {
  const length = Math.abs(n);

  return (n * (length + 1)) / 2;
};

var sum_to_n_b = function (n) {
  if (n === 0) return 0;

  return n > 0 ? n + sum_to_n_b(n - 1) : n + sum_to_n_b(n + 1);
};

var sum_to_n_c = function (n) {
  let sum = 0;

  if (n >= 1) {
    for (let i = 1; i <= n; i++) sum += i;
  } else {
    for (let i = n; i < 0; i++) sum += i;
  }

  return sum;
};

module.exports = { sum_to_n_a, sum_to_n_b, sum_to_n_c };
