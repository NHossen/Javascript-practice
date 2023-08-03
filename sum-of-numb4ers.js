// Calculate Factorial of number using loop

// 1,2,3,4,5,6,7,8,9

// let sum=0
// const numbers=[1,2,3,4,5,6,7,8,9];

// for (let i = 0; i < numbers.length; i++) {
//     sum+=i;
//     // sum=sum+i;
//     console.log(i,sum);
    
// }


function sumOfNumbers(number) {
    let sum=0;
    for (let i = 0; i < number.length; i++) {
    sum+=i;
    // sum=sum+i;
    console.log(i,sum);
    
    }
    return sum;
}

const numbers=[1,2,3,4,5,6,7,8,9];
sumOfNumbers(numbers);
