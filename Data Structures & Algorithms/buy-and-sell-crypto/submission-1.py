class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minimum_price = prices[0] 
        maximum_profit = 0 

        for price in prices : 
            if price < minimum_price : 
                minimum_price = price 
            
            profit = price - minimum_price 

            if profit  > maximum_profit : 
                maximum_profit = profit 
        return maximum_profit 


        