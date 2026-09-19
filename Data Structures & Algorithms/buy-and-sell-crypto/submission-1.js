class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;
        for(var i = 0; i < prices.length; i++){
            let buy = prices[i]
            for(var j = i + 1; j < prices.length; j++){
                let sell = prices[j]
                res = Math.max(res, sell - buy);
                }
        }return res;
        
    }

}
