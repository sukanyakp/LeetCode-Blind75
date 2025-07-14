var maxProfit = function(prices) {

    let min = prices[0]
    let profit = 0;

    for(let i=1;i<prices.length;i++){
        if(prices[i] < min){
            min = prices[i]
        }else{
            profit = Math.max(profit , prices[i] - min)
        }
    }
return profit
};


let prices = [7,1,5,3,6,4]
console.log(maxProfit(prices));

// Time and Space Complexity: ?