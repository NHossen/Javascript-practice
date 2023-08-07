                                       // conditions



                                        // Comparsion
console.log(5>6);
console.log(5<6);

console.log(5==6);

// Not equal !=

console.log(5!=6);

// Less than or equal
console.log(5<=6);

var num1=56;
var num2=89;
console.log(num1<num2);
console.log(num1>num2);
console.log(num1===num2);
console.log(num1!==num2);
console.log(num1>=num2);
console.log(num1<=num2);
// Multiple conditions

money1>money2 && result1>result2 && height1>height2






 console.log(5<6);


Comparsion
console.log(5>6);


console.log(5==6);

// Not equal !=

console.log(5!=6);

// Less than or equal
console.log(5<=6);

var num1=56;
var num2=89;
console.log(num1<num2);
console.log(num1>num2);
console.log(num1===num2);
console.log(num1!==num2);
console.log(num1>=num2);
console.log(num1<=num2);
// Multiple conditions

money1>money2 && result1>result2 && height1>height2




                                   

var iphonePrice=79000;
var myBudget=9500;

// if iphone price is less then my budged i will buy the iphone

 

var chikenPrice=500;
var money=50;
// if (chikenPrice<=money){
//     console.log("murgikhabo");
// }

// if (chikenPrice>money){
//99*///     console.log("Jankar");
// }



                                //Chack Largest Number by conditions

var num1=81;
var num2=34;
var num3=44;

if(num1>num2 || num1> num3||num2>num3){
    console.log('largest number');
}

                                        // Multiple conditions 

var isGraduated=true;
var salary=35000;

if(isGraduated ==true && salary>50000){
    console.log('aso biye korii')
}

else{
    console.log(
        'tor kopale biye anii'
    )
}

                                       // Multiple condittons

var naeem=85;
var tom=55;
var jane=95;
var peter=56;
var john=40;

// var  personName=[naeem ,tom,jane,peter,john]

if (naeem > 80 ){
    console.log('I got A Grade ');
}
else if (naeem > 60 ){
    console.log('I got B Grade ');
}
else if (naeem > 50 ){
    console.log('I got C Grade ');
}
else if (naeem > 45 ){
    console.log('I got D Grade ');
}
else {
    console.log('I got Fail ');
}

// Tom
if (tom > 80 ){
    console.log('I got A Grade ');
}
else if (tom > 60 ){
    console.log('I got B Grade ');
}
else if (tom > 50 ){
    console.log('I got C Grade ');
}
else if (top > 45 ){
    console.log('I got D Grade ');
}
else {
    console.log('I got Fail ');
}

// Jane
if (jane > 80 ){
    console.log('I got A Grade ');
}
else if (jane > 60 ){
    console.log('I got B Grade ');
}
else if (jane> 50 ){
    console.log('I got C Grade ');
}
else if (jane > 45 ){
    console.log('I got D Grade ');
}
else {
    console.log('I got Fail ');
}



// console.log(personName);



                                      // Switch
switch(color){
    case red:
        break;
        case yellow:
            break;

}


                          // Fivonacci Solutions by Conditions


 function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
        var output = [];
        if (n===1) {
            output=[0];
            
        } else if(n===2) {
            output=[0,1];
            
        }
        else{
            output=[0,1];
           output.push(output[output.length-2]+output[output.length-1]);
           if(n===output.length){
               
           }
           else{
               output=[0,1];
               for(var i=2; i<n; i++){
               output.push(output[output.length-2]+output[output.length-1]);
               }
                
           }
        }
        
        return output;
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    console.log(fibonacciGenerator (10));


                    // 99 bottels of bear code sollutions


    var bottles;
for (let counter = 1; counter >= 1; counter = counter - 1) 
{
    if (counter == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(counter+" "+bottles+" of beer on the wall.");
    if (counter < 99) {
        console.log("");
        console.log(counter+" "+bottles+" of beer on the wall.");
    }
    console.log(counter+" "+bottles+" of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (counter == 1) {
        console.log("No bottles of beer on the wall.");
    }
}
     

                                       // prime unmber solution

function findPrimeNumbers(arrayFile){
    if(!Array.isArray(arrayFile)){
        return "Please Provide me a Number "
    }else{
        // 0 1 cant me prime number
        let primes=[]
        for(let item of arrayFile){

            if(item>1){

                let flag=true;
                for(let i=2;i<item;i++){
                    if(item%i===0){
                        flag=false;
                        break;

                    }
                }

                if(flag===true){
                primes.push(item);
                }
            }

        }
        return primes;
    }
    

}

const numbers=[4,7,8,11,9,2,10];
console.log(findPrimeNumbers(numbers));
  
  

