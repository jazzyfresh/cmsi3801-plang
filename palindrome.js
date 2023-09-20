// Check that a linked list is a palindrome
// tenet
// racecar
// tacocat

// Linked List
// data structure, class that has special properties
// head ->( a )->( b )->( c )-> null

// Doubly Linked List
// data structure, class that has special properties
// ->( a )<->( b )<->( c )<-

// Linked List - represents a word
// each node is a character in the word

class Node {
  constructor(next, data) {
    this.next = next;
    this.data = data;
  }

  // appends to end of linked list
  append(data) {
    var end = new Node(null, data);
    var i = this;
    while (i.next != null) {
      i = i.next;
    }
    i.next = end;
  }
}

var head = new Node(null, "a");

//head.next = new Node(null, "b");
//head.next.next = new Node(null, "c");

head.append("b");
head.append("c");

for (let item = head; item != null; item = item.next) {
  console.log(item.data);
}

