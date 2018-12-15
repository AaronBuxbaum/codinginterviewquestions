import { buildList } from "../LinkedList";
import { isPalindrome } from "../2.6 - Palindrome";

test("Palindrome", () => {
  let list = buildList("tacocat".split(""));
  expect(isPalindrome(list)).toEqual(true);

  list = buildList("abba".split(""));
  expect(isPalindrome(list)).toEqual(true);

  list = buildList("abcda".split(""));
  expect(isPalindrome(list)).toEqual(false);
});
