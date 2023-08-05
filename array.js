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
console.log(friendsName.length);
console.log(friendAge);

                                    // Push and pop

var num=[78,45,98,45];
// array push yo add to an array in last 
num.push(63);
console.log(num);
var friends=["nur" ,'sana' , 'riad'];
friends.push("rahim");
console.log(friends)

//use  array pop to get last element

var friends=["nur" ,'sana' , 'riad'];
friends.pop();
console.log(friends);

                                // Sum of Regular array Number by Normal for loop

function sumOfNumbers(number) {
    let sum=0;
    for (let i = 0; i < number.length; i++) {
    sum+=i;
    // sum=sum+number[i];
    // console.log(i,sum);
    
    }
    return sum;
}

const arrayNumber=[1,2,3,4,5,6,7,8,9];
const totalSum=sumOfNumbers(arrayNumber);
console.log(totalSum);

                      // Sum of Regular array Number by  for-of  loop

function sumOfRegularA(array){
    let s =0;
    for (let item of array){
        s=s+item;
    }
    return s
}
const numberArray=[23,34,452,23,23,32]   ;
const sumofArray=sumOfRegularA(numberArray);
console.log(sumofArray);                                   
                      
                                      // Array Positons


//  By index chack array positon
var fruits =['apple','Banana','orange'];
positonNum=fruits.indexOf('Banana');
//  console.log(positonNum);


fruits[1]='Mango';// Change or set array by Array Number
// console.log(fruits);

fruits.pop();// Items remove from array by pop
// console.log(fruits);
fruits.push('Watermelon');// Items add by push
// console.log(fruits);

                                            // Array index

// index is like menu by index you can accses in array
var num1=[45,68,78,56,89,98];

                                    // 1:Get element by index
var firstOne=num1[1];
var second =num1[5];
// console.log(firstOne,second);

                               // 2.set element value by index
num1[1]=77;
num1[5]=57885;
// console.log(numbers);

                               // 3. Find index of an element positon

var positionIndex=num1.indexOf(45);
// console.log(positionIndex);

let myArray = [1, 2, 3, 4, 5];
// console.log(myArray[2]);



