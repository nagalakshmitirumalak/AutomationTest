function flattenArray(arr: any[]): number[] | string{
    if(arr.length===0) return "Empty Array"
    return arr.flat();
}

const arrayToFlaten: [number, number[], number] = [1, [2, 3], 2];
const flatenArr = flattenArray(arrayToFlaten);
console.log("Given Array: ", arrayToFlaten);
console.log("Flaten Array: ", flatenArr);