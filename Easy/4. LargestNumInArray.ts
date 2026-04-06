function findLargest(nums: number[]): number | string {
    if(nums.length === 0) return "Empty String"

    let largest : number = -Infinity;

    for(let num of nums){
        if(num > largest){
            largest = num;
        }
    }
    return largest;
}

const arraToFindLargest: number[] = [1, 8, 7, 65];
const LargestNumber = findLargest(arraToFindLargest);
console.log("Given Array: ", arraToFindLargest);
console.log("Largest Number in Array : ", LargestNumber);

