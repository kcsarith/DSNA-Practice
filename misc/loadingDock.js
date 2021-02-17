function loadingDock(arrayOfCrates, sameCrateRestTime) {
    const resultsArray = [];
    const crateArrayBuilder = {};
    const crateQueue = [];

    for (let i = 0; i < arrayOfCrates.length; i++) {
        const currentCrate = arrayOfCrates[i];
        if (!crateArrayBuilder[currentCrate]) {
            crateArrayBuilder[currentCrate] = { count: 1, nextIndex: 0 };
        }
        else {
            crateArrayBuilder[currentCrate].count++;
        }
    }
    const counterArray = Object.entries(crateArrayBuilder);
    counterArray.sort((a, b) => {
        let x = a[1]['count'];
        let y = b[1]['count'];

        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
    // sortByKey(counterArray, 'count');
    console.log('Crate List Array');
    console.log(counterArray);
    let counterIndex = 0;
    while (counterArray.length > 0 || crateQueue.length > 0) {
        const currentCrateQueue = crateQueue[0];
        if (currentCrateQueue != undefined) {
            if (resultsArray.length > currentCrateQueue[1].nextIndex - 1) {
                if (counterArray[counterIndex] !== undefined) {
                    if (currentCrateQueue[0] != counterArray[counterIndex][0]) {
                        counterIndex = 0;
                    }
                }
                else {
                    counterIndex = 0;
                }
                const dequeueCrate = crateQueue.shift();
                console.log('DEQUEUE ');
                console.log(dequeueCrate);
            } else {
            }
        }
        const currentCounterCrate = counterArray[counterIndex];
        console.log("CRAAAAAAAAAAAAAAAAAAAAAATE");
        console.log(currentCounterCrate);
        if (currentCounterCrate !== undefined) {
            // if (resultsArray.length >= currentCounterCrate[1].nextIndex) {

            currentCounterCrate[1].count--;
            currentCounterCrate[1].nextIndex = resultsArray.length + sameCrateRestTime + 1;
            resultsArray.push(currentCounterCrate[0]);
            console.log('Results Array Length: ' + resultsArray.length);
            console.log(resultsArray);
            if (currentCounterCrate[1].count <= 0) {
                counterArray.splice(counterIndex, 1);
            } else {
                crateQueue.push(currentCounterCrate);
                console.log('ENQUEUE ');
                console.log(currentCounterCrate);
                console.log('QUEUE ');
                console.log(crateQueue);
                counterIndex++;
            }
        }
        else {

            const iterationsNeeded = currentCrateQueue[1].nextIndex - resultsArray.length;

            for (let i = 0; i < iterationsNeeded; i++) {
                resultsArray.push('idle');
            }
            counterIndex = 0;
        }
    }
    console.log('FINAL RESULT ARRAY')
    console.log(resultsArray);

    return resultsArray.length;
}

const exampleArray1 = ["Fish", "Fish", "Fish", "Coal", "Coal", "Coal"];
const exampleArray2 = ["Fish", "Fish", "Fish", "Fish", "Fish", "Fish", "Coal", "Toy", "Desk", "Eggs", "Clothes", "Gold"];
const myArray = ["Gorilla", "Fish", "Fish", "Fish", "Fish", "Fish", "Fish", "Cheese", "Fish", "Gorilla", "Coal", "Toy", "Desk", "Eggs", "Clothes", "Gold"];
// console.log(loadingDock(exampleArray1, 2));
// console.log(loadingDock(exampleArray1, 0));
console.log(loadingDock(exampleArray2, 2));
// console.log(loadingDock(myArray, 6));
