/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
let noChild = (parent, key) => {
    if (key > parent.val) {
        parent.right = null;
    } else {
        parent.left = null;
    }
};
let oneChild = (node) => {
    if (node.left) {
        let left = node.left;
        node.val = left.val;
        node.left = left.left;
        node.right = left.right;
    } else if (node.right) {
        let right = node.right;
        node.val = right.val;
        node.right = right.right;
        node.left = right.left;
    }
};
let twoChildren = (node, rightParent, right) => {
    if (right.left) {
        return twoChildren(node, right, right.left)
    }
    
    if (node.val === rightParent.val) {
        node.right = rightParent.right.right;
    } else {
        rightParent.left = right.right;
    }
    node.val = right.val;
}
let del = (node, parent, val) => {
    if (!node) return;

    if (node.val === val) {
        if (!node.left && !node.right) {
            noChild(parent, val);
        } else if ((node.left && !node.right)
           || !node.left && node.right) {
            oneChild(node);
        } else if (node.left && node.right) {
           twoChildren(node, node, node.right);    
        }
        return;
    }

    if (node.val > val) return del(node.left, node, val);
    if (node.val < val) return del(node.right, node, val);
};
let deleteNode = (root, key) => {
    if (root && !root.left && !root.right && root.val === key) {
        return null;
    }
    
    del(root, root, key);
    
    return root;
};
