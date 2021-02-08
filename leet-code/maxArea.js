//Brute Force
var maxArea = function(height) {
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
