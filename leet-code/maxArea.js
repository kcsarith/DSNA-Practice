var maxAreaBrute = function(height) {
    let mostWater =0
    for(let i=0; i<height.length;i++){
        const currentHeight = height[i];
        for(let j=i+1; j<height.length;j++){
            const nextHeight = height[j];
            let smallerHeight=currentHeight;
            if(currentHeight>nextHeight) smallerHeight=nextHeight;
            const currentWater = smallerHeight*(j-i);
            if(currentWater>mostWater) mostWater = currentWater
        }
    }
    return mostWater;
};


var maxArea = function(height) {
    let mostWater =0;
    let leftIndex = 0;
    let rightIndex = height.length-1;
    
    while(leftIndex<rightIndex){
        let smallerHeight=height[leftIndex];
        if(height[leftIndex]>height[rightIndex]) smallerHeight=height[rightIndex];
        const currentWater = smallerHeight*(rightIndex-leftIndex);
        if(currentWater>mostWater) mostWater = currentWater;
        if(height[leftIndex]<height[rightIndex]){
            leftIndex++
        } else{
            rightIndex--
        }
    }
    return mostWater;
};
