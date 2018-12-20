/*
题目： https://leetcode-cn.com/explore/interview/card/bytedance/244/linked-list-and-tree/1048/

将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1 === null) {
        return l2
    }
    if(l2 === null) {
        return l1
    }
    let l1Node = l1
    let l2Node = l2
    let newListHead = null
    let newListCurNode
    while(l1Node && l2Node) {
        if(l1Node.val < l2Node.val) {
            if(newListHead === null) {
                newListHead = l1Node
                newListCurNode = newListHead
            } else {
                newListCurNode.next = l1Node
                newListCurNode = newListCurNode.next
            }
            l1Node = l1Node.next
        } else {
            if(newListHead === null) {
                newListHead = l2Node
                newListCurNode = newListHead
            } else {
                newListCurNode.next = l2Node
                newListCurNode = newListCurNode.next
            }
            l2Node = l2Node.next
        }

    }
    
    while(l1Node) {
        newListCurNode.next = l1Node
        newListCurNode = newListCurNode.next
        l1Node = l1Node.next
    }
    
    while(l2Node) {
        newListCurNode.next = l2Node
        newListCurNode = newListCurNode.next
        l2Node = l2Node.next
    }
    return newListHead
};