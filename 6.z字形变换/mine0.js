/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1 || s.length <= numRows) {
        return s
    }
    const zLinesArr = []
    const len = s.length
    let zLines = Math.ceil((len-1)/(numRows-1)) 
    if((len-1)%(numRows-1) === 0) {
       zLines = zLines + 1
    }
    for(let i=0; i<zLines; i++) {
        if(i%2 === 0) {
            const startIndex = i*(numRows-1)
            const newLineStr = s.substr(startIndex, numRows)
            const newLineArr = newLineStr.split('')
            zLinesArr.push(newLineArr)
        } else {
            const startIndex = i*(numRows-1) + 1
            const newLineStr = s.substr(startIndex, numRows-2)
            const newLineArr = newLineStr.split('')
            let newLineArrLen = newLineArr.length
            while(newLineArrLen < numRows-2) {
                newLineArr.push('')
                newLineArrLen++
            }
            newLineArr.reverse()
            newLineArr.push('')
            newLineArr.unshift('')
            zLinesArr.push(newLineArr)
        }   
    }
    let result = ''
    for(let j=0; j<numRows;j++ ) {
        for(let i=0; i < zLines; i++) {
            if(zLinesArr[i][j]) {
                result+= zLinesArr[i][j]
            }
            
        }
    }
    return result
};

//112 ms
/**
 * 
let zLines = Math.ceil((len-1)/(numRows-1)) 
if((len-1)%(numRows-1) === 0) {
    zLines = zLines + 1
}

改为 const zLines = Math.floor((len-1)/(numRows-1) + 1)
用时 108 ms
 */