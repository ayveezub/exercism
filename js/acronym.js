/*

Convert a phrase to its acronym.

Techies love their TLA (Three Letter Acronyms)!

Help generate some jargon by writing a program
that converts a long name like Portable Network Graphics to its acronym (PNG).

*/

export const parse = longName => {
  return longName.split(/[\s-_]+/).reduce((acc, currentWord) => (
    acc.concat(currentWord.charAt(0).toUpperCase())
  ), []).join('')
}
