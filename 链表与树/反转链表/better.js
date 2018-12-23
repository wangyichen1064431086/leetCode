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
var reverseList = function(head) {
    if (!head || !head.next) return head
    const new_head = reverseList(head.next)
    head.next.next = head
    head.next = null
    return new_head
  };

// 好抽象