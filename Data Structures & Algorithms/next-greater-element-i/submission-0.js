class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        const stack = [] ; 
        const nextGreater = { 
        } ; 
        for (const num of nums2) {
            while ( stack.length  &&  num > stack[stack.length - 1] ){
                const smaller = stack.pop() ; 
                nextGreater[smaller] = num ;
            }
            stack.push(num)
        }

        while(stack.length) { 
            nextGreater[stack.pop()] = -1  ; 
        }

        const result = [] ; 
       for ( const num of nums1) { 
            result.push(nextGreater[num]) ; 
        }
        return result ; 
    }

}
