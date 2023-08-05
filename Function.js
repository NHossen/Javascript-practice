// 1. Function declartion

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
console.log('This is Your Change',mainMoney);//First and Second Functions Console value


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

