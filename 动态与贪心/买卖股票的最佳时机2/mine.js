/* 
 题目：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/comments/

 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let yesterdayPrice = prices[0]
    let result = 0
    for(let price of prices) {
        if(price > yesterdayPrice) {
            result += price - yesterdayPrice
        }
        yesterdayPrice = price
    }
    return result
};

// 思想：只要某一天比前一天价格高，就假设前一天买了股票，然后在这一天卖掉