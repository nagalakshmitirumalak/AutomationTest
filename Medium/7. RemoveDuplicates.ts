function removeDuplicates(arr: number[]): number[]{
    let uniqueArray: number[] = [];

    return Array.from(new Set(arr));
}

const arrToRemDup: number[] = [0, 1, 5, 8, 6, 1, 0];
const arraywithoutDuplicates = removeDuplicates(arrToRemDup);
console.log("Given Array : ", arrToRemDup, "Removed Duplicates : ", arraywithoutDuplicates);