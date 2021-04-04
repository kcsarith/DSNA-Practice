function saveThePrisoner(n, m, s) {
    const endValue = m+s-1;
    const remainder = endValue%n;
    if(n>=endValue) return endValue;
    if(remainder ===0) return n;
    return remainder;
}
