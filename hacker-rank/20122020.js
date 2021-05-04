function no20122020(range) {
    const minNumber = range[0];
    const maxNumber = range[1];
    let currentExponentThree = 1;
    const exponentFives = { 0: 1 };
    let exponentFiveIncrement = 0;
    const results = [];
    while (currentExponentThree <= maxNumber * 3) {
        exponentFiveIncrement = 0;
        while (true) {
            if (!exponentFives[exponentFiveIncrement]) {
                if (exponentFiveIncrement !== 0) exponentFives[exponentFiveIncrement] = Math.pow(5, exponentFiveIncrement);
            }
            const exponentProducts = currentExponentThree * exponentFives[exponentFiveIncrement];
            const greaterThanMin = exponentProducts >= minNumber;
            const lessThanMax = exponentProducts <= maxNumber;
            if (exponentProducts > maxNumber) break;
            if (greaterThanMin && lessThanMax) {
                results.push(exponentProducts);
            }
            exponentFiveIncrement++;
        }
        currentExponentThree *= 3;
    }
    console.log(exponentFives);
    return results;
}

console.log(no20122020([0, 2000000]));
