/*

Simulate a bank account supporting opening/closing, withdrawals, and deposits of money.
Watch out for concurrent transactions!

A bank account can be accessed in multiple ways.
Clients can make deposits and withdrawals using the internet, mobile phones, etc.
Shops can charge against the account.

Create an account that can be accessed from multiple threads/processes
(terminology depends on your programming language).

It should be possible to close an account;
operations against a closed account must fail.

*/

export class BankAccount {
  constructor() {
    this.value = undefined
  }

  open() {
    if (this.value !== undefined) throw new ValueError
    
    return this.value = 0
  }

  close() {
    if (this.value === undefined) throw new ValueError
    
    return this.value = undefined
  }

  deposit(money) {
    if (this.value === undefined) throw new ValueError
    if (money <= 0) throw new ValueError

    return this.value += money
  }

  withdraw(money) {
    if (this.value === undefined) throw new ValueError
    if (money <= 0) throw new ValueError
    if (this.value < money) throw new ValueError

    return this.value -= money
  }

  get balance() {
    if (this.value === undefined) throw new ValueError
    
    return this.value
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error')
  }
}
