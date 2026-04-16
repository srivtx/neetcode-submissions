class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0 ; 
        let set = new Set(); 
        let max_len = 0 ; 
        for (let r = 0 ; r < s.length; r++){
            while( set.has(s[r])){
                set.delete(s[l]); 
                l++ ; 
            }

            set.add(s[r]); 
            max_len = Math.max(r - l + 1 , max_len)
        }
        return max_len ; 
    }
}
