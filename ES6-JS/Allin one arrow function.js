                                  // Arrow function Basic

const myName=(a)=>(a);//Basic arrow function structure ES6 No Need to return

const sum=(a,b)=>(a+b);//Sum of two pereameter
const multy=(a,b,c,d)=>(a*b*c*d);//Multiplication by 4 perameter
console.log(multy(2,3,4,5,));//Console log no need return

                             // Arrow Function uses in Object

const getAge=(info)=>info.age;//get object property by arrow function
const student={name:"Naeem Hossen",age:24};
const age= getAge(student);
console.log(age);

                            // Arrow Function uses in Array

const arrayNum=[2,3,4,5,6,56,43];
//const num=(getNum)=>(getNum);
const num=(getNum)=>(getNum[6]);
//console.log(num(arrayNum[5]));
console.log(num(arrayNum));

                               /*Arrow Function uses in Array for number doubled 
                               **For Singel perameter no need Braket notation
                               *
                              */
const numberDoub =12                              
const doubNum=number=>number*2;//without bakect nottation
console.log(doubNum(numberDoub));

                              //Arrow Funtion without perameter /No perameter
const getPi=()=>Math.PI;
console.log(getPi());

                              //Large arrow Function by third braket
const sumMulSumplusAvg=(a,b,c)=>{//if need multple work by math need to return
    const sum=a+b+c;
    const multy=a*b*c;
    const total=sum+multy;
    const avg=total/2;
    return avg
}
console.log(sumMulSumplusAvg(2,2,2));

