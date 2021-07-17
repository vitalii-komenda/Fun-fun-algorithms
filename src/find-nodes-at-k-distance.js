// Find all nodes in BST at K distance starting at N
// Example
//              100
//      50            200
//  40      60    150    300
//        55  70
//
// N = 60, K = 1, Result = 50, 55, 70
// N = 60, K = 2, Result = 40, 100
// N = 60, K = 4, Result = 150, 300
// find(generateTree(), N, K) 

const Node = function (val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.visited = false;
}

const generateTree = () => {
    tree = new Node(100);
    tree.left = new Node(50);
    tree.left.left = new Node(40);
    tree.left.right = new Node(60);
    tree.left.right.right = new Node(70);
    tree.left.right.left = new Node(55);

    tree.right = new Node(200);
    tree.right.right = new Node(300);
    tree.right.left = new Node(150);

    return tree;
}

const find = (tree, n, k) => {
  const res = [];
  let foundOnLevel = false

  const findChildren = (node, k) => {
      if (!node) return;
      if (k < 0) return;
      if (node.visited) return

      if (k === 0 && !node.visited) {
          node.visited = true;
          res.push(node.val);
          return;
      }

      findChildren(node.left, k - 1);
      findChildren(node.right, k - 1);
  }

  const t = (node, k, l) => {
      if (!node) return;

      if (node.val === n) {
          foundOnLevel = l;

          findChildren(node, k);
      } else if (node.val < n) {
          t(node.right, k, l + 1)
      } else {
          t(node.left, k, l + 1)
      }

      if (foundOnLevel && foundOnLevel - l === k) {
          res.push(node.val);
      }

      if (k - (foundOnLevel - l) > 0) {
          findChildren(node, k - (foundOnLevel - l));
      }

      if (foundOnLevel) {
          node.visited = true;
      }
  }

  t(tree, k, 1)

  return res;
}
