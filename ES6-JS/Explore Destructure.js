                                //Array and object destrucreing

const actor={ //destructing used for one value multiple time useing
    name:"Naeem Hossen",
    age:24,
    color:'yellow'
}
//Rulles 1 If  right side is an object left side of destructring will be object as well
const {color:myCoor,name,age}=actor//destructure//use property name as a variable that contains the property value

//const color=actor.color;//Normal uses
//const name=actor.name;
console.log(myCoor);
console.log(myCoor);
console.log(name);
console.log(name);
console.log(age);
console.log(age);

                         //destructure from an array
    
const numbers=[34,54]
const [first,second]=numbers;
console.log(first,second)