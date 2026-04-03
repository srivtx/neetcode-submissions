class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) { 
        if(s.length != t.length) return false ; 
        let arr1 = s.split(''); 
        let arr2 = t.split(''); 
        arr1.sort(); 
        arr2.sort(); 

        if (JSON.stringify(arr1) === JSON.stringify(arr2)) return true ; 
        return false ; 

    }
}
