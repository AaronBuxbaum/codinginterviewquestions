import { getCoins } from "../8.11 - Coins";

test("Coins", () => {
  expect(getCoins(10)).toEqual(4);
  expect(getCoins(20)).toEqual(9);
  expect(getCoins(25)).toEqual(13);
  expect(getCoins(10000)).toEqual(134235101);
});
