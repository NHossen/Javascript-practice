// array means line step by step ,in array you can put lots of informations

// for array declaration 3 strp
// 1: []
// 2: gap
// 3:

// Array starting countdown 0 1 2 3 4 5 6...
var friendsName = ['Nur','Jankar' ,'sana'];
var friendAge= [11,21,45,17,14,105.60];
var picnicFee=[5000,2000,4000,150];

// Array length for how many items in array
// console.log(friendsName.length);
// console.log(friendAge);

                                    // Push and pop

var numbers=[78,45,98,45];

// array push yo add to an array in last 
numbers.push(63);
console.log(numbers);
var friends=["nur" ,'sana' , 'riad'];
friends.push("rahim");
// console.log(friends)

//use  array pop to get last element

var friends=["nur" ,'sana' , 'riad'];
friends.pop();
console.log(friends);

                                           // Sum of Regular array Number

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

                                        // Array Positons

//  By index chack array positon
var fruits =['apple','Banana','orange'];
positonNum=fruits.indexOf('Banana');
//  console.log(positonNum);

// Change array by Array Number
fruits[1]='Mango';
// console.log(fruits);

// Items remove from array
fruits.pop();
// console.log(fruits);

// Items add by push

fruits.push('Watermelon');

console.log(fruits);

                                            // Array index

// index is like menu by index you can accses in array
var numbers=[45,68,78,56,89,98];
// get element by index
// var second =numbers[1];
// console.log(second);
// numbers[1]=88;


// 1:Get element by index
var element=numbers[1];
// console.log(element);
// 2.set element value by index
numbers[1]=77;
numbers[5]=57885;
// console.log(numbers);

// 3. Find index of an element positon

var positionIndex=numbers.indexOf(45);
console.log(positionIndex);

let myArray = [1, 2, 3, 4, 5];
console.log(myArray[2]);



