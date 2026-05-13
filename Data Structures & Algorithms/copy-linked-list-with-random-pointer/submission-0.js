// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (head === null){
            return null ;
        }

        let curr = head ; 
        while (curr !== null ){
            let copy  = new Node(curr.val); 
            copy.next = curr.next ;
            curr.next = copy  
            curr = copy.next ;
        }

          curr = head ; 
        while (curr !== null ){
            if(curr.random !== null){
                curr.next.random = curr.random.next ; 
            }
            curr = curr.next.next ; 
        }

         curr = head ; 
        let dummy = new Node(0); 
        let copycurr = dummy ; 

        while(curr !== null){
            let copy = curr.next ; 

            copycurr.next = copy; 
            
            copycurr = copy ; 


            curr.next = copy.next; 

            curr = curr.next ; 

            
        }
        return dummy.next;  
    }
}
