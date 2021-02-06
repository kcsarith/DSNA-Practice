function twoNumberSum(array, targetSum) {
  // Write your code here.
  	const memo = {};
	for (let i =0; i<array.length;i++){
		const num = array[i];
		const difference = targetSum-num;
		if(memo[difference]){
			return [num, difference];
		}
		memo[num]=true;
	}
	return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
