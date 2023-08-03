function getSum(numbers) {

    // console.log(numbers);
    let sum=0;
    for (let i = 0; i < numbers.length; i++) {

        const indexNumbers= i;
        const arrayAndNumbers=numbers[indexNumbers];
        // sum+=arrayAndNumbers;
        sum=sum+arrayAndNumbers;
        // console.log(indexNumbers,arrayAndNumbers,sum);
        
    }
    return sum

    
}
// Numbers Declare by Variable
const myArrayNum=[12,65,45,78,32,45,91];
getSum(myArrayNum);


// get odd numbers sum from a array...

function getOddNumbersOfArray(arr) {

    // odd number array
    const oddNumbers=[];

    for (let i = 0; i < arr.length; i++) {

        const indexArraynum = i;
        const arrayNum=arr[indexArraynum];
        if (arrayNum % 2 !== 0) {

            console.log(indexArraynum,arrayNum);
            oddNumbers.push(arrayNum);
            
        }
        // console.log(indexArraynum,arrayNum);
        
    }
    return oddNumbers;
    
}
const arrayNumbers=[12,65,45,78,32,45,91];
const oddNumbers=getOddNumbersOfArray(arrayNumbers);
console.log(oddNumbers);
const oddNumbersSum=getSum(oddNumbers);
console.log(oddNumbersSum);