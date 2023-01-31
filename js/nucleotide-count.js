/*

DNA is a long chain of other chemicals and the most important are the four nucleotides,
adenine, cytosine, guanine and thymine.
A single DNA chain can contain billions of these four nucleotides
and the order in which they occur is important!
We call the order of these nucleotides in a bit of DNA a "DNA sequence".

We represent a DNA sequence as an ordered collection of these four nucleotides
and a common way to do that is with a string of characters such as "ATTACG"
for a DNA sequence of 6 nucleotides.
'A' for adenine, 'C' for cytosine, 'G' for guanine, and 'T' for thymine.

Given a string representing a DNA sequence,
count how many of each nucleotide is present.
If the string contains characters that aren't A, C, G, or T
then it is invalid and you should signal an error.

For example:

  "GATTACA" -> 'A': 3, 'C': 1, 'G': 1, 'T': 2
  "INVALID" -> error

The result should be formatted as a string containing 4 numbers separated by spaces.
Each number represents the count for A, C, G and T in this order.

For example:

  countNucleotides('GATTACA') -> '3 1 1 2'

*/

const isValid = strand => {
  return !/[^ACGT]/g.test(strand)
}

const countNucleotide = (nucleotide, strand) => {
  return strand.split('').reduce((acc, currentNucleotide) => {
    if (currentNucleotide === nucleotide) return acc + 1
    return acc
  }, 0)
}

export function countNucleotides(strand) {
  if (isValid(strand)) return `${countNucleotide('A', strand)} `
    + `${countNucleotide('C', strand)} `
    + `${countNucleotide('G', strand)} `
    + `${countNucleotide('T', strand)}`
  throw new Error('Invalid nucleotide in strand')
}
