/*

Diffie-Hellman key exchange.

Alice and Bob use Diffie-Hellman key exchange to share secrets.
They start with prime numbers, pick private keys,
generate and share public keys, and then generate a shared secret key.

Step 0

  The test program supplies prime numbers p and g.

Step 1

  Alice picks a private key, a, greater than 1 and less than p.
  Bob does the same to pick a private key b.

Step 2

  Alice calculates a public key A.

    A = g**a mod p

  Using the same p and g,
  Bob similarly calculates a public key B from his private key b.

Step 3

  Alice and Bob exchange public keys. Alice calculates secret key s.

    s = B**a mod p

  Bob calculates

    s = A**b mod p

  The calculations produce the same result! Alice and Bob now share secret s.

*/

function isPrime(num) {
  return Array.from({ length: num }, (elem, ind) => ind + 1).filter(
    (item, elem) => (num % item) === 0
  ).length === 2
}

export class DiffieHellman {
  constructor(p, g) {
    if (p <= 0 || g >= 9999) throw new Error
    if (!isPrime(p) || !isPrime(g)) throw new Error
    this.primeNumberP = p
    this.primeNumberG = g
  }

  getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this.primeNumberP) throw new Error
    return this.primeNumberG ** privateKey % this.primeNumberP
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return theirPublicKey ** myPrivateKey % this.primeNumberP
  }
}
