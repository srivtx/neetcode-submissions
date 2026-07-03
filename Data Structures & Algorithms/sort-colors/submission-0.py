class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        zero = 0 
        one = 0 
        two = 0 

        for num in nums : 
            if num == 0 : 
                zero += 1 
            elif num == 1 : 
                one += 1 
            else : 
                two += 1
        
        index = 0 


        while (zero > 0) : 
            nums[index] = 0 
            index += 1 
            zero -= 1 
        

        while (one > 0) : 
            nums[index] = 1 
            index += 1
            one -= 1
        
        while (two > 0) : 
            nums[index] = 2 
            index += 1 
            two -= 1 
        
         
