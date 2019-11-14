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