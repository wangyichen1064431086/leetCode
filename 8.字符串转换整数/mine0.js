/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if(!str) {
        return 0
    }
    while(str[0] === ' ') {
        str = str.substr(1)
    } // 这一段可改为 str=str.trim()
    let res=''
    if(/^[0-9\-\+]$/.test(str[0])){
        res += str[0]
    } else {
        return 0
    }
    let i=1
    while(/^[0-9]$/.test(str[i])) {
        res += str[i]
        i++
    }
    if(res === '-' || res === '+') {
        return 0
    }
    const resNum = Number(res)
    const intMax = Math.pow(2, 31) - 1
    const intMin = - Math.pow(2, 31)
    if(resNum < intMin) {
        return intMin
    } else if(resNum > intMax) {
        return intMax
    } else {
        return resNum
    }
}

//执行用时: 100 ms, 在String to Integer (atoi)的JavaScript提交中击败了72.82% 的用户