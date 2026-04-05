class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map(); 
        let result = [] ; 
        for ( let i = 0 ; i < nums.length ; i++){
            if (map.has(nums[i])){
                map.set(nums[i] , map.get(nums[i]) + 1)
            }else {
                map.set(nums[i] , 1)
            }
        }
        for (let j = 0 ;  j < k ; j++){
            let val = null; 
            let maxValue = -Infinity ; 
            for( let [key, value] of map){
            if ( value > maxValue){
                maxValue = value ; 
                val = key ; 
            }
        }
            result.push(val); 
            map.delete(val); 
        }
        
        
        return result ; 

    }
}
