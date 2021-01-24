var findKthLargest = function(nums, k) {
    let sortedArray = heapSort(nums)
    return sortedArray.reverse()[k-1]
}
var heapify = function(array,n,i){
    leftIndex = i * 2 + 1;
    rightIndex = i * 2 + 2;
    leftVal = array[leftIndex];
    rightVal = array[rightIndex];
    if (leftIndex >= n) leftVal = -Infinity
    if (rightIndex >= n) rightVal = -Infinity
    if (array[i] > leftVal && array[i] > rightVal) return;
    let swapIdx;
    if (rightVal > leftVal) {
        swapIdx = rightIndex;
    } else {
        swapIdx = leftIndex;
    }
    swap(array,i,swapIdx)
    heapify(array,n,swapIdx)
}
function heapSort(array){
    for(let i = array.length - 1; i >= 0; i--){
        heapify(array,array.length,i);
    }
    for(let endPoint = array.length - 1; endPoint >= 0; endPoint--){
    swap(array,0,endPoint)
    heapify(array,endPoint,0)
    }
    return array;
}
function swap(array,i,swapIdx) {
    [array[i],array[swapIdx]]=[array[swapIdx],array[i]];
}
