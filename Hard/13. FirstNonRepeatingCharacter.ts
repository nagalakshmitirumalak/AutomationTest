function firstUnique(str: string): string{
    if(str.length === 0) return "Empty String"
    let uniqueString: string = "";
    
    for(let st of str){
        let count = 0;
        for(let s of str){
            if(st===s){
                count++; 
            }
        }
        if(count===1){
            uniqueString += st;
        }
    }
    return uniqueString.at(0)!;
}

const stringToCalNonRepeatingChar: string = "wweelcome";
const firstNonRepeatingCharInString = firstUnique(stringToCalNonRepeatingChar);
console.log(`Given String: ${stringToCalNonRepeatingChar}, First Non-Repeating Character is: ${firstNonRepeatingCharInString}`);
