/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let curr1 = list1 ; 
        let curr2 = list2  ; 

        let dummy =  new ListNode(0) ; 
        let tail = dummy ; 

        while (curr1 !== null && curr2 !== null){
            if ( curr1.val  >= curr2.val) {
                tail.next = curr2 ; 
                curr2 = curr2.next ;
            }else {
                tail.next = curr1 ; 
                curr1 = curr1.next; 
            }
            tail = tail.next ; 
        }

        if( curr1 !== null ){
            tail.next  = curr1 ; 
        }
        if ( curr2 !== null){
            tail.next = curr2 ; 
        }

        return dummy.next ;
        
    }
}
