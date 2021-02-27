//==================//
// 		Part 1	 	//
//==================//

var userBalance = 0;
var countUpBalance = 0;
var finalBalance = 0;
var countDifference = 0;

// Gets called whenever the money finished tweening to the bottom.
function addFromCatch(value) {
	finalBalance += value;
	countDifference = finalBalance - countUpBalance;
}

// Gets called every frame.
// Time elapsed since the last update is passed into the function(milliseconds)
function onUpdate({ delta }) {
	const seconds = 2;
	const oneFramePassing = delta * 60;
	if (countUpBalance < finalBalance) {
		countUpBalance += (countDifference / oneFramePassing) * (delta / seconds);
	}
	else if (countUpBalance > finalBalance) {
		countUpBalance = finalBalance;
	}
	if (countUpBalance === finalBalance && userBalance != finalBalance) {
		userBalance = finalBalance;
	}
	const roundedValue = Math.round(countUpBalance);
	updateBalance(roundedValue.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
}

// You have access to a function updateBalance which
// takes in a string and sets the ui to that value
// updateBalance("1");




//==================//
// 		Part 2	 	//
//==================//

function processSlots(input) {
	let rowResult = _checkRows(input);
	let diagonalResult = _checkDiagonals(input);
	let totalPoints = rowResult.totalPoints + diagonalResult.totalPoints;
	let winningRows = rowResult.winningRows + diagonalResult.winningRows;
	let plural = 's';
	if (winningRows === 1) plural = '';

	console.log(`Output: ${winningRows} winning line${plural}, scoring a total ${totalPoints} points.`);
	return totalPoints;
};

function _checkRows(input) {
	let result = {
		totalPoints: 0,
		winningRows: 0
	}
	input.forEach(function (row) {
		for (let xPos = 0; xPos < row.length;) {
			let symbolCount = 1;
			const currentSymbol = row[xPos];
			for (let nextIndex = xPos; nextIndex < row.length;) {
				const nextSymbol = row[nextIndex + 1];
				if (nextSymbol === undefined || currentSymbol !== nextSymbol) {
					xPos += row.length + 1; //skip outer loop to check next row.
					const score = _calculateScore(currentSymbol, symbolCount);
					result.totalPoints += score;
					if (score > 0) result.winningRows++;
					symbolCount = 0;
					break;
				}
				else if (currentSymbol === nextSymbol) {
					symbolCount++;
					nextIndex++;
				}
			}
		}
	});
	return result;
}


function _checkDiagonals(input) {
	let result = {
		totalPoints: 0,
		winningRows: 0
	}
	let symbolCount = 1;

	let finishedTopLeftCheck = false;
	let verticalIncrement = 1;

	const topLeftSymbol = input[0][0];
	const finalRowIndex = input.length - 1;
	const bottomLeftSymbol = input[finalRowIndex][0];
	let xPos = 1;
	let yPos = 1;
	let currentSymbol = topLeftSymbol;
	if (topLeftSymbol < 1 || topLeftSymbol > 3) {
		currentSymbol = bottomLeftSymbol;
		finishedTopLeftCheck = true;
		verticalIncrement = -1;
		yPos = finalRowIndex - 1;
	}
	while (xPos <= input[0].length) {
		const currentRow = input[yPos];
		const nextSymbol = currentRow[xPos];
		if (currentRow[xPos] === undefined || currentSymbol !== currentRow[xPos]) {
			const score = _calculateScore(currentSymbol, symbolCount);
			result.totalPoints += score;
			xPos = 1;
			symbolCount = 1;
			yPos = finalRowIndex;

			if (score > 0) result.winningRows++;
			currentSymbol = bottomLeftSymbol;
			if (finishedTopLeftCheck && xPos <= input[0].length) break;
			finishedTopLeftCheck = true;
		}
		else if (currentSymbol === nextSymbol) {
			xPos++;
			symbolCount++;
		}

		//Reverse vertical increment when the next row is undefined
		if (input[yPos + verticalIncrement] == undefined) {
			verticalIncrement = -verticalIncrement;
		}
		yPos += verticalIncrement;
	}
	return result;
}

function _calculateScore(symbol, amount) {
	switch (symbol) {
		case 1:
			switch (amount) {
				case 3:
					return 5;
				case 4:
					return 10;
				case 5:
					return 20;
				default:
					return 0;
			}
		case 2:
			switch (amount) {
				case 3:
					return 10;
				case 4:
					return 25;
				case 5:
					return 50;
				default:
					return 0;
			}
		case 3:
			switch (amount) {
				case 3:
					return 25;
				case 4:
					return 50;
				case 5:
					return 100;
				default:
					return 0;
			}
		default:
			return 0;
	}
}

// examples input
var array = [
	[1, 0, 0, 0, 1],
	[0, 1, 0, 1, 0],
	[0, 0, 1, 0, 0]
];
//Output: '1 winning line, scoring 20 points.'

var array2 = [
	[2, 4, 2, 2, 3],
	[1, 1, 1, 4, 1],
	[3, 3, 3, 4, 2]
];

var array3 = [
	[1, 1, 1, 1, 1],
	[0, 1, 0, 0, 0],
	[0, 0, 1, 0, 0],
	[3, 3, 3, 1, 0],
	[3, 3, 3, 3, 1]
];

//Output: '2 winning lines, scoring a total 30 points.'

processSlots(array);
processSlots(array2);
processSlots(array3);
