/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    if(n<=2) return n
    let first = 1
    let second = 2

    for(let i=3 ;i<=n;i++){
        let current = first + second
        first = second;
        second = current
    }
    return second
};



// You can climb 1 or 2 steps at a time. How many distinct ways can you climb to the top (n steps)?

// It behaves just like the Fibonacci sequence:
// ways(n) = ways(n-1) + ways(n-2)