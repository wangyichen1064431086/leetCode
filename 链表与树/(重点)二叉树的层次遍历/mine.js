/**
 * 
题目：https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = []
    const preOrderTraverseNode = (node, cb, level = 0) => {
        if(!node) {
            return
        }
        cb(node, level)
        const nextLevel = level + 1
        preOrderTraverseNode(node.left, cb, nextLevel)
        preOrderTraverseNode(node.right, cb, nextLevel)
    }
    
    const addNodeToOneLevel = (node, level) => {
        if(Array.isArray(result[level])) {
            result[level].push(node.val)
        } else {
            result[level] = [node.val]
        }
    }
    
    preOrderTraverseNode(root, addNodeToOneLevel, 0)
    
    return result
};


/**
 * 延伸： 二叉树的锯齿形层次遍历
 * https://leetcode-cn.com/explore/interview/card/bytedance/244/linked-list-and-tree/1027/
 
 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    const result = []
    
    const preOrderTraverseNode = (node, cb, level) => {
        if(!node) {
            return
        }
        cb(node, level)
        const nextLevel = level + 1
        preOrderTraverseNode(node.left, cb, nextLevel)
        preOrderTraverseNode(node.right, cb, nextLevel)
    }
    
    const addNodeToLevel = (node, level) => {
        if(Array.isArray(result[level])) {
            if(level%2) {
                result[level].unshift(node.val)
            } else {
                result[level].push(node.val)
            }
        }else {
            result[level] = [node.val]
        }    
    }
    
    preOrderTraverseNode(root, addNodeToLevel, 0)
    return result
};