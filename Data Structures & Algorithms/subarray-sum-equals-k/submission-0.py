class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:

        count = 0 

        prefix = 0 

        prefix_count = { 0 : 1 }

        for num in nums : 
            prefix += num 

            needed = prefix - k 


            if needed in prefix_count : 
                count += prefix_count[needed]

            if prefix in prefix_count : 
                prefix_count[prefix] += 1 
            else : 
                prefix_count[prefix] = 1 
        return count 
                
        