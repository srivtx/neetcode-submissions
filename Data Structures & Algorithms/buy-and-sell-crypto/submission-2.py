class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # we ll track first two things which are imp minimum price 
        # and the second thing is maximum profit
        minimum_price = prices[0]
        maximum_profit = 0 

        for price in prices : 
            if price < minimum_price : 
                minimum_price = price 
            
            profit  = price - minimum_price 

            if profit > maximum_profit : 
                maximum_profit = profit 
        return maximum_profit 


         

        