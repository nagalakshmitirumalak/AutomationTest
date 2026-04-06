function reverseString(str: string): string{
    return str.split("").reverse().join("");    
}

let str: string = "playwright";
console.log(`Given string : ${str}`);
const reversedString = reverseString(str);
console.log(`Reversed string : ${reversedString}`);