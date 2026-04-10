class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
                const set = new Set(nums);
                        let res = 0;

                                for (let num of set) {
                                            if (!set.has(num - 1)) {
                                                            let cur = num;
                                                                            let streak = 1;

                                                                                            while (set.has(cur + 1)) {
                                                                                                                cur++;
                                                                                                                                    streak++;
                                                                                                                                                    }

                                                                                                                                                                    res = Math.max(res, streak);
                                                                                                                                                                                }
                                                                                                                                                                                        }

                                                                                                                                                                                                return res;
    }
}
