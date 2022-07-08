 function ListNodeUtilty(){

}


/***********Prepare Linked List*************/
ListNodeUtilty.prototype.ListNode = function(val,next){
	this.val = (val===undefined ? 0 : val);
	this.next = (next===undefined ? null : next);
}

ListNodeUtilty.prototype.insertNode = function(val,node){
	var listNode = new this.ListNode(val,null);
	node.next = listNode;
}


ListNodeUtilty.prototype.getListListNode = function(params){
	var listNode = new this.ListNode(params[0],null);
	var tempNodeTo = listNode;
	for(var i=1;i<params.length;i++){
		this.insertNode(params[i],listNode);
		listNode = listNode.next;
	}
	return tempNodeTo;
}
/***********Prepare Linked List*************/


ListNodeUtilty.prototype.reverseLinkedList = function(rootNode){
/*

-------- 
| 1 |  |
--------
| 2 |  |
--------
| 3 |  |
--------
*/

var startNode = rootNode;
var nextNode = null;
while(startNode!=null){
	var tempNext = startNode.next;
	tempNext.next = startNode;
	startNode.next = nextNode;

	
	startNode = startNode.next;
}


}

ListNodeUtilty.prototype.printLinkedList = function(rootNode){
	var resultsArr = [];
	while(rootNode!==null){
		resultsArr.push(rootNode.val);
		rootNode = rootNode.next;
	}
	console.log("Printing Linked List Values");
	console.log(resultsArr);
}





var listNodeUtility = new ListNodeUtilty();

module.exports = listNodeUtility;