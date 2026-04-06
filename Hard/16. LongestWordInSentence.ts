function longestWord(sentence: string): string{
    if(sentence.length === 0) return "Empty String";

    const words = sentence.split(" ");
    let longestWord: string = "";
    let wordlength: number = 0

    for(let word of words){
        if(word.length > wordlength){
            wordlength = word.length;
            longestWord = word;
        }
    }

    return longestWord;
}

const stringForLongestWord: string = "I love Typescript";
const longestWordInSentence = longestWord(stringForLongestWord);
console.log("Given sentence: ", stringForLongestWord);
console.log("Longest Word in sentence: ", longestWordInSentence);