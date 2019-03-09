# Sorting

Sorting is useful for interview problems. Merge Sort, Quick Sort and Bucket Sort are the most common.


## Bubble Sort
  - Runtime: O(n^2) average and worst case
  - Memory: O(1)
  
Start at the beginning and swap the first two, then swap the next pair, and so on, until the end. Then repeat, effectively bubbling up each element into its correct location.


## Selection Sort
  - Runtime: O(n^2) average and worst case
  - Memory: O(1)
  
Linearly search for a smallest element and move it to the front. Repeat until each element is in place.


## Merge Sort
  - Runtime: O(n log(n)) average and worst case
  - Memory: O(n) -- extra space needed for copying parts of the array
  
Divide the array in half, sort each of the halves, them merge them back. Recursively, this merging occurs until you are merging two single-element arrays. The merge is where the interesting part is.

To merge: copy all elements from the target array segment into a helper array, keeping track of where the start of the left and right halves should be. Then, iterate through the helper array, copying the smaller element from each half into the array. At the end, copy any remaining elements into the target array.

Example:
```
[5 3 9 2 6 8 1 3]
```

Break in half:
```
[5 3 9 2] [6 8 1 3]
```

Break in half again:
```
[5 3] [9 2] [6 8] [1 3]
```

Break in half again:
```
[5] [3] [9] [2] [6] [8] [1] [3]
```

Now start merging by taking each pair and pushing them in order:
```
[3 5] [2 9] [6 8] [1 3]
```

Again, take each pair and take the smallest of the two on the left side until we run out of elements:
```
[2 3 5 9] [1 3 6 8]
```

And repeat again, and we have a sorted array:
```
[1 2 3 3 5 6 8 9]
```


## Quick Sort
  - Runtime: O(n log(n)) average, O(n^2) worst case
  - Memory: O(log (n)) -- recursive stacks

Pick a random element (the middle is usually fine) and _partition_ the array such that all numbers that are less than the partition come before all elements that are greater than it. If you repeatedly partition around an element, the array will eventually become sorted. However, in the worst case (ie. the pivot is the largest element), you effectively end up with a bubble sort.


## Radix Sort
  - Runtime: O(kn) -- k is the maximum number of bits in an element in the array
  - Memory: O(1)
If you have integers (and some other data types with finite number of bits), you can iterate through each _digit_, grouping by that digit. For example, with an array of integers, you might sort by the first digit, then next, then next, ending up with a sorted array in the end.



# Searching

For searching, we typically think of binary search.

In binary search, we look for an element by comparing the desired value to the midpoint of a sorted array, if X is greater than we search the right side, repeating until we find the value or the subarray has size 0.

There are other ways to search -- you could leverage a binary tree or by using a hash table.