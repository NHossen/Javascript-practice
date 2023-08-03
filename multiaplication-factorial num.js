// function MultiplicationNumbers(number) {

//     let result=1;

//     for (let i = 0; i <=7; i++) {
//         result =result*i;

        
//     }
//     return result;
    
// }
// const result =MultiplicationNumbers(7);


// Factorial number

// 6.factorial 6*5*4*3*2*1

function multiplicationNumbersOfNumbers(number) {
    let multiplication=1;
    for (let i = 1; i <= number.length; i++) {
        multiplication*=i;
    // sum=sum+i;
    console.log(i,multiplication);
    
    }
    return multiplication;
}

const numbers=[1,2,3,4,5,6,7,8,9];
multiplicationNumbersOfNumbers(numbers);

// Factorial formula  is n!=n*(n-1)!