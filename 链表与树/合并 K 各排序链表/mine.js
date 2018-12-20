/**
 * 
 * 题目
 * https://leetcode-cn.com/explore/interview/card/bytedance/244/linked-list-and-tree/1025/ 
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
 }

/**
* @param {ListNode[]} lists
* @return {ListNode}
*/
var mergeKLists = function(lists) {
   if(lists.length == 0) {
       return null
   }
   if(lists.length == 1) {
       return lists[0]
   }
  return lists.reduce((l1, l2)=>{
       let modeHead = new ListNode(0)
       let curNode = modeHead
       while(l1 && l2) {
           if(l1.val < l2.val) {
               curNode.next = l1
               l1 = l1.next
           } else {
               curNode.next = l2
               l2 = l2.next
           }
           curNode = curNode.next
       }
       while(l1) {
           curNode.next = l1
           l1 = l1.next
           curNode = curNode.next
       }
       while(l2) {
           curNode.next = l2
           l2 = l2.next
           curNode = curNode.next
       }

       return modeHead.next
  })
};