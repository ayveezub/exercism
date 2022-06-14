/*

Find the difference between the square of the sum
and the sum of the squares of the first N natural numbers.

The square of the sum of the first ten natural numbers is (1 + 2 + ... + 10)² = 55² = 3025.

The sum of the squares of the first ten natural numbers is 1² + 2² + ... + 10² = 385.

Hence the difference between the square of the sum of the first ten natural numbers
and the sum of the squares of the first ten natural numbers is 3025 - 385 = 2640.

You are not expected to discover an efficient solution to this yourself from first principles;
research is allowed, indeed, encouraged.
Finding the best algorithm for the problem is a key skill in software engineering.

*/

export class Squares {
  constructor(naturalNumberN) {
    this.naturalNumbers = Array.from({ length: naturalNumberN }, (_, ind) => 1 + ind)
  }

  get sumOfSquares() {
    return this.naturalNumbers.reduce((acc, currentNumber) => (
      acc + currentNumber ** 2
  ), 0)
  }

  get squareOfSum() {
    return Math.pow(this.naturalNumbers.reduce((acc, currentNumber) => (
      acc + currentNumber
  ), 0), 2)
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares
  }
}
