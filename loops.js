                                          // While Loops
// $ things need for while loops
/* 1 Loop variable
// 2 loop condition
3 loop body
4 loop change varaible 
*/

var number=1;

while (number<=10){
    console.log(number);
    number++;
}


var roastGiven=0;
// if(roastGiven<7){

// }
while(roastGiven<7){
    console.log('roast den,please')
    // roastGiven=roastGiven+1;
    // roastGiven+=1;
    console.log(roastGiven);
    roastGiven++;
}

// For Loop

// var roastGiven=0;
// while(roastGiven<7){
//     console.log("roast given");
// }

// for (var roastGiven=0;roastGiven<7 ; roastGiven++){
//     console.log("roast den");
// }

// simple version of for loop
// console.log('simple for loop')
// for(var i=0;i<7;i++){
//     console.log('sdkjksjdgsdgdgs');
// }

// 1.
var num=[32,33,22,4756,37456,3244];

for(var i=0; i< num.length; i++){
    console.log(num,i);
}
// 2

var numbers=[45,78,89,56,32,25,676,676,464,4353,3535]

for(var i=0; i<numbers.length;i++){
    var number=numbers[i];
   console.log(number,[i]);
} 
// 3

for(var i=[32,45,21]; i<5;i++){
    var iLength=i.Length();
}

console.log(iLength);

                                      // 4. Reverse

// var num=1;
// while (num<=10) {
//     console.log(num);
//     num++;
// }

// var num=10;
// while (num>=1) {
//     console.log(num);
//     num--;
// }


for (var num=10;num>=1;num--) {
    console.log(num);
    
}

                                      // break

for(var i=0;i<=20;i++){
    console.log(i);
    if(i>10){
        break;
    }
}


                                      // Continue
for(var i=0;i<=20;i++){
    console.log(i);
    if(i>10){
        continue;
    }
}

                               // Even Number Chack by for loop 

// Even number

var even=0;
while(even<=30){
    console.log(even)
    // even++;
    even=even+2;
}

// odd Number

                              // Find-odd-Number sum by for loops

function getSum(numbers) {

    // console.log(numbers);
    let sum=0;
    for (let i = 0; i < numbers.length; i++) {

        const indexNumbers= i;
        const arrayAndNumbers=numbers[indexNumbers];
        // sum+=arrayAndNumbers;
        sum=sum+arrayAndNumbers;
        // console.log(indexNumbers,arrayAndNumbers,sum);
        
    }
    return sum

    
}
// Numbers Declare by Variable
const myArrayNum=[12,65,45,78,32,45,91];
getSum(myArrayNum);


// get odd numbers sum from a array...

function getOddNumbersOfArray(arr) {

    // odd number array
    const oddNumbers=[];

    for (let i = 0; i < arr.length; i++) {

        const indexArraynum = i;
        const arrayNum=arr[indexArraynum];
        if (arrayNum % 2 !== 0) {

            console.log(indexArraynum,arrayNum);
            oddNumbers.push(arrayNum);
            
        }
        // console.log(indexArraynum,arrayNum);
        
    }
    return oddNumbers;
    
}
const arrayNumbers=[12,65,45,78,32,45,91];
const oddNumbers=getOddNumbersOfArray(arrayNumbers);
console.log(oddNumbers);
const oddNumbersSum=getSum(oddNumbers);
console.log(oddNumbersSum);


