function maxScore(string) {
   let max = 0;
 
   for(let i = 0; i < string.length; i++) {
       let zeroCount = 0;
       let oneCount = 0;
 
       let str1 = string.slice(0, i)
       console.log('this is str1', str1)
       let str2 = string.slice(i)
       console.log('this is str2', str2)
       for (let j = 0; j < str1.length; j++) {
           if (str1[j] === '0') {
               zeroCount++
           }
       }
       for (let j = 0; j < str2.length; j++) {
           if (str2[j] === '1') {
               oneCount++
           }
       }
       let sum = zeroCount + oneCount;
       if (max < sum) max = sum
 
   }
   return max
}
