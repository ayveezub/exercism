/*

You and your fellow cohort of those in the "know" when it comes to binary
decide to come up with a secret "handshake".

  1 = wink
  10 = double blink
  100 = close your eyes
  1000 = jump


  10000 = Reverse the order of the operations in the secret handshake.

Given a decimal number,
convert it to the appropriate sequence of events for a secret handshake.

Here's a couple of examples:

Given the input 3, the function would return the array ["wink", "double blink"]
because 3 is 11 in binary.

Given the input 19, the function would return the array ["double blink", "wink"]
because 19 is 10011 in binary.
Notice that the addition of 16 (10000 in binary) has caused the array to be reversed.

*/

const commandsChart = {
  '1': 'wink',
  '10': 'double blink',
  '100': 'close your eyes',
  '1000': 'jump',
}

const bits = number => number.toString(2).split('')

const isEventsReversed = bits => bits.length === 5 && bits.at(0) === '1'

const toCommands = bits => bits.reduce((acc, currentBit, currentInd, arr) => {
  if (currentBit === '0') return acc
  return acc.concat(commandsChart[10 ** (arr.length - 1 - currentInd)])
}, []).reverse()

export const commands = number => {
  if (isEventsReversed(bits(number))) return toCommands(bits(number).slice(1)).reverse()
  return toCommands(bits(number))
}
