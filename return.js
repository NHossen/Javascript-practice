function bringSingara(money) {
    console.log('ei nen taka 5 ta singara ded ' ,money);
   console.log('mama singara khaboo');
}
var taka=300;


function add(num1,num2) {
    console.log(num1, num2);
    var sum=num1+num2;
    // return sum;

    // console.log(sum);
    return sum ;
    
}
// add(45,15);
var total=add(80,20);
// console.log('total', total)

function bringcook(money) {
    var cookPrice=10;
    var cookQuantity=money/cookPrice;
    return cookQuantity;
    
}
var taka=400;
var cook=bringcook(taka);
console.log('drink cook :' ,cook);
