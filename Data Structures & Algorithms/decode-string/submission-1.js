class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let current_string = ""; 
        let stack = []; 
        let repeat_count = 0 ; 

        for ( let char of s ){
            if (!isNaN(char)){
                repeat_count = repeat_count * 10 + Number(char); 
            }
            else if (char ==="["){
                stack.push([current_string , repeat_count]); 
                current_string = ""; 
                repeat_count =  0 ; 
            } else if (char === "]"){
                let [prev_string , count] =  stack.pop(); 
                current_string = prev_string + current_string.repeat(count); 
            }
            else {
                current_string += char ; 
            }
        }
        return current_string ; 
    }
}
