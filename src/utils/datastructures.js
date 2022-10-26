class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return true;
    }
    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return true;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return true;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value == currentNode.value) {
        return currentNode;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }
}

const binarysearchtree = new BinarySearchTree();
binarysearchtree.insert(9);
binarysearchtree.insert(6);
binarysearchtree.insert(10);

// console.log("binarysearchtree", binarysearchtree.lookup(10));
