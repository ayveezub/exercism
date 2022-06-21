/*

Given a string containing brackets [], braces {}, parentheses (), or any combination thereof,
verify that any and all pairs are matched and nested correctly.

*/

export const isPaired = string => {
  const brackets = {
    ']': '[',
    '}': '{',
    ')': '('
  }
  const openingBrackets = Object.values(brackets)
  const closingBrackets = Object.keys(brackets)
  const isMatchedBrackets = (openingBracket, closingBracket) => brackets[closingBracket] === openingBracket

  return !string.split('').reduce((openingBracketsStack, char) => {
    if (openingBrackets.includes(char)) openingBracketsStack.push(char)
    if (
      closingBrackets.includes(char)
      && !isMatchedBrackets(openingBracketsStack[openingBracketsStack.length - 1], char)
    ) openingBracketsStack.push('not balanced')
    if (
      closingBrackets.includes(char)
      && isMatchedBrackets(openingBracketsStack[openingBracketsStack.length - 1], char)
    ) openingBracketsStack.pop()
    return openingBracketsStack
  }, []).length
}
