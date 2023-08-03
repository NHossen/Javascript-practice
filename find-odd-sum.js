function getSum(numbers) {

    // console.log(numbers);
    let sum=0;
    for (let i = 0; i < numbers.length; i++) {

        const indexNumbers= i;
        const arrayAndNumbers=numbers[indexNumbers];
        // sum+=arrayAndNumbers;
        sum=sum+arrayAndNumbers;
        console.log(indexNumbers,arrayAndNumbers,sum);
        
    }
    return sum

    
}
// Numbers Declare by Variable
const myArrayNum=[12,65,45,78,32,45,91];
getSum(myArrayNum);