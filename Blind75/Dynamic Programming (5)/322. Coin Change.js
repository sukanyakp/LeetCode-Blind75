var coinChange = function(coins, amount) {
    let newArr = new Array(amount + 1).fill(Infinity);
    newArr[0] = 0;

    for(let coin of coins){
        for(let i=coin;i<=amount;i++){
            newArr[i] = Math.min(newArr[i] ,newArr[i - coin] + 1)
        }
    }
    return newArr[amount] === Infinity ? -1 : newArr[amount];
};


console.log(coinChange([1, 2, 5], 11));
