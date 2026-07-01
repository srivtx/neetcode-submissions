class Solution:

    def encode(self, strs: List[str]) -> str:
        # first count the len 
        # the add teh len and then a # 
        # add teh string 

        encoded = ""

        for s in strs : 
            length = len(s)
            encoded  += str(length)
            encoded += str("#")
            encoded += s 
        return encoded 
        
            

    def decode(self, s: str) -> List[str]:
        results  =  []
        i = 0 
        while ( i < len(s)) : 
            j = i 
            while s[j] != "#" : 
                j += 1 
            
            length =  int(s[i : j])

            j += 1 
            word  = s[j : j + length]
            results.append(word)

            i = j + length  

        return results 
