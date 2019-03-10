/*
 Given an infinite number of quarters (25 cents), dimes (10 cents), nickels (5 cents), and pennies (1 cent), write code to calculate the number of ways of representing n cents.
 */

export const getCoins = (
  cents,
  denominations = [25, 10, 5, 1],
  index = 0,
  seen = {}
) => {
  if (index >= denominations.length - 1) {
    return 1;
  }

  const coinValue = denominations[index];
  const memoized = seen[cents] && seen[cents][index];

  if (memoized) {
    return memoized;
  }

  let ways = 0;

  for (let i = 0; i * coinValue <= cents; i++) {
    const remaining = cents - i * coinValue;
    ways += getCoins(remaining, denominations, index + 1, seen);
  }

  if (!seen[cents]) {
    seen[cents] = {};
  }
  seen[cents][index] = ways;

  return ways;
};

/*
  time: we effectively test the value from N to 1 (N) with each monetary unit (M) -- so, O(N * M) time
  space: O(N * M) -- each value with each monetary unit is stored in the memoized object
 */
