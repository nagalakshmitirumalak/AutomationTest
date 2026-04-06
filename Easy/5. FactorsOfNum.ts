function getFactors(n: number): number[] | string {
    if(n === 0) return "Number is Zero not divisible";

    let factors: number[] = [];

    for(let i=0; i*i<= n; i++){
        if(n%i === 0){
            factors.push(i);
        }
    }

    return factors;
}

const numberToFindFactors : number = 45;
const factorsOfNumber = getFactors(numberToFindFactors);
console.log(`Given Number : ${numberToFindFactors} and Factors: `, factorsOfNumber);