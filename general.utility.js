function GeneralUtility(){

}

GeneralUtility.prototype.getValueForBinaryDigits = function(n){
var currentTwoFactor = 1;
var value = 0;
for(var i=n.length-1;i>=0;i--){
if(n[i]==="1"){
	value += currentTwoFactor;
}
currentTwoFactor = currentTwoFactor*2;
}
//var n = getValueForBinaryDigits("10001000100101001001001");
return value;
}


GeneralUtility.prototype.constructDirectedGraph = function(dataArray){
	var graph = {};
	for(var i=0;i<dataArray.length;i++){
		if(dataArray[i].length>0){
			for(var j=0;j<dataArray[i].length-1;j++){
				if(graph[String(dataArray[i][j])]===undefined){graph[String(dataArray[i][j])] = [] }
				if(graph[String(dataArray[i][j])].indexOf(String(dataArray[i][j+1]))=== -1)
				{
					graph[String(dataArray[i][j])].push(String(dataArray[i][j+1]));
				}
			}
		}
	}
	return graph;
};


GeneralUtility.prototype.constructUnDirectedGraph = function(dataArray){
	var graph = {};
	for(var i=0;i<dataArray.length;i++){
		if(dataArray[i].length>0){
			for(var j=0;j<dataArray[i].length-1;j++){
				if(graph[String(dataArray[i][j])]===undefined){ graph[String(dataArray[i][j])] = [] }
				if(graph[String(dataArray[i][j])].indexOf(String(dataArray[i][j+1]))=== -1)
				{
					graph[String(dataArray[i][j])].push(String(dataArray[i][j+1]));
				}

				if(graph[String(dataArray[i][j+1])]===undefined){ graph[String(dataArray[i][j+1])] = [] }
				if(graph[String(dataArray[i][j+1])].indexOf(String(dataArray[i][j]))=== -1)
				{
					graph[String(dataArray[i][j+1])].push(String(dataArray[i][j]));
				}
			}
		}
	}
	return graph;
};

GeneralUtility.prototype.getGraphForNonAdjacentIndex = function(length){
	var directedGraph = {};
    for(var i=0;i<length;i++){
        directedGraph[i] = [];
        for(var j=0;j<length;j++){
            if(i!==j && j!==i-1 && j!==i+1){
                directedGraph[i].push(j);
            }
        }
    }
    return directedGraph;
}


GeneralUtility.prototype.getGraphNodeSum = function(startNodeIndex,graph,nums,pathTaken,sum,sums){
	sum = sum + nums[startNodeIndex];
	var checkExists = function(index,graph,_pathTaken){
		for(var i in _pathTaken){
			if(graph[_pathTaken[i]].indexOf(index) === -1)
			{
				return false;
			}
		}
		return true;
	};
	var nextPaths = graph[startNodeIndex];
	if(nextPaths.length>0){
		for(var i=0;i<nextPaths.length;i++){
		var currentPath = nextPaths[i];
		if(pathTaken.indexOf(currentPath) === -1  && checkExists(currentPath,graph,pathTaken)){
			var newPathTaken = pathTaken.concat([currentPath]);
			var newSum = this.getGraphNodeSum(currentPath,graph,nums,newPathTaken,sum,sums);
		    sums.push(newSum);
		}
	}
	}
	return sum;
}


GeneralUtility.prototype.constructUnDirectedGraphForMatrix = function(rowCount,columnCount,diagonalSupport){
	var graph = {};
	for(var i=0;i<rowCount;i++){
		for(var j=0;j<columnCount;j++){
			//the node can go to  [i+1, j], [i-1,j], [i+1,j+1], [i-1, j+1], [i+1,j-1], [i-1, j-1] , [i,j-1], [i,j+1] if i-1>=0 and i+1<rowCount and j-1>0 and j-1 < columnCount
			var currentArray = i+","+j;
			var possibles = [];
			graph[i+","+j] = [];
			if(i+1<rowCount){
				possibles.push((i+1)+","+j);
				if(j+1<columnCount && diagonalSupport === true){
					possibles.push((i+1)+","+(j+1));
				}
				if(j-1>=0 && diagonalSupport === true){
					possibles.push((i+1)+","+(j-1));
				}
			}

			if(i-1>=0){
				possibles.push((i-1)+","+j);
				if(j+1<columnCount && diagonalSupport === true){
					possibles.push((i-1)+","+(j+1));
				}
				if(j-1>=0 && diagonalSupport === true){
					possibles.push((i-1)+","+(j-1));
				}
			}

			if(j+1<columnCount){
				possibles.push((i)+","+(j+1));
			}
			
			if(j-1>=0){
				possibles.push((i)+","+(j-1));
			}
			graph[i+","+j] = possibles;
		}
	}

	return graph;
};

GeneralUtility.prototype.findIslands = function(startNode,pathTaken,graph,values,checkChar,convertChar){
	var nextPaths = graph[startNode];
	var startNodePos= startNode.split(",");
	values[startNodePos[0]][startNodePos[1]] = String(convertChar);
	if(nextPaths.length>0){
		for(var i=0;i<nextPaths.length;i++){
			if(pathTaken.indexOf(nextPaths[i])===-1){
				var currentPath = nextPaths[i];
				var currentPathPos = currentPath.split(",");
				var charToCheck = values[currentPathPos[0]][currentPathPos[1]];
				if(charToCheck === checkChar){
					//values[currentPathPos[0]][currentPathPos[1]] = String(convertChar);
					var newPathTaken = pathTaken.concat([currentPath]);
					values =this.findIslands(currentPath,newPathTaken,graph,values,checkChar,convertChar);
				}
			}else{
				continue;
			}
		}
	}
	return values;
}


GeneralUtility.prototype.travelPathUntilNoNodesToTravelForWordSearch = function(pathTaken,parentPath,graph,values,checkWord,doInitilCheck){
	var matchWord = "";
	
	if(doInitilCheck){
	for(var j in pathTaken){
			var indexPos = pathTaken[j].split(",");
			matchWord += values[indexPos[0]][indexPos[1]];
		}
		if(checkWord === matchWord){
			console.log("Matched Path Taken - 1",pathTaken);
			return true;
	}
	}
	
	if(graph[parentPath].length>0){
	for(var i in graph[parentPath]){
		var currentPath = graph[parentPath][i];
		if(pathTaken.indexOf(currentPath) === -1){
		var newPathTaken = pathTaken.concat([currentPath]);
	    matchWord = "";
		for(var j in newPathTaken){
			var indexPos = newPathTaken[j].split(",");
			matchWord += values[indexPos[0]][indexPos[1]];
		}
		//console.log("checking",checkWord,matchWord);
		if(checkWord === matchWord){
			console.log("Matched Path Taken - 2",newPathTaken);
			return true;
		}else{
			var checkNext = this.travelPathUntilNoNodesToTravelForWordSearch(newPathTaken,currentPath,graph,values,checkWord,false);
			if(checkNext === true){
				return true;
			}
		}
		}
	}
}
	return false;
};

module.exports = new GeneralUtility();




