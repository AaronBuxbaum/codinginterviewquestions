import { urlify } from "../1.3 - URLify";

test("URLify", () => {
  expect(urlify("Mr John Smith      ", 13)).toEqual("Mr%20John%20Smith");
});
