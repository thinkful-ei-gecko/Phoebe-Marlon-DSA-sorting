'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }

    while(currNode.value !== item) {
      if (currNode.next === null){
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(value, newValue) {
    if(this.find(value) === null){
      console.log('Item not found');
      return;
    }
    let beforeNode = this.find(value);
    let currNode = this.head;
 

    while(currNode.next !== beforeNode){
      currNode = currNode.next;
      console.log(currNode);
    }
    currNode.next = new _Node(newValue, beforeNode);
  }
  insertAfter(value, newValue){
    if(this.find(value) === null){
      console.log('Item not found');
      return;
    }
    let currNode = this.head;
    let afterNode = this.find(value);

    while(currNode !== afterNode){
      currNode = currNode.next;
    }
    currNode.next = new _Node(newValue, afterNode.next);
  }
  insertAt(num, newValue){
    let currNode = this.head;
    if(num === 1){
      this.head = new _Node(newValue, this.head);
      return;
    }  
    if(num >= 2){
      for(let i = 2; i < num; i++){
        currNode = currNode.next;
      }
    }
    currNode.next = new _Node(newValue, currNode.next);
  
  }
  
}


module.exports = LinkedList;