let reverse = function(x) {
    let digits =[];
    let multiplier=1;
    if (x===0||Math.abs(x)>2147483647){
        return 0;
    }
    else{
    if (x>0){
      while (x/multiplier>0){
        let digit = x%(multiplier*10);
        digits.push(digit/multiplier);
        x-=digit;
        multiplier*=10;
      }
      let stringify= digits.join('');
      let parsedString =  parseInt(stringify, 10)
      if (Math.abs(parsedString)>2147483647){
          return 0;
      } else{
          return parsedString;
      }
    }
  else if (x<0){
    x=Math.abs(x);
    while (x/multiplier>0){
      let digit = x%(multiplier*10);
      digits.push(digit/multiplier);
      x-=digit;
      multiplier*=10;
    }
    digits.unshift('-');
    let stringify= digits.join('');
      let parsedString =  parseInt(stringify, 10)
      if (Math.abs(parsedString)>2147483647){
          return 0;
      } else{
          return parsedString;
      }
  }
    }
};
