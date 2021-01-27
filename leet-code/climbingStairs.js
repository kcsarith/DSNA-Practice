let climbStairs = function(n, memo = {}) {    
    if (n<4){
         return n;
    } else{
        if (n in memo){
            return memo[n];
        } else{
            let results = climbStairs(n-1, memo)+ climbStairs(n -2, memo)
            memo[n] = results;
            return results;
        }
    }
};
