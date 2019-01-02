/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let s =String(x)
    let isMinus = false
    if(s.charAt(0) === '-') {
        s=s.substr(1)
        isMinus = true
    }
    const len = s.length
    let res = ''
    for(let i=len-1; i>=0; i--) {
        res += s[i] //NOTE: 这里不能使用 s[i] = s[len-1-i],因为s[i]是只读的
    }
    while(res.indexOf('0') === 0) {
        res=res.substr(1)
    }
    const resWithSymbol = isMinus ? '-' + res : res
    const resNum = Number(resWithSymbol)
    if(resNum < -Math.pow(2,31) || resNum > Math.pow(2,31) - 1) {
        return 0
    }
    return resNum
};
// 这个其实是用了反转字符串的方式

// 该方式用时 120 ms