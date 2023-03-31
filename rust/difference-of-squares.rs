/*

Find the difference between the square of the sum
and the sum of the squares of the first N natural numbers.

The square of the sum
of the first ten natural numbers is (1 + 2 + ... + 10)² = 55² = 3025.

The sum of the squares
of the first ten natural numbers is 1² + 2² + ... + 10² = 385.

Hence the difference between the square of the sum
of the first ten natural numbers and the sum of the squares
of the first ten natural numbers is 3025 - 385 = 2640.

You are not expected to discover
an efficient solution to this yourself from first principles;
research is allowed, indeed, encouraged.
Finding the best algorithm for the problem
is a key skill in software engineering.

*/

pub fn square_of_sum(n: u32) -> u32 {
  u32::pow(n * (n + 1) / 2, 2)
}

pub fn sum_of_squares(n: u32) -> u32 {
  n * (n + 1) * (2 * n + 1) / 6
}

pub fn difference(n: u32) -> u32 {
  square_of_sum(n) - sum_of_squares(n)
}
