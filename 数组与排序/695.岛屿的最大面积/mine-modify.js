var maxAreaOfIsIand = function(grid) {
    const h = grid.length
    const v = grid[0].length
    let max = 0
    let curMax
    const getMaxAreaFromOnePoint = (x, y) => {
        let result = 0
        if(x<h && y<v && grid[x][y] === 1) {
            result++
            grid[x][y] = 0
            if(x+1 < h) {
                result += getMaxAreaFromOnePoint(x+1, y)
            }
            if(y+1 < v) {
                result += getMaxAreaFromOnePoint(x, y+1)
            }
            if(x-1 >= 0) {
                result += getMaxAreaFromOnePoint(x-1, y)
            }
            if(y-1 >= 0) {
                result += getMaxAreaFromOnePoint(x, y-1)
            }
        }
        return result

    }
    
    for(let i=0;i<h;i++) {
        for(let j=0;j<v;j++) {
            curMax = getMaxAreaFromOnePoint(i,j)
            if (curMax > max) {
                max = curMax
            }
        }
    }

    
    return max
}