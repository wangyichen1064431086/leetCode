var convert = function(s, numRows) {
    var len=s.length;
    var n=numRows;
    if(n==1) return s;
    var cols=Math.ceil(len/(n*2-2));
    var res='';
    for(var row=0;row<n;row++){
        for(var col=0;col<cols;col++){
            res+=s.charAt(2*col*(n-1)+row)
            if(row!=0&&row!=n-1){
                res+=s.charAt(2*col*(n-1)+row+2*(n-row-1))
            }
        }
    }
    return res;
};
// 这种解法没看懂。。待研究


/**
 * 算法分析：
 首先访问 行 0 中的所有字符，接着访问 行 1，然后 行 2，依此类推...
 对于位于结果字符串中索引 k 的字符：
  - 行 0 中的位于原字符串索引 k(2 * numRows−2) 处;
  - 行 numRows-1 中的位于原字符串索引 k(2 * numRows-2) + numRows - 1
  - 行 i 中的位于原字符串索引 k(2 * numRows-2) + i, 和 (k+1)(2 * numRows - 2) - i
 */