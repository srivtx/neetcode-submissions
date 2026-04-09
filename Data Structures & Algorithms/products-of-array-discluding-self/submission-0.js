class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length ; 
        let left = new Array(n).fill(1); 
        let right = new Array(n).fill(1); 
        let result  = new Array(n); 

        for(let i = 1 ; i < n ; i++){
            left[i] = left[i-1] * nums[i-1]
        }

        right[n-1] = 1; 
        for(let j = n - 2 ; j >= 0 ; j--){
            right[j] = right[j + 1 ] * nums[j+1]; 
        }

        for (let k = 0 ; k < n ; k++){
            result[k] = left[k] * right[k];
        }
        return result ; 
    }


}
