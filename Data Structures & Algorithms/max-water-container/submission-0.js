class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0 ; 
        let j = heights.length-1  ;
        let max = -Infinity ;  

        while(i < j){
            let amount_of_water = ( j - i) * Math.min(heights[i] , heights[j]); 
            max = Math.max(amount_of_water , max); 
            if (heights[i] > heights[j]){
                j-- ; 
            }else {
                i++; 
            }
        }
        return max ; 
    }
}
