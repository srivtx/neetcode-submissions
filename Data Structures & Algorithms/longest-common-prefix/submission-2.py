class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:

        # first start with that 
        # compare the prefix with other strings 
        prefix = strs[0] 
         

        for word in strs : 
            while (word[:len(prefix)] !=  prefix) : 
                prefix  = prefix[:-1]
                if prefix  == "" : 
                    return ""
        return prefix 
        


        