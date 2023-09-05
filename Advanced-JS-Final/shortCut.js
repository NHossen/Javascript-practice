//ternary operator also known as a conditional operator you can reduce any statement by ternary easily

const money=70;//Shortcute by ternary operator also known as a conditional operator 
let food;
if(money>100){
    food='briyani'
}else{
    food="cha biscuit";
}

//ternar opertor using to condition shortCut

let samplePartByPart=money>100//< If Condition ?//<Chack "briyani"//<value : "cha biscuit";  

let food2=money>100 ? "briyani" : "cha biscuit";//shortcut

//For multy Conditons 
let drink=(money>100 && myPoket>100 )? 'coke':"filter water"

console.log('i am eat',food2);


//Number to string Shortcut
const num1=52;
console.log(num1);
const numStr=num1+'';// if number + empty string it will be String
console.log(numStr)

//String to num
const input='500';
const inputNum= +input;
console.log(inputNum);

//call by ternary
const isActive=true;
const showUser=()=>console.log('display User');
const hideUser=()=>console.log('hide user')
isActive ? showUser() : hideUser();//ternary operator
isActive && showUser();//Other option
isActive || showUser();//Other option

//if true false will be make if false it will be true///toggle bolean
isActive=!isActive