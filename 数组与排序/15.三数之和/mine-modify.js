// 最终修改后通过的答案
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b)
    const result = []
    const len = nums.length
    let i = 0
    while(i<len) {
        let one = nums[i]
        let start = i+1
        let end = len-1
        while(start < end) {
            const sum = one + nums[start] + nums[end]
            if(sum === 0) {
                result.push([one, nums[start], nums[end]])
                start++
                end--
                while(start<end && nums[start] === nums[start-1]) {
                   start++
                } 
                while(start<end && nums[end] === nums[end+1]) {
                   end--
                }
            } else if (sum > 0) {
                end--
            } else {
                start++
            }
        }
        i++
        while(i<len && nums[i] === nums[i-1]) {
            i++
        }
    }
    return result
  };