# Stacks

A _stack_ is exactly what it sounds like. It is LIFO (last-in first-out): similar to a stack of dinner plates, the most recent item added to the stack is the first item to be removed.

Stacks usually have the following operations:
- `pop`: Remove the top item of the stack
- `push`: Add an item to the top of the stack
- `peek`: Return the top of the stack
- `isEmpty`: Return if the stack is empty

A stack has constant time for adding and removing, and it doesn't require shifting elements around.
Stacks are often useful in recursive algorithms -- in some problems, you need to push temporary data onto a stack and then remove them as you backtrack.
In addition, a stack can be used to implement a recursive algorithm iteratively.

# Queues
A _queue_ is also what it sounds like. It is FIFO (first-in first-out): similar to a line of people, the items are removed in the same order that they are added.

Queues usually have the following operations:
- `add`: Add an item to the end of the queue
- `remove`: Remove the first item in the queue
- `peek`: Return the first item in the queue
- `isEmpty`: Return if the queue is empty

Queues are often used for breadth-first search or in implementing a cache.


Both stacks and queues can be easily implemented as a linked list.