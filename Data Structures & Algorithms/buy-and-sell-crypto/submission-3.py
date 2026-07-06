class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit =  0 
        minimum_buy = prices[0]

        for price in prices : 
            minimum_buy = min(minimum_buy , price)
            profit = max (profit , price - minimum_buy) 
        return profit 