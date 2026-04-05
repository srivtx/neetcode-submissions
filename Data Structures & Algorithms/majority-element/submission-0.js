class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = new Map(); 
        let max = -Infinity ; 
        for ( let i = 0 ; i < nums.length ; i++){
            if (map.has(nums[i])){
                map.set(nums[i] , map.get(nums[i]) + 1); 
            }else {
                map.set(nums[i] , 1); 
            }
        }

        let maxkey = null ; 
        let maxValue = -Infinity ; 
        for (let [key , value ] of map){
            if (value > maxValue){
                maxkey =  key ; 
                maxValue = value 
            }
        }
        return maxkey ; 
    }
}
