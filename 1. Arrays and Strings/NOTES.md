# Hash tables
A _hash table_ is a data structure that maps keys to values.

Implementation (at least, one of them):
  - we need a `hash` function -- a function that generates a hash (typically an int) based on its value. Two different values can have the same hash.
  - we also need an array of linked lists as the data storage

To insert:
  1. compute hash of the key. ex: hash(key)
  2. map hash to an index in the array. ex: hashed_key % array.length
  3. this index of the array is a linked list; insert the key and value to that list

To retreive, compute hash of the key, compute the index from the hash, then search through the linked list for the appropriate key. Theoreticatically this has runtime of O(N), but we can typically assume low collisions for O(1)

We could also implement with a balanced binary search tree -- the benefits are less space (no need to allocate a large array) and the ability to iterate through keys in order, but tradeoff for O(log N) retreival time.


# ArrayList
In some languages, arrays automatically are resized as they are they are used (often called lists in this case). In those languages, the array typically is doubled in size when the array is full -- amortized insertion time is still O(1) even though we need to copy N items each time:
  final capacity increase: n/2 elements to copy
  previous capacity increase: n/4 elements to copy
  previous capacity increase: n/8 elements to copy
  previous capacity increase: n/16 elements to copy
  ...
  third capacity increase: 4 elements to copy
  second capacity increase: 2 elements to copy
  first capacity increase: 1 element  to copy

Therefore, total number of copies to insert N elements is N/2 + N/4 + N/8 + N/16 + ... + 4 + 2 + 1 = N (by the geometric series). Therefore, inserting N elements takes O(N) total work, meaning that each insertion on average takes O(1), even though some insertions take O(N) time in the worst case.


# StringBuilder
Not really a thing in Javascript, but if we copy strings over and concatenate, we take O(X * N^2) time
  first string copy: X characters
  second string copy: 2 * X characters
  ...
  Nth string copy: N * X elements

Because 1 + 2 + ... + N === N(N-1)/2, which reduces to N^2, this reduces down to O(X * N^2).