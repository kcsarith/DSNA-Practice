function runLengthEncoding(str) {
    let encodedString = '';
    let letterCount = 1;
    for (let i = 0; i < str.length; i++) {
        const currentLetter = str[i];
        const nextLetter = str[i + 1];
        if (currentLetter === nextLetter && letterCount < 9) letterCount++;
        else if (currentLetter === nextLetter && letterCount > 9) {
            encodedString += `9${currentLetter}`;
            letterCount = 1;
        }
        else {
            encodedString += `${letterCount}${currentLetter}`;
            letterCount = 1;
        }
    }
    return encodedString;
}

console.log(runLengthEncoding('AAAAAAAAAAAAABBCCCCDD'))
