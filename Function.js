                          // 1. Function declartion sum and Avarage

function add(x,y){ //1.first Function
    let total=x+y;// console.log(total);
    return total;
}// console.log(add(3,4));
let result=add(2,3);// Re use Function by Another Variable
let getMoney=result-3;// console.log("This is Your Change" ,getMoney);

function chackAnotherSum(a,b){//2.funciton Another Function To Included with first Function
    const sum=a+b;
    return sum;
}
let sumOfMoney=(chackAnotherSum(7,8));//Second Function Value
let mainMoney=sumOfMoney*getMoney; //First and Second Function value
console.log('This is Your Change', mainMoney);//First and Second Functions Console value


// 2.Function > How to re-use Function Chack??
// Two friends Avarage marks by Function 
function marksNur(a,m,f){ //a=Accounting>75,b=Marketing>85,c=Finance>95
  let sumOfNurMarks=a+m+f;//Sum of 3 Subject Number
  return sumOfNurMarks; //Return Marks
}// console.log(marksNur(75,85,95));
let nurMarks=marksNur(75,85,95); console.log('Nur got',nurMarks);

function marksNaeem(a,m,f){//a=Accounting>85,b=Marketing>75,c=Finance>85
    let sumOfNaeemMarks=a+m+f;
    return sumOfNaeemMarks;
}
let naeemMarks=marksNaeem(85,75,85); console.log('Naeem got',naeemMarks);

// Avarage marks by Function
function avarageMark(nur,naeem){//nurMarks and NaeemMarks
  let sumOfMark=nur+naeem;
  let avgMark=sumOfMark/2;
  return avgMark;
}// console.log(avarageMark(nurMarks,naeemMarks));

let avarageMarkTwofriends =avarageMark(nurMarks,naeemMarks);
console.log("Naeem And Nur avarage mark",avarageMarkTwofriends);

                                        // Coverter by Function

function InchToFeet(incches) {// const myInches=12;
    const feet=incches/12;// const myFeet=myInches/12;
    return feet;// console.log(myFeet);
}
const dadaInches=144;
const dadaFeet=InchToFeet(dadaInches);
console.log(dadaFeet);
// Another converter:
const nanaIncesh=244;
const nanaFeet=InchToFeet(nanaIncesh);
console.log(nanaFeet);

// Miles to km 
/*
1 mile=1.60934 km

300 milea = how much km?

*/ 

function milesToKm(miles) {

    const km=miles*1.60934;
    return km;
    
}
const inputmiles=300;
const totalKm=milesToKm(inputmiles);
console.log(totalKm);

                                  /*Four Type of number
                                  
                                  1.no perameters,no return
                                  2.perameters with no return
                                  3.no perameters with return
                                  4.perameters with return

                                  */
                                   
//1. no perameters,no return
function show(){
console.log('hello');
}
show();
// 2.perameters with no return
function add(x,y){
    console.log(x+y);
}
add(2,2);
// 3.no perameters with return
function giveMoney(){
    const money=500;
    return money;
}
giveMoney();

// 4.perameters with return

function multi(a,b){
  const result=a*b;
  return result;

}
multi(4,5);

                               // //Multipulation by Functions


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


                       //Random name to buy Lunche problem;


function whoPaying(names){
    var numberOfPepople=names.length;
    var randomPersonPostion=Math.floor(Math.random()*numberOfPepople);
    var randomPerson=names[randomPersonPostion];
    console.log(randomPerson);
    return randomPerson + " is going to buy lunch today";

}

const nameOfFriends=['Ansar',"Faruk",'Naerm','Rubel','Sonen',];
console.log(whoPaying(nameOfFriends));


                                     // //Constructor Function

function HouseKeeper(yearsofExperience,name,cleaningRepotoire){
    this.yearsofExperience=yearsofExperience;
    this.name=name;
    this.cleaningRepotoire=cleaningRepotoire;
    
                                     //  Method
      this.moveSuitcase=function(){
        console.log("May I take Your suitcase?");
        pickUpSuitCase();
        move();
      }  
      //second method
      this.clean=function(){
        console.log("Cleaning in progress...");
      }                             
 }   
 
 var houseKeeper1=new HouseKeeper(9,"tom",["lobby","bedroom"]);
 var houseKeeper2=new HouseKeeper(5,"Naeem",["Handdy","bedroom"]);
 var houseKeeper3=new HouseKeeper(12,'James',["bedroom"]);
 console.log(houseKeeper1,houseKeeper2,houseKeeper3);

                                       
 
                                      //  Call back function

  // Define a function that takes a callback function as an argument
function doSomethingAsync(callback) {
  // Simulate an asynchronous operation (e.g., fetching data from a server)
  setTimeout(function() {
      var result = "Async operation completed";
      callback(result); // Call the callback function with the result
  }, 2000); // Simulate a 2-second delay
}

// Define a callback function
function handleResult(result) {
  console.log(result);
}

// Call the main function and provide the callback
doSomethingAsync(handleResult);


/*
We have a function doSomethingAsync that simulates an asynchronous operation using setTimeout.
The doSomethingAsync function takes a callback function callback as an argument.
Inside doSomethingAsync, after the asynchronous operation is completed, it calls the provided callback function and passes the result to it.
We define a separate function handleResult that will be used as the callback.
We call doSomethingAsync and pass handleResult as the callback function.
When doSomethingAsync is called, it simulates an asynchronous operation and then calls the handleResult function with the result after the operation is completed.
*/
                                   

