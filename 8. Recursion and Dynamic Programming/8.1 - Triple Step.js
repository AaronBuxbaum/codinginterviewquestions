/*
  A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time.
  Implement a method to count how many possible ways the child can run up the stairs.
 */

const memoizedValues = {};

export const tripleStep = numStairs => {
  if (memoizedValues[numStairs]) {
    return memoizedValues[numStairs];
  }

  if (numStairs < 0) {
    return 0;
  }

  if (numStairs === 0) {
    return 1;
  }

  memoizedValues[numStairs] =
    tripleStep(numStairs - 1) +
    tripleStep(numStairs - 2) +
    tripleStep(numStairs - 3);

  return memoizedValues[numStairs];
};
