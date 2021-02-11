def getWays(n, c):
    # No negative coins, so no way to reach negative totals
    # If no coins, there's no way to reach any totals
    if n < 0 or len(c) == 0:
        return 0
    # If value == 0 then we've found a way, return 1
    if n == 0:
        return 1
    # Pull the largest (final) coin off the array
    coin = c[-1]
    # Count ways to get to the value of (n-coin) using all coins
    lhs = getWays(n - coin, c)
    # Count ways to get to the value of n using all coins, except the largest
    rhs = getWays(n, c[:-1])
    return lhs + rhs
