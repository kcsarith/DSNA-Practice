var sortedArrayToBST = function(nums) {
    if(nums.length===0) return null;
    
    let rootIndex = Math.floor(nums.length/2);
    let rootNode = new TreeNode(nums[rootIndex]);
    
    let leftSorted = nums.slice(0, rootIndex);
    let rightSorted = nums.slice(rootIndex+1);
    
    rootNode.left = sortedArrayToBST(leftSorted);
    rootNode.right = sortedArrayToBST(rightSorted);
    
    return rootNode;
};
