class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = 0 ; 
        let max_profit  = 0 ; 
        let sell ; 
        for ( sell = 1 ; sell < prices.length ; sell++){
            if ( prices[sell] > prices[buy]){
                let profit = prices[sell] - prices[buy]; 
                max_profit = Math.max(profit , max_profit);
            }else {
                buy = sell  ; 
            }
        }
        return max_profit ; 
    }
}

