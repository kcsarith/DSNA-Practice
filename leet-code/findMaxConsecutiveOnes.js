var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0;
    let count = 0;
    nums.forEach(function(num){
        if(num===1) count++;
        else count =0;
        if(count>maxCount) maxCount = count;
    });
    return maxCount;
};
