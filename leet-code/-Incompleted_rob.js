var rob = function(nums) {
    let total1=0;
    let total2=0;
    for (let i =0; i<nums.length;i++){
        if(i%2===0) total1+=nums[i];
        else total2+=nums[i];
    }
    if(total1>total2) return total1;
    else return total2;
};
