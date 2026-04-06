function groupByLength(words: string[]): object | string {
    if(words.length === 0) return "Empty String";

    let groupbyLengthObj : {[key: number]: string[]} = {};
    
    for(let word of words){
        const wordlength = word.length;

        if(!groupbyLengthObj[wordlength]){
            groupbyLengthObj[wordlength] = [];
        }

        groupbyLengthObj[wordlength].push(word);
    }

    return groupbyLengthObj;
}

const arrToGroupByLength: string[] = ["hi", "cat", "dog", "go"];
const groupedByLength = groupByLength(arrToGroupByLength);
console.log("Given Array: ", arrToGroupByLength);
console.log("Grouped by Length: ", groupedByLength);