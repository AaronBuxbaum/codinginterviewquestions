export class TrieNode {
  constructor(value) {
    this.value = value;
    this.children = {};
  }

  addChild(value) {
    this.children[value] = new TrieNode(value);
  }

  hasChild(value) {
    return !!this.getChild(value);
  }

  getChild(value) {
    return this.children[value];
  }
}

export class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  findNode(word, addMissing) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word.charAt(i);
      if (!node.hasChild(char)) {
        if (addMissing) {
          node.addChild(char);
        } else {
          return;
        }
      }
      node = node.getChild(char);
    }

    return node;
  }

  addWord(word) {
    const node = this.findNode(word, true);
    node.isTerminating = true;
  }

  includes(word) {
    const node = this.findNode(word);
    return !!node;
  }

  isWord(word) {
    const node = this.findNode(word);
    return node && !!node.isTerminating;
  }
}
