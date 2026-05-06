class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let left = Math.max( ... weights) ; 
        let right = weights.reduce((a,b) => a + b  ,  0 ) ; 
        while( left <= right){
            let mid  = Math.floor((left + right) / 2) ; 
            let d = 1 ; 
            let countweight = 0 ; 

            for(let w of weights){
                if ( countweight + w <= mid ){
                    countweight += w ;
                }else {
                    countweight  = w ; 
                    d++; 
                }
            }

            if (d <= days){
                right = mid - 1 ; 
            }else {
                left = mid + 1 ; 
            }

        }
        return left ; 
    }
}
