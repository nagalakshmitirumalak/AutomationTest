function isEvenOrOdd(n: number): string {
    if(n <= 0) return "Not Even or Odd"
    return n%2===0 ? "Even" : "Odd"
}

const evenOrOddNum: number = 1;
let numIsEvenOrOdd = isEvenOrOdd(evenOrOddNum);
console.log(`${evenOrOddNum} is ${numIsEvenOrOdd}`);