/**
 * 题目：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/submissions/
 * 
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

    如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

    注意你不能在买入股票前卖出股票。 

 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0
    let min = prices[0] || 0
    
    for(let price of prices) {
        if(price < min) {
            min = price
        }
        result = Math.max(result, price-min)
        
    }
    return result
};

// NOTE: 动态规划: 前i天的最大收益 = max(前i-1天的最大收益，第i天的价格-前i-1天中的最小价格)

