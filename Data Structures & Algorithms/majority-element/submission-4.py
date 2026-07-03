class Solution:
    def majorityElement(self, nums: List[int]) -> int:

        freq = { }

        for num in nums : 
            if num in freq : 
                freq[num] += 1 
            else : 
                freq[num] = 1 

        limit = len(nums) // 2 
        
        for num in freq  : 
            if freq[num] > limit  : 
                return num 
            
        
        