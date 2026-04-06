function charFrequency(str: string): object{
    const charFrequencyObj: { [key: string]: number } = {};

    for (const char of str) {
        if (!charFrequencyObj[char]) {
            charFrequencyObj[char] = 0;
        }
        charFrequencyObj[char]++;
    }

    return charFrequencyObj;
}

const strForCharFrequency: string = "aab";
const characterFrequency = charFrequency(strForCharFrequency);
console.log("Given string: ", strForCharFrequency);
console.log("Character frequency in string: ", characterFrequency);