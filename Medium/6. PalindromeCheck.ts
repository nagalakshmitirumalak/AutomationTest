function isPalindrome(str: string): boolean | string {
    if(str.length === 0) return "Empty String";

    const reversedString = str.split("").reverse().join("").toLowerCase();
    return reversedString === str.toLowerCase() ? true : false;
}

let strToCheckPalindrome: string = "Madam";
const isStrPalindrome = isPalindrome(strToCheckPalindrome);
console.log(`Given String: ${strToCheckPalindrome} is Palindrome : ${isStrPalindrome}`);