var GeneralUtility = require("./../general.utility.js");

function GraphImplementation(){



}


/*

	Given an m x n grid of characters board and a string word, return true if word exists in the grid.

	The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

	Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
	Output: true

	Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
	Output: true

	Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
	Output: false
		
*/
GraphImplementation.prototype.WordSearchInMatrix = function(board, word) {
	if(board.length>0){
		var graph = GeneralUtility.constructUnDirectedGraphForMatrix(board.length,board[0].length);
		console.log("graph",graph);
		for(var i=0;i<board.length;i++){
			for(var j=0;j<board[i].length;j++){
				var startPoint = i+","+j;
				var visitedPath = [];
				visitedPath.push(startPoint);
				console.log("Starting to check path",visitedPath);
				var isMatched = GeneralUtility.travelPathUntilNoNodesToTravelForWordSearch(visitedPath,startPoint,graph,board,word,true);
				if(isMatched){
					return true;
				}
			}
		}
		return false;

	}
};

GraphImplementation.prototype.findMaximumSellingPrice = function(prices) {
		var graph = GeneralUtility.constructUnDirectedGraphForMatrix(1,prices.length);
		console.log("graph",graph);
		return graph;

};

GraphImplementation.prototype.findIslands = function(grid) {
	var isLands = 0;
	if(grid.length>0){
		var graph = GeneralUtility.constructUnDirectedGraphForMatrix(grid.length,grid[0].length,false);
		for(var i=0;i<grid.length;i++){
			for(var j=0;j<grid[i].length;j++){
				var startNode = i+","+j;
				var pathTaken = [startNode];
				if(grid[i][j] === "1"){
					isLands++;
					grid = GeneralUtility.findIslands(startNode,pathTaken,graph,grid,"1","0");
				}else{
					continue;
				}
			}
		}
	}
	return isLands;
};


GraphImplementation.prototype.rob = function(nums){
	var graph = GeneralUtility.getGraphForNonAdjacentIndex(nums.length);
	if(nums.length>1){
	var sumOfPaths = [];
	for(var i=0;i<nums.length;i++){
		var startNode = i;
		var pathTaken = [startNode];
		var value = GeneralUtility.getGraphNodeSum(startNode,graph,nums,pathTaken,0,sumOfPaths);
	}
	sumOfPaths = sumOfPaths.sort(function(a,b){
		return a-b;
	});
	return sumOfPaths[sumOfPaths.length-1];
  }else{
  	return nums[0];
  }
}


GraphImplementation.prototype.minimumTime = function(n, relations, time) {
	var graph = GeneralUtility.constructUnDirectedGraphForMatrix(4,4);
	console.log("Graph",graph);
};




var graphImplementation = new GraphImplementation();
var result1,result2,result3,result4;




/*
result1 = graphImplementation.WordSearchInMatrix([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED");
result2 = graphImplementation.WordSearchInMatrix([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"SEE");
result3 = graphImplementation.WordSearchInMatrix([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCB");
console.log("result1,result2,result3",result1,result2,result3);

result4 = graphImplementation.WordSearchInMatrix([["b","b","a","a","b","a"],["b","b","a","b","a","a"],["b","b","b","b","b","b"],["a","a","a","b","a","a"],["a","b","a","a","b","b"]]
,"abbbababaa");
console.log("result4",result4);
*/

/*
result1 = graphImplementation.findMaximumSellingPrice([7,1,5,3,6,4]);
result2 = graphImplementation.findMaximumSellingPrice([7,6,4,3,1]);
console.log("result1,result2",result1,result2);
*/


/*
result1 = graphImplementation.findIslands( [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]);
result2 = graphImplementation.findIslands( [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]);
console.log("result1,result2",result1,result2);
*/

//result1 = graphImplementation.rob([1,2,3,1]);
//result2 = graphImplementation.rob([2,7,9,3,1]);
//result3 = graphImplementation.rob([1,3,1,3,100]);
result4 = graphImplementation.rob([120]);
console.log("result1,result2,result3,result4",result1,result2,result3,result4);






//graphImplementation.minimumTime(5, [[1,5,4],[2,5],[3,5],[3,4],[4,5],[1,2,3,4,5]],[1,2,3,4,5]);