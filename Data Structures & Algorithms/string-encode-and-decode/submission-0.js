class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";

        for (let s of strs) {
            // add: length + '#' + string
            result += s.length + "#" + s;
        }

        return result;
    }

    /**
     * @param {string} s
     * @returns {string[]}
     */
    decode(s) {
        let result = [];
        let i = 0;

        while (i < s.length) {
            // Step 1: find the '#'
            let j = i;
            while (s[j] !== '#') {
                j++;
            }

            // Step 2: get length
            let length = parseInt(s.substring(i, j));

            // Step 3: extract the string
            let start = j + 1;
            let end = start + length;

            let word = s.substring(start, end);
            result.push(word);

            // Step 4: move pointer
            i = end;
        }

        return result;
    }
}