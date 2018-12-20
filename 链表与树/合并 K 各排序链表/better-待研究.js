
let mergeTwoList = function (node1,node2) {
    let node = new ListNode();
    let cur = node;
    while (node1 && node2){
        if(node1.val < node2.val){
            cur.next = node1;
            node1 = node1.next;
        }else{
            cur.next = node2;
            node2 = node2.next;
        }
        cur = cur.next;
    }
    if(node1){
        cur.next = node1;
    }
    if(node2){
        cur.next = node2;
    }
    return node.next;
};


let mergeKLists = function(lists) {
    if(!lists.length){
        return [];
    }
    let len = lists.length;
    while (len > 1){
        let i = 0,j = len - 1;
        while (i<j){
            lists[i] = mergeTwoList(lists[i], lists[j]);
            i++;
            j--;
        }
        if(i === j){
            i++;
        }
        len = i;
    }
    return lists[0];
};