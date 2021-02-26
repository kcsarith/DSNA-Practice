function processSlots(input) {

	console.log(`Output: ${[...input]}`);
};

function _checkRows(input) {
	let totalPoints = 0;
	input.forEach(function (row) {
		for (let xPos = 0; xPos < row.length;) {
			let symbolCount = 1;
			const currentChar = row[xPos];
			for (let nextIndex = xPos; nextIndex < row.length;) {
				const nextChar = row[nextIndex + 1];
				if (nextChar === undefined) {
					xPos += symbolCount;
					totalPoints += _calculateScore(currentChar, symbolCount);
					break;
				}
				if (currentChar === nextChar) {
					symbolCount++;
					nextIndex++;
				} else {
					totalPoints += _calculateScore(currentChar, symbolCount);
					xPos += symbolCount;
					symbolCount = 0;
					break;
				}
			}
		}
	});
	return totalPoints;
}
function _checkColumns(input) {
	const columnSymbols = {};
	let totalPoints = 0;
	for (let yPos = 0; yPos < input.length;){
		const column = input[yPos];

	}
	return columnSymbols;
}

function _checkDiagonals(input) {

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
var arrayKrisna = [
	[1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1]
];
//Output: '2 winning lines, scoring a total 30 points.'

console.log(_checkColumns(array2));
/*{
	'number2~(0, 0)': 1,
	'number4~(1, 0)': 1,
	'number2~(2, 0)': 2,
	'number3~(4, 0)': 1,
	'number1~(0, 1)': 3,
	'number4~(3, 1)': 1,
	'number1~(4, 1)': 1,
	'number3~(0, 2)': 3,
	'number4~(3, 2)': 1,
	'number2~(4, 2)': 1,
}*/
