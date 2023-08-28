const nums=[4,6,67,66];//array number

for(let i =0;i<nums.length;i++){//normal for loop
    const num=nums[i];
    //console.log(nums,i);
    console.log(num)
}

//Used on Numn=
for(const num of nums){//ES6 Loop this is using on array and string
    console.log(num);

}

//Used on String
const myName="Naeem Hossen";
for(const char of myName){//using only string and number or array
    console.log(char)
}

                                 //for in loop using in object
const namePart={
    fName:"naeem",
    fAge:23,
    favcolor:'yellow'
}

for(const key in namePart){
    const keyValue=namePart[key]
    console.log(keyValue);
}

                  //Similar Map/Foreach/find

                             //Map using in array // map==^ loops through each element of the array and do the operations that you passe in the call back function and hold the result 
                             
                             const numbers=[34,232,12,123,67,34,23];
                             
                             // const doubIt=n=>n*2;
                             // const newNumber=numbers.map(doubIt);//by seperate number
                             
                             const newNumber=numbers.map(n=>n*2);
                            console.log(newNumber)

                           //Foreach
const myNum=[1,2,34,5,65,223];
//const result=myNum.forEach//no return come

const foreachNum=(n)=>console.log(n);
//myNum.forEach((n) => console.log(n));
myNum.forEach(foreachNum)
//console.log(foreachNum)



                            //filter and find depends on conditions

const playerNumber=[23,543,1,2,345,235];
const playeerHeight=[75,65,72,55,58];

//const selected=playeerHeight.filter(p=>p>70);//FILTER working conditions
const selected=playeerHeight.filter(p=>p%2 ===0);//by filter get 
//console.log(selected);

//string length chack by filter
const friends=['hdfgad','Riya','Sana','lima','sadiya'];
const friendsLenth=friends.filter(f=>f.length<=4);

//console.log(friendsLenth);

                                      //Reduce 
const arr=[1,2,3,4,5,6,7,8,9];
const sumArray=arr.reduce((previous,current) => previous + current);
//console.log('my sum',sumArray);
/*
previous + current =result

0+1=1
1+1=2
2+2=4
3+4=7


*/

