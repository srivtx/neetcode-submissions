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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head ; 
        let fast = head ;


        while(fast !== null  && fast.next !== null ){
            slow = slow.next ;
            fast = fast.next.next; 
        } 

        let second = slow.next ;
        slow.next = null ; 

        let prev = null ;
        while(second !== null)  {
            let next = second.next ; 
            second.next = prev ; 
            prev = second ; 
            second = next ; 
        }

        let first = head ; 
        let secondHalf = prev ; 


        while (secondHalf !== null){
            let temp1 = first.next; 
            let temp2 = secondHalf.next; 

            first.next = secondHalf ; 
            secondHalf.next = temp1 ; 
            first = temp1 ; 
            secondHalf = temp2 ; 
        }
        

    }
}
