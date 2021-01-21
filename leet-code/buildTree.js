var buildTree = function(preorder, inorder) {
    if(preorder.length ===0 && inorder.length ===0) return null;
    let rootNode = new TreeNode(preorder[0]);
    let rootIndex = inorder.indexOf(rootNode.val);
    
    let leftInorder = inorder.slice(0, rootIndex); //[9]
    let rightInorder = inorder.slice(rootIndex+1);//[15,20,7]
    
    let leftPreorder = preorder.filter(ele=>leftInorder.includes(ele));
    let rightPreorder = preorder.filter(ele=>rightInorder.includes(ele));
    
    rootNode.left = buildTree(leftPreorder, leftInorder);
    rootNode.right = buildTree(rightPreorder, rightInorder);
    
    return rootNode;
};
