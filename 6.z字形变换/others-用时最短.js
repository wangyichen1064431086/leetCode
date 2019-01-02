/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let convert = function(s, numRows) {
    if (numRows === 1) return s;
    let res = "";
    let interval = numRows* 2 - 2; // 每次再回到第一行时经过的字符数
    for (let i = 0; i < numRows; i++) { // 遍历行数
        for (let j = 0; j <= (s.length - 1 - i) / interval; ++j) {
            let pos = i + j * interval;
            res += s[pos];
            if (i > 0 && i < numRows- 1) {
                let nextPos = interval * (j + 1)  - i;
                if (nextPos <= s.length - 1 ) {
                    res += s[nextPos];
                }
            }
        }
    }
    return res;
};

// 待再研究