/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0
    const minNum = -Math.pow(2, 31)
    const maxNum = Math.pow(2, 31) - 1
    while(x) {
        const endNumber = x%10 // NOTE: 对于负数的话，% 执行完还是带负号，如 -123%10 的结果是 -3
        res =  res*10 + endNumber
        if(res<minNum || res>maxNum) {
            return 0
        }
        x = x > 0 ?  Math.floor(x/10) : Math.ceil(x/10) // 注意如果是负数的话 取整要用 Math.ceil
    }
    return res
};
// 该方式用时 92ms