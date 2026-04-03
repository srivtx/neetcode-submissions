class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
       let str = ""; 
       let w = strs[0]; 
       if (w.length === 0) return ""; 
       for (let i = 0 ; i < w.length ; i++){
            let char = w[i]; 
            for (let j = 0 ; j < strs.length ; j++){
                if (strs[j][i] != char){
                    return str ; 
                }
            }
            str += char ; 
       }
       return str; 
    }
}
