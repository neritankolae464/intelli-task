/* 
  Filename: ComplexCode.js 
  Description: This code demonstrates a complex implementation of a multi-level hierarchical data structure and some advanced algorithms.
*/

// Define the Node class for creating a hierarchy
class Node {
  constructor(value, parent = null) {
    this.value = value;
    this.parent = parent;
    this.children = [];
  }

  addChild(childValue) {
    const childNode = new Node(childValue, this);
    this.children.push(childNode);
    return childNode;
  }

  removeChild(childNode) {
    const index = this.children.indexOf(childNode);
    if (index !== -1) {
      this.children.splice(index, 1);
      childNode.parent = null;
    }
  }
}

// Create a sample data hierarchy
const rootNode = new Node("Root");
const childNode1 = rootNode.addChild("Child 1");
const childNode2 = rootNode.addChild("Child 2");
const grandChildNode1 = childNode1.addChild("Grandchild 1");
const grandChildNode2 = childNode1.addChild("Grandchild 2");
const grandChildNode3 = childNode2.addChild("Grandchild 3");

// Traverse hierarchy using Depth First Search (DFS) algorithm
function traverseHierarchy(node) {
  console.log(node.value);
  for (const child of node.children) {
    traverseHierarchy(child);
  }
}

console.log("Hierarchy Traversal:");
traverseHierarchy(rootNode);

// Find the height of the hierarchy using Depth First Search (DFS)
function getHeight(node) {
  if (node.children.length === 0) {
    return 0;
  }

  let maxHeight = 0;
  for (const child of node.children) {
    const height = getHeight(child);
    maxHeight = Math.max(maxHeight, height);
  }
  return maxHeight + 1;
}

console.log(`Hierarchy Height: ${getHeight(rootNode)}`);

// Calculate the sum of all node values in hierarchy using Breadth First Search (BFS)
function calculateSum(node) {
  let sum = 0;
  const queue = [node];

  while (queue.length) {
    const currNode = queue.shift();
    sum += currNode.value;

    for (const child of currNode.children) {
      queue.push(child);
    }
  }

  return sum;
}

console.log(`Sum of All Values: ${calculateSum(rootNode)}`);

// Additional complex code can be added here...

// End of ComplexCode.js