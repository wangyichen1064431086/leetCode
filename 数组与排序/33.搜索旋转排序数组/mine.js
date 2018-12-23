/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const binaryArr = (nums, start, end, target) => {
         if(start> end) {
             return -1
         }
         if(start === end) {
           return target === nums[start] ? start : -1
         }
         const mid = Math.floor((start+end)/2)
         if(nums[start]<nums[mid]) {
             if(target >= nums[start] && target <= nums[mid]) {
                 return binarySearch(nums, start, mid, target)
             } else {
                 return binaryArr(nums, mid+1, end, target)
             }
         } else {
             if(target >= nums[mid+1] && target <= nums[end]) {
                 return binarySearch(nums, mid+1, end, target)
             } else {
                 return binaryArr(nums,start, mid, target)
             }
         }
        
     }
     return binaryArr(nums, 0, nums.length-1, target)
 };
 
 const binarySearch = (nums, start, end, target) => {
     if(start> end) {
         return -1
     }
     if(start === end) {
       return target === nums[start] ? start : -1
     }
     const mid = Math.floor((start+end)/2)
     if(target === nums[mid]) {
         return mid
     } else if (target < nums[mid]) {
         return binarySearch(nums, start, mid, target)
     } else {
         return binarySearch(nums, mid+1, end, target)
     }
 
 }

 // 这个binnarySearch 也可以不用递归

 const binarySearchNew = (nums, start, end, target) => {
    let low = start
    let high = end
    while(low<=high) {
        const mid = Math.floor((low+high)/2)
        const midVal = nums[mid]
        if(target === midVal) {
            return mid
        } else if (target < midVal) {
            high = mid-1
        } else {
            low = mid + 1
        }
    }
    return -1

}

 // 关键思想：对旋转后数组进行二分，分出来的两个数组必然至少有一段是有序，另一段可能无序。如果 target 在有序的那一段中，那么就对有序段进行二分搜索；如果在无序的那一段，那就继续对无序的一段进行二分。