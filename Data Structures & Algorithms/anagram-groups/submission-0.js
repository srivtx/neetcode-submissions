class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // valid anagram 
        let result = [];
        let visited = new Array(strs.length).fill(false); 

        for (let i = 0 ; i < strs.length ; i++){
            if (visited[i]) continue ; 
            let group = [] ; 
            let key1 =strs[i].split('').sort().join(''); 
            group.push(strs[i]); 
            visited[i] = true ; 
            for(let j = 0 + i; j < strs.length ; j++){
                if(visited[j]) continue ; 
                let key2 = strs[j].split('').sort().join(''); 
                if ( key1 === key2 ){
                    group.push(strs[j]); 
                    visited[j] = true ; 
                }
            }
               result.push(group); 
    }return result ; 
}
}