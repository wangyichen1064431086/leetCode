// 题目： https://leetcode-cn.com/explore/interview/card/bytedance/245/data-structure/1033/
/**
 * Initialize your data structure here.
 * 
 * 实现一个数据结构支持以下操作：

Inc(key) - 插入一个新的值为 1 的 key。或者使一个存在的 key 增加一，保证 key 不为空字符串。
Dec(key) - 如果这个 key 的值是 1，那么把他从数据结构中移除掉。否者使一个存在的 key 值减一。如果这个 key 不存在，这个函数不做任何事情。key 保证不为空字符串。
GetMaxKey() - 返回 key 中值最大的任意一个。如果没有元素存在，返回一个空字符串""。
GetMinKey() - 返回 key 中值最小的任意一个。如果没有元素存在，返回一个空字符串""。
挑战：以 O(1) 的时间复杂度实现所有操作。
 */
var AllOne = function() {
    this.myData = {}
};

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
    if(this.myData[key]===undefined) {
        this.myData[key] = 1
    } else {
         this.myData[key]++
    }
   
};

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
    if(this.myData[key] === undefined) {
        return
    }
    if(this.myData[key] === 1) {
        delete this.myData[key]
    } else {
        this.myData[key]--
    }
    
};

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
    const myDataValuesArr = Object.values(this.myData)
    if(myDataValuesArr.length === 0) {
        return ''
    } else {
        const newMaxValue = Math.max(...myDataValuesArr)
        for (let prop in this.myData) {
            if(this.myData[prop] === newMaxValue) {
                return prop
            }
        }
    }
};

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
    const myDataValuesArr = Object.values(this.myData)
    if(myDataValuesArr.length === 0) {
        return ''
    } else {
        const newMinValue = Math.min(...myDataValuesArr)
        for (let prop in this.myData) {
            if(this.myData[prop] === newMinValue) {
                return prop
            }
        }
    }
           
        
};

/** 
 * Your AllOne object will be instantiated and called as such:
 * var obj = Object.create(AllOne).createNew()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
