class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    calculate(s) {
        let stack = []; 
        let num = 0 ; 
        let sign = '+'; 
        for ( let i = 0 ; i < s.length ; i++){
            let char = s[i]; 
            if (!isNaN(char) && char !== " "){
                num = num * 10 + Number(char); 
            }
            if ((isNaN(char) && char !== " ") || i === s.length-1){
                if (sign === '+'){
                    stack.push(num); 
                }
                else if (sign ==='-') {
                    stack.push(-num); 
                } else if ( sign === '*'){
                    stack.push(stack.pop() * num); 
                }else {
                    stack.push(Math.trunc(stack.pop() / num)) ; 
                }
                sign = char; 
                num = 0 ; 
                
            }
        }
        let res = stack.reduce((a,b) => a+b , 0); 
        return res ; 
    }
}
