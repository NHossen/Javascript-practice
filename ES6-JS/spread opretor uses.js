//uses spread operator for array and object for copy product

const max=Math.max(6,324,23,234,3223,4,2,342,3422);//Math.max uses
console.log(max);

const numbers=[2,323,423,42,34,23,432,4];
//const arraMax=Math.max(numbers); //We get Nan
const arraMax=Math.max(...numbers);//by Spread operator we can get any number of list an array
//const first3=numbers[1];
console.log(arraMax);
//console.log(first3)

                              //Uses spread operator to copy

const nums=[4,6,67,66];//array number
const nums2=[...nums];//inside nums2 copy nums using spread opretor
nums2.push(12);//push inside nums2 - 12
nums.push(...nums2,22,33,44);//inside nums push nums 2 using spread operator //we can add also extra array number with spread operator
console.log(nums,nums2);

                           //Uses spread operator in object

const personalInfo = {
    name: 'naeem Hoseen',
    age: '24',
    profession: 'Web developer',
    extraInfo: {
        catDetails:'rast' 
    }
};

const myCarDetails={
    brand:'Ferrari',
    color:"Yellow",
    model:2030
}

 const myInfo ={...personalInfo,...myCarDetails}
 console.log(myInfo)
//Tusk 2

const myObj = { name: 'Naeem Hossen', age:24, favtColor:"yellow", hobbis:'Travel' };
const myCat= { catName: 'Tom', catAge:4 ,catColor:"white", favFoot:"milk"};

const combinedObj =  {...myObj,...myCat} ;

console.log(combinedObj);
