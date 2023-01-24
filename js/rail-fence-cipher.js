/*

Implement encoding and decoding for the rail fence cipher.

The Rail Fence cipher is a form of transposition cipher
that gets its name from the way in which it's encoded.
It was already used by the ancient Greeks.

In the Rail Fence cipher,
the message is written downwards on successive "rails" of an imaginary fence,
then moving up when we get to the bottom (like a zig-zag).
Finally the message is then read off in rows.

For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE",
the cipherer writes out:

  W . . . E . . . C . . . R . . . L . . . T . . . E
  . E . R . D . S . O . E . E . F . E . A . O . C .
  . . A . . . I . . . V . . . D . . . E . . . N . .

Then reads off:

  WECRLTEERDSOEEFEAOCAIVDEN

To decrypt a message you take the zig-zag shape and fill the ciphertext along the rows.

  ? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
  . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
  . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

The first row has seven spots that can be filled with "WECRLTE".

  W . . . E . . . C . . . R . . . L . . . T . . . E
  . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
  . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

Now the 2nd row takes "ERDSOEEFEAOC".

  W . . . E . . . C . . . R . . . L . . . T . . . E
  . E . R . D . S . O . E . E . F . E . A . O . C .
  . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

Leaving "AIVDEN" for the last row.

  W . . . E . . . C . . . R . . . L . . . T . . . E
  . E . R . D . S . O . E . E . F . E . A . O . C .
  . . A . . . I . . . V . . . D . . . E . . . N . .

If you now read along the zig-zag shape you can read the original message.

See also: https://www.reddit.com/r/dailyprogrammer/comments/2rnwzf/20150107_challenge_196_intermediate_rail_fence/cni11rt/?context=8&depth=9

*/

const triangleWave = (x, amplitude, halfPeriod) => {
  return (amplitude / halfPeriod) * (
    halfPeriod - Math.abs(x % (2 * halfPeriod) - halfPeriod)
  )
}

const inOrderOf = (arrayOne, arrayTwo) => {
  const compare = (a, b) => a[1] - b[1]

  return arrayOne.slice().map((elem, ind) => [elem, arrayTwo.at(ind)])
    .sort(compare).map(elem => elem.at(0))
}

export const encode = (text, numOfRails) => {
  const chars = text.split('')
  const zigzag = [...Array(text.length)].map((_, ind) => {
    return triangleWave(ind, numOfRails - 1, numOfRails - 1)
  })

  return inOrderOf(chars, zigzag).join('')
}

export const decode = (text, numOfRails) => {
  const chars = text.split('')
  const zigzag = [...Array(text.length)].map((_, ind) => {
    return triangleWave(ind, numOfRails - 1, numOfRails - 1)
  })
  const knownOrder = [...Array(text.length)].map((_, ind) => ind)
  const positionNumbers = inOrderOf(knownOrder, zigzag)

  return inOrderOf(chars, positionNumbers).join('')
}
