function countVowels(str: string): number{
    const vowels: string = "aeiouAEIOU";
    let countOfVowels = 0;
    
    for(let char of str){
        if(vowels.includes(char)){
            countOfVowels++;
        }
    }

    return countOfVowels;
}

const stringToCheckVowels: string = "automation";
const vowelsCount = countVowels(stringToCheckVowels);
console.log(`Given string: ${stringToCheckVowels}, Count of Vowels in the string : ${vowelsCount}`);