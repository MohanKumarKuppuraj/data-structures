function TreeNode(val,left,right){
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

functionInsertTreeNode(rootNode,currentNode){



}


function start(params){

	TreeNode node = new TreeNode(params[0],null,null);
	for(var i=1;i<params.length;i++){
		
		
	}

}

function findNodeHeight(node,direction){
	var height = 1;
	if(direction === "left" && node.left!==null){
		var leftHeight = findNodeHeight(node.left,"left");
		leftHeight += height;
		return leftHeight;
	}else{
		return height;
	}

	if(direction === "right" && node.right!==null){
		var rightHeight = findNodeHeight(node.right,"right");
		rightHeight += height;
		return rightHeight;
	}else{
		return height;
	}
}


function findInsertNode(rootNode,node){
	var leftHeight = findNodeHeight(rootNode,"left");
	var rightHeight = findNodeHeight(rootNode,"right");
	if(leftHeight>rightHeight){
	 node.right = node;
	}else if(rightHeight>leftHeight){
      node.left = ;
	}
	return node;
}




start([1,2,4,7,5,6,3,8,9,10]);






var n = getValueForBinaryDigits("10001000100101001001001");


/*

FindNodeToInsert

If there exist a node where right height is not equal to left height then it is the node where we have to insert our new node.




*/
