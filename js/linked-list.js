/*

Implement a doubly linked list.

Like an array, a linked list is a simple linear data structure.
Several common data types can be implemented using linked lists,
like queues, stacks, and associative arrays.

A linked list is a collection of data elements called nodes.
In a singly linked list each node holds a value
and a link to the next node.
In a doubly linked list each node also holds a link to the previous node.

You will write an implementation of a doubly linked list.
Implement a Node to hold a value and pointers to the next and previous nodes.
Then implement a List which holds references to the first and last node
and offers an array-like interface for adding and removing items:

  push (insert value at back);
  pop (remove value at back);
  shift (remove value at front).
  unshift (insert value at front);

To keep your implementation simple,
the tests will not cover error conditions.
Specifically: `pop` or `shift` will never be called on an empty list.

If you want to know more about linked lists, check
https://en.wikipedia.org/wiki/Linked_list

Your list must also implement the following interface:

  delete (delete the first occurrence of a specified value)
  count (count the number of items in the list)

NOTE: Do not use a library to implement this exercise.
Do not use a backing array to implement this exercise.

*/

export class LinkedList {
  constructor(value) {
    this.head = null
    this.tail = null
    this.length = 0
  }

  #createNode(value) {
    return {
      value: value,
      next: null,
      previous: null,
    }
  }

  push(value) {
    const newNode = this.#createNode(value)

    if (!this.head) this.head = newNode
    newNode.previous = this.tail
    if (this.tail) this.tail.next = newNode
    this.tail = newNode
    this.length++
  }

  pop() {
    const removedTail = this.tail

    this.tail = this.tail.previous
    this.length--
    return removedTail.value
  }

  shift() {
    const removedHead = this.head

    this.head = this.head.next
    this.length--
    return removedHead.value
  }

  unshift(value) {
    const newNode = this.#createNode(value)

    newNode.next = this.head
    if (this.head) this.head.previous = newNode
    this.head = newNode
    this.length++
  }

  delete(value) {
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.value === value) {
        if (currentNode.previous) currentNode.previous.next = currentNode.next
        if (!currentNode.next) this.tail = currentNode.previous
        if (currentNode.next) currentNode.next.previous = currentNode.previous
        this.length--
        break
      }
      currentNode = currentNode.next
    }
  }

  count() {
    return this.length
  }
}
