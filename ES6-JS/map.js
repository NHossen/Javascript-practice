//Map using in array // map==^ loops through each element of the array and do the operations that you passe in the call back function and hold the result 

const numbers=[34,232,12,123,67,34,23];

// const doubIt=n=>n*2;
// const newNumber=numbers.map(doubIt);//by seperate number

const newNumber=numbers.map(n=>n*2);
console.log(newNumber)