/**
 *  题目：https://leetcode-cn.com/problems/middle-of-the-linked-list/
 * 给定一个带有头结点 head 的非空单链表，返回链表的中间结点。
如果有两个中间结点，则返回第二个中间结点。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    if(!head.next) {
        return head
    }
    let fast = head
    let slow = head
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    return slow
};