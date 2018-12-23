/** 
 * 题目： https://leetcode-cn.com/explore/interview/card/bytedance/244/linked-list-and-tree/1040/
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。（也就是要使用归并排序）
*/

/** 
 * Definition for singly-linked list.
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(!head || !head.next) {
        return head
    }
    let fast = head
    let slow = head
    let preSlow
    while(fast && fast.next) {
        preSlow = slow
        slow = slow.next
        fast = fast.next.next
    }
    preSlow.next= null //  这一步很关键！
    
    return mergeTwoSortedList(sortList(head), sortList(slow))
};


var mergeTwoSortedList = (l1, l2) => {
   let dummyHead = new ListNode(0)
   let curNode = dummyHead
   while(l1 && l2) {
       if(l1.val < l2.val) {
           curNode.next = l1
           l1 = l1.next
       } else {
           curNode.next = l2
           l2 = l2.next
       }
       curNode = curNode.next //别忘了这个！！
   }
    while(l1) {
        curNode.next = l1
        l1 = l1.next
        curNode = curNode.next // 别忘了这个！！
    }
    while(l2) {
        curNode.next = l2
        l2 = l2.next
        curNode = curNode.next // 别忘了这个！！
    }
    return dummyHead.next
}
