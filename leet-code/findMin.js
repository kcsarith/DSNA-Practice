var findMin = function(nums) {
    let min = nums[0];
    for(let i =1; i<nums.length; i++){
        const currentNum = nums[i];
        if(currentNum<min){
            min = currentNum
        }
    }
    return min;
};
