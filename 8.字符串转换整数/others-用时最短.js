/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.trim() //String.prototype.trim()
  if (!str) {
    return 0
  }

  if (str.length === 1) {
    return isNaN(+str) ? 0 : +str
  }

  let extractReg = /^([+|-]?)(\d+)/ // \d 等价于 [0-9]
  
  let signal = ''
  let num = 0
  let newStr = str.replace(extractReg, (match, $signal, $num) => {
    signal = $signal
    num = $num
  })
  /**
   * 使用方法: String.prototype.replace(regexp|substr, function(match, $1, $2,... ){
   * })
   * @param match 匹配的子串
   * @param $1 $2 代表第 n 个捕获组
   */

  if (!num) {
    return 0
  }

  if (num >= Math.pow(2, 31)) {
    num = signal === '-' ? Math.pow(2, 31) : Math.pow(2, 31) - 1
  }

  return signal === '-' ? +('-' + num) : num
};

// 用时 72 ms