class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        # we are given a list 
        # we need to count the freq of each one 
        # then we need to one thing that is calculate the least thing 
        # then we ll create an array of res 
        # the keys which have greater freq then the other ones ll have the majority 
        freq = {}
        for num in nums  : 
            if num in freq : 
                freq[num] += 1 
            else : 
                freq[num] = 1 
        

        least = len(nums) // 3 

        result = []
        
        for num in freq : 
            if freq[num] > least : 
                result.append(num)
        
        return result
        