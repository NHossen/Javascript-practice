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