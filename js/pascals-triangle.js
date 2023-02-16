/*

Compute Pascal's triangle up to a given number of rows.

In Pascal's Triangle
each number is computed by adding the numbers
to the right and left of the current position in the previous row.

      1
     1 1
    1 2 1
   1 3 3 1
  1 4 6 4 1
  # ... etc

*/

const factorial = num => {
  if (num <= 1) return 1
  return [...Array(num)]
    .fill(null)
    .map((_, ind) => ind + 1)
    .reduce((acc, current) => acc * current)
}

const buildCell = (rowInd, colInd) => {
  return factorial(rowInd) / (factorial(colInd) * factorial(rowInd - colInd))
}

const buildRow = length => [...Array(length)]
  .fill(null)
  .reduce((acc, _, currentColInd) => acc.concat(buildCell(length - 1, currentColInd)), [])

export const rows = count => [...Array(count)]
  .fill(null)
  .reduce((acc, _, currentRowInd) => acc.concat([buildRow(currentRowInd + 1)]), [])
