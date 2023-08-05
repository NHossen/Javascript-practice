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

                                    // //Push and pop

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

                                // //Sum of Regular array Number by Normal for loop

function sumOfNumbers(number) {
    let sum=0;
    for (let i = 0; i < number.length; i++) {
    sum+=i;
    // sum=sum+number[i]; //Chack i and sum number list together
    // console.log(i,sum); //chack sum step by step with i number (0....last)
    
    }
    return sum;
}

const arrayNumber=[1,2,3,4,5,6,7,8,9];
const totalSum=sumOfNumbers(arrayNumber);
console.log(totalSum);

                      // //Sum of Regular array Number by  for-of  loop

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

                                // //Sum of Odds or bijor number from an array

  function sumOfOddsNumber(oddsArray){
    let sum =0
    for (let item of oddsArray){

    // Normal for loops //if (oddsArray[i]%2===1)
        if (item%2===1){  //if even number it will be item%2===0 it's even number.
            sum=sum+item; //Normal loop //sum=sum+oddsArray[i];
        }
    }
    return sum;
  }   
  const num2=[1,2,3,4,5,6,7,8,9,20] ;
  const  sumOfOdds=sumOfOddsNumber(num2);
  console.log(sumOfOdds) ;         
                                      // //Array Positons


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

                                            // //Array index

// index is like menu by index you can accses in array
var num1=[45,68,78,56,89,98];

                                    // //1:Get element by index
var firstOne=num1[1];
var second =num1[5];
// console.log(firstOne,second);

                               // //2.set element value by index
num1[1]=77;
num1[5]=57885;
// console.log(numbers);

                               // //3. Find index of an element positon

var positionIndex=num1.indexOf(45);
// console.log(positionIndex);

let myArray = [1, 2, 3, 4, 5];
// console.log(myArray[2]);


                            // Find the largest number from an array

 function findLargest(x){

    let largestNum=x[0];
    for (let i=1; i<x.length;i++){
        if (x[i]>largestNum){
            largestNum=x[i];
        }

    }
     return largestNum;
 }                           
const randomArrayNumber=[5,12,4,45,21,12,8,3];  
console.log(findLargest(randomArrayNumber));  


                          // Find Largest friends name string by array and loops

function biggestFriendName(myFriends){
    let biggest=myFriends[0];//arif
    for(let i=1; i<myFriends.length;i++){
        if(myFriends[i].length>biggest.length){
            biggest=myFriends[i];
        }
    }
    return biggest;
}
 const myFriends=["arif",'Riad','Sana','Nur','Naeem','Sannaullah'] 
 
 console.log(biggestFriendName(myFriends));


                                          // concat with another array
// const newfrindage=[12,12,64,32,12,64,]   ;
// const allFriends=newfrindage.concat(friends) ;   

                                // chack  a array item avaiable or not by includes

// console.log(friends.includes(19));

                                        // //Array with Objects

 const phones=[

    { brand:'Samsung', camera:12, Storage:'32gb',price:89000,color:"silver"},
    { brand:'Vivo', camera:12, Storage:'32gb',price:76000,color:"silver"},
    { brand:'MI', camera:12, Storage:'32gb',price:86000,color:"silver"},
    { brand:'Sony', camera:12, Storage:'32gb',price:656000,color:"silver"},
    { brand:'Apple', camera:12, Storage:'32gb',price:3333000,color:"silver"},
    { brand:'Huawei', camera:12, Storage:'32gb',price:36000,color:"silver"},
 ]   
 
 function cheapestPhone(phones){
    let cheapest=phones[0];
    for(let i=0; i<phones.length;i++){
        const phone=phones[i];
        if(phone.price<cheapest.price){
            cheapest=phone;
        }
    }
    return cheapest;
 }

 const mySelection=cheapestPhone(phones);
 console.log(mySelection);
