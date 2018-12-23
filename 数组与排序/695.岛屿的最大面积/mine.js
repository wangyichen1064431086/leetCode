/**
 * @param {number[][]} grid
 * @return {number}
 */
// 超出时间限制
var maxAreaOfIsland = function(grid) {
    let h = grid.length
    let w = grid[0].length
    var computMaxFromOnePoint = function(x, y, computedPointArr) {
        if( x >=0 && x < h && y>=0 && y < w && grid[x][y] === 1) {
            let notRepeat = true
            computedPointArr.forEach(([a,b]) => {
              if(a==x && b===y) {
                  notRepeat = false
              }
            })
           if(notRepeat) {
             computedPointArr.push([x, y])
             computMaxFromOnePoint(x+1, y,computedPointArr)
            computMaxFromOnePoint(x-1, y,computedPointArr)
            computMaxFromOnePoint(x, y+1,computedPointArr)
            computMaxFromOnePoint(x, y-1,computedPointArr) 
           }
           
        }
    }
    let maxS = 0
    let curS
    const dealedPoint = []
    for(let i=0; i<h;i++ ) {
        for(let j=0;j<w;j++) {
            let newPoint = true
            dealedPoint.forEach(([a,b]) => {
              if(a==i && b===j) {
                  newPoint = false
              }
            })
            if(newPoint) {
                const computedArr = []
                computMaxFromOnePoint(i,j,computedArr)
                curS = computedArr.length
                if(curS>maxS) {
                    maxS = curS
                }
            }
        }
    }
    return maxS
};  

