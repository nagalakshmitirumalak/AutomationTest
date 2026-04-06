function sumAll(...nums: number[]): number | string {
    if(nums.length === 0) return "Empty String";

    let sum: number = 0
    for(let num of nums){
        sum += num;
    }

    return sum;
}

const arraToSum: number[] = [1, 5, 7, 8];
const sumOfArr = sumAll(...arraToSum);
console.log("Given Array : ", arraToSum);
console.log("Sum of Array : ", sumOfArr);