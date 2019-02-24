import { Trie } from "../Trie";

test("Trie", () => {
  const trie = new Trie();

  trie.addWord("he");
  trie.addWord("hello");
  trie.addWord("hell");
  trie.addWord("help");
  trie.addWord("supercalifragilisticexpialidocious");

  expect(trie.includes("hello")).toBe(true);
  expect(trie.includes("nope")).toBe(false);

  expect(trie.includes("supercalif")).toBe(true);
  expect(trie.isWord("supercalif")).toBe(false);
  expect(trie.isWord("supercalifragilisticexpialidocious")).toBe(true);

  expect(trie.includes("hel")).toBe(true);
  expect(trie.isWord("hel")).toBe(false);

  expect(trie.includes("help")).toBe(true);
  expect(trie.isWord("help")).toBe(true);
});
