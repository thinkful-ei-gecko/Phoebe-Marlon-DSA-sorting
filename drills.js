

//merges
// 1. [1, 21],    26, 45,    29, 28, 2, 9,    16, 49, 39, 27, 43, 34, 46, 40;
// 2. [1, 21],    [26, 45],    29, 28, 2, 9,    16, 49, 39, 27, 43, 34, 46, 40;
// 3. [1, 21, 26, 45],    29,   28,   2, 9,    16, 49, 39, 27, 43, 34, 46, 40;
// 4. [1, 21, 26, 45],   [28, 29],   2, 9,    16, 49, 39, 27, 43, 34, 46, 40;
// 5. [1, 21, 26, 45],   [28, 29],   [2, 9],    16, 49, 39, 27, 43, 34, 46, 40;
// 6. [1, 21, 26, 45],   [2, 9, 29, 28],    16, 49, 39, 27, 43, 34, 46, 40;
// 7. [1, 2, 21, 26, 45, 28, 29, 9],    [16, 49], 39, 27, 43, 34, 46, 40;
// 8. [1, 2, 21, 26, 45, 28, 29, 9],    [16, 49], [27, 39], 43, 34, 46, 40;
// 9. [1, 2, 21, 26, 45, 28, 29, 9],    [16, 27, 39, 49], 43, 34, 46, 40;
// 10. [1, 2, 21, 26, 45, 28, 29, 9],    [16, 27, 39, 49], [34, 43], 46, 40;
// 11. [1, 2, 21, 26, 45, 28, 29, 9],    [16, 27, 39, 49], [34, 43], [40, 46];
// 12. [1, 2, 21, 26, 45, 28, 29, 9],    [16, 27, 39, 49], [34, 40, 43, 46];
// 13. [1, 2, 21, 26, 45, 28, 29, 9],    [16, 27, 34, 39, 40, 43, 46, 49];
// 14. [1, 2, 21, 26, 45, 28, 29, 9, 16, 27, 34, 39, 40, 43, 46, 49];

// 1. Understand merge sort
// Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

// Q: What is the resulting list that will be sorted after 3 recursive calls to mergesort?
// A: [1, 21], [26, 45], [29, 28, 2, 9], [16, 49, 39, 27, 43, 34, 46, 40]

// Q: What is the resulting list that will be sorted after 16 recursive calls to mergesort?
// A: [1, 21, 26, 45, 29, 28, 2, 9],    [16], [49],    [39, 27],    [43, 34, 46, 40];

// Q: What are the first 2 lists to be merged?
// A: [1], [21]

// Q: Which two lists would be merged on the 7th merge?
// A: [28, 29],   [2, 9]  


// 2. Understanding quicksort

// 1. Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.

// Q: The pivot could have been 17, but could not have been 14
// Q: The pivot could have been either 14 or 17
// A: True, it could have been either because the partition function swaps to a position where all values that are greater than the pivot are eventually to its right. 
// Q: Neither 14 nor 17 could have been the pivot
// Q: The pivot could have been 14, but could not have been 17

// 2. Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.

// When using the last item on the list as a pivot
// [[3, 9, 10, 12], [15, 19, 14, 17, 16, 13]]

// When using the first item on the list as a pivot
// [[1, 3, 9],  [14, 17, 24, 22, 20]]


'use strict';
const LinkedList = require('./LinkedList');
    
let stringNums = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';

function stringToArr(str) {
  let arr = str.split(' ');
  arr = arr.map(value => parseInt(value));
  return arr;
}
    
let data = stringToArr(stringNums);

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, start, end) {
  let pivot = arr[end - 1];
  let j = start;

  for(let i = start; i < end - 1; i++) {
    if(arr[i] <= pivot){
      swap(arr, i, j);
      j++;
    }
  }
  swap(arr, end - 1, j);
  return j;
}

function quickSort(arr, start=0, end=arr.length) {
  if(start >= end){
    return arr;
  }

  let middle = partition(arr, start, end);

  arr = quickSort(arr, start, middle);
  arr = quickSort(arr, middle + 1, end);

  return arr;
}

function merge(leftArr, rightArr, arr){
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if(leftArr[leftIndex] < rightArr[rightIndex]) {
      arr[outputIndex++] = leftArr[leftIndex++]
    }
    else {
      arr[outputIndex++] = rightArr[rightIndex++];
    }
  }

  for(let i = leftIndex; i < leftArr.length; i++){
    arr[outputIndex++] = leftArr[i];
  }
  for(let i = rightIndex; i < rightArr.length; i++){
    arr[outputIndex++] = rightArr[i];
  }

  return arr;
}

function mergeSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, middle);
  let rightArr = arr.slice(middle, arr.length);

  leftArr = mergeSort(leftArr);
  rightArr = mergeSort(rightArr);

  return merge(leftArr, rightArr, arr);
}

// console.log(mergeSort(data));


function display(linkedList) {
  console.log(JSON.stringify(linkedList));
}

function getSize(linkedList){
  let currNode = linkedList.head;
  let counter = 0;
  while(currNode !== null){
    currNode = currNode.next;
    counter++;
  }

  return counter;
}

function isEmpty(linkedList){
  if(linkedList.head === null){
    console.log('Linked list is empty');
    return;
  }
  console.log('Linked list is not empty');
}

function findPrevious(linkedList, value){
  let node = linkedList.find(value);
  let currentNode = linkedList.head;

  if(node === currentNode){
    console.log('Value is the first item of the linked list');
    return;
  }
  while(currentNode.next !== node){
    currentNode = currentNode.next;
  }

  return currentNode;
}

function findLast(linkedList){
  let currentNode = linkedList.head;

  while(currentNode.next !== null){
    currentNode = currentNode.next;
  }

  return currentNode;
}

let LinkedListData = new LinkedList();
data.map(value => LinkedListData.insertLast(value));
console.log(getSize(LinkedListData));

function linkedListMerge(left, right, LL) {
  let leftNode = left.head;
  let rightNode = right.head;

  while(leftNode && rightNode) {
    if(leftNode.value < rightNode.value) {
      LL.insertLast(leftNode.value);
      leftNode.next;
    }
    else{
      LL.insertLast(rightNode.value);
      rightNode.next;
    }
  }
  while(leftNode){
    LL.insertLast(leftNode.value);
    leftNode.next;
  }
  while(rightNode){
    LL.insertLast(rightNode.value);
    rightNode.next;
  }
  display(LL);
  return LL;
}

function linkedListMergeSort(LL) {
  let length = getSize(LL);
  let currNode = LL.head;

  if(getSize(LL) <= 1){
    return LL;
  }

  let middle = Math.floor(length / 2);
  let leftLL = new LinkedList(); 

  for (let i = 0; i < middle; i++) {
    leftLL.insertLast(currNode.value);
    LL.remove(currNode.value);
    currNode = currNode.next;
  }

  leftLL = linkedListMergeSort(leftLL);

  let rightLL = new LinkedList();
  for (let i = middle; i < length; i++) {
    rightLL.insertLast(currNode.value);
    LL.remove(currNode.value);
    currNode = currNode.next;
  }

  rightLL = linkedListMergeSort(rightLL);
  
  return linkedListMerge(leftLL, rightLL, LL);
}

linkedListMergeSort(LinkedListData);
display(LinkedListData);