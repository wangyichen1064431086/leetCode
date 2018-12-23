/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//最初的结果超时答案
var threeSum = function(nums) {
    const len = nums.length
    nums.sort((a,b)=>a-b)
    if (len < 3) {
        return []
    }
    const result = []
    for(let i=0;i<len-2;i++) {
        for(let j=i+1; j<len-1;j++) {
            const theOtherVal = 0-nums[i]-nums[j]
            const indexOfTheOtherVal = nums.indexOf(theOtherVal, j+1)
            if(indexOfTheOtherVal > j) {
                const newCombination = [nums[i], nums[j], theOtherVal]
                if(result.length === 0) {
                    result.push(newCombination)
                } else {
                    let repeat = false
                    for(let oneCombination of result) {
                        const [x, y, z] = oneCombination
                        if(x === newCombination[0] && y === newCombination[1]) {
                            repeat = true
                        }
                    }
                    if(!repeat) {
                        result.push(newCombination)
                    }
                }
                
            }
        }
    }
    return result
};
