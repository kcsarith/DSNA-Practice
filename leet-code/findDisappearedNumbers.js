var findDisappearedNumbers = function(nums) {
    const maxLength = nums.length;
    
    function getResultArray(max){
        let newArray = [];
        for (let i=1; i<=max; i++){
            newArray.push(i);
        }
        return newArray;
    }
    
    const result = getResultArray(maxLength);
    
    for(let i=0; i<maxLength;i++){
        const ele = nums[i];
        const indexOfResult = result.indexOf(ele);
        if(indexOfResult >-1){
            result.splice(indexOfResult, 1);
        }
    }
    return result;
};
