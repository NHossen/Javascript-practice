const nu =[1,2,3,43,3,4242,23];
const x=nu.find((item)=>item===43)
console.log(x);

//filter
const numbers=[1,2,3,45,4,345,34,364,23];

const filter=numbers=>{
    const result=[];

    for(let item of numbers){
        if(item%2===0){
            result.push(item);
        }
    }
    return result;
}
 const evenx=filter(numbers);
 console.log(evenx);



