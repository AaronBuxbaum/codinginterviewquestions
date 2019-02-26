# Dynamic Programming & Memoization

Dynamic Programming is a matter of taking a recursive algorithm and finding the _overlapping subproblems_ (that is, the repeated calls). You then cache those results for future recursive calls.
Alternatively, you can study the pattern of the recursive calls and implement something iterative. You still "cache" previous work.

Drawing the recursive calls as a tree is a great way to figure out the runtime of a recursive algorithm!
It can also be easier to visualize if you show the recursive stack as breadth-first rather than depth-first, even if that's not how the actual call stack worked. That can make it easier to pick out patterns in the system.

If you draw out the recursive calls (ie. what the input is and what stacks it produces recursively), some problems show lots of identical nodes (ie. in fibonacci, it products lots of fib(0), fib(1), fib(2), fib(3)). We should avoid recomputing these! In fibonacci, it goes from O(2^N) to O(N).

You can also take this approach and do it bottom-up -- some people say this is the only _real_ way to do dynamic programming as opposed to memoization. It's effectively the same methodology as the recursive memoized approach in reverse.

First we compute the base cases and then find a way to use those to compute a higher case, and repeat continually. You're basically storing the cases that you need and then utilizing those values. In the fibonacci example, you can calculate the values of fib(0) and fib(1), and then you can calculate fib(2) from fib(0) + fib(1), then store fib(1) and fib(2), and repeat indefinitely.