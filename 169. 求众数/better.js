var majorityElement = function(nums) {

    var value = null,
        times = 0;
    
    for(let i = 0; i < nums.length ; ++i) {
        times ? 
        (value === nums[i] ? times++ : times--) :
        (value = nums[i], times++);
    }
    return value;
};