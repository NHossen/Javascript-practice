//Step:0 from 1 sentence need to chack vowel,Consonnet,Space 
//Step:1 Declare a string of sentence 
//Step:2 Create a function and Declare variable for vowel consonet and space 
//Step:3 Create for loops 
//Step:4 chacke variable by conditions  
//Step:5 return variable then consolelog.

function chackName(name){
    let vowel=0;
    let consonent=0;
    let space=0;
    let vowelArray=[];
    let consonentArray=[];

    for(let i=0;i<name.length;i++){
        let char=name[i].toLowerCase();
        // console.log(char);
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            vowel++;
            vowelArray.push(char);
        }
        else if (char!==" "){
            consonent++;
            consonentArray.push(char)
        }
        else{
            space++;
        }
    }

    const object={
        vowelCount:vowel,
        consonentCount:consonent,
        spaceCount:space,
        vowelArray:vowelArray,
        consonentArray:consonentArray
    }

   return object;
}

const myName='NAeem hossen';
console.log(chackName(myName));