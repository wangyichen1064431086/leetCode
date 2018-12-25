/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const permute = (nums) => {
    if(nums.length === 1) {
        return [nums]
    }
    const result = []
    for (let i = 0, len = nums.length; i < len; i++) {
      // 选取一个数字，求剩余数字的全排列
      const curItem = nums[i]
      const restNums = nums.slice()
      restNums.splice(i, 1)
      const restPermute = permute(restNums)
      for(let oneRestPermute of restPermute) {
        oneRestPermute.unshift(curItem) // 之前选取的数字插到剩余数组求得的全排列所有结果数组的首位
        result.push(oneRestPermute)
      }
    }
    return result
}
    

console.log(permute([1,2,3]))