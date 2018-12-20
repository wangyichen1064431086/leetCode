//题目 https://leetcode-cn.com/problems/russian-doll-envelopes/submissions/

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    const len = envelopes.length
    if(len <=1 ) {
        return len
    }
    envelopes.sort((a,b) => {
        if(a[0]!==b[0]) {
            return a[0]-b[0]
        } else {
            return a[1]-b[1]
        }
        
     }  
    )
    
    let maxCount = 0
    const maxCountArr = []
    for(let i=0; i<envelopes.length;i++) {
        maxCountArr.push(1)
        for(let j=0; j<i;j++) {
            if(envelopes[j][0]<envelopes[i][0] && envelopes[j][1]<envelopes[i][1]) {
                maxCountArr[i] = Math.max(maxCountArr[i],maxCountArr[j]+1)
            }
        }
        maxCount = Math.max(maxCount, maxCountArr[i])
    }
    return maxCount
};

// 没有很理解。。。。