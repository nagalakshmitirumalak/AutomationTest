function secondLargest(nums: number[]): number | string {

    if(nums.length === 0) return "Array is empty";
    
    const uniquearr = Array.from(new Set(nums));

    uniquearr.sort((a,b) => b-a);
    return uniquearr[1]!;
}

const arrayToFSecondLar: number[] = [4, 5, 8, 36, 5, 36];
const secondLargestNumber = secondLargest(arrayToFSecondLar);
console.log("Given array :", arrayToFSecondLar, "Second largest number in the array", secondLargestNumber);
