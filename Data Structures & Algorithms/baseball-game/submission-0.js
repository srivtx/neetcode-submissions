class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [] ; 
        
        for (let op of operations){
            if (op === "C"){
                stack.pop()
            }
            else if (op === "D"){
                stack.push(stack[stack.length-1] * 2 )
            }
            else if (op === "+"){
                let fprev = stack[stack.length-1] ; 
                let sprev = stack[stack.length-2] ; 
                
                stack.push(fprev + sprev) ; 
            } else {
                stack.push(Number(op))
            }
        }
        let sum = 0 ; 
        for (let num of stack){
            sum += num ; 
        }
        return sum ; 
    }
}
