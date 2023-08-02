// var number=1;
// while (number<=30){
//     console.log(number);
//     // number++;
//     number=number+2;
// }


// Odd and even number check by Function

// Even number check

function isEven(number) {

    const reminder=number%2;

    // console.log(reminder);
    if (reminder===0) {
        // console.log('This is Even Number');
        return true;
        
    }
    else{
        // console.log('this is odd');
        return false
    }
    
}
isEven(303);
