//Promise

const getData =new Promise((resolve,reject) =>{//get data from object

    const num=Math.random()*10;
    if(num<5){
       resolve(56);//Data in object 
    }else{
        reject('No data availabe')
    }
    
    
})
//getData
.then(data=>console.log(data+22))//Using to get data from object //How it is possible work without calling data
.catch(err => console.error('e',err))

//Sample Async Functions with fetch
//#1
async function getUser(url){
    let response=await fetch(url);
    let data=await response.json();
    console.log(data);
    return data;
}
//#2
const phoneData= async(url)=>{// Step 1 By Finction take Phone data using async function and fetch
    const res=await fetch(url);
    const data=await res.json();//res convert to json data
    console.log(data);
    return data;
}

                                     //Fetch vs Async/Await
   // # Fetch                                  
  const loaddata=(url)=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
    .catch(err => {
        console.log(err,"Message")
    })
  } 
  
  // # Async/Await
  const loadDataAsync=async(url)=>{
    try{
        const res=await fetch(url);
        const data=await res.json();
        console.log(data) ;
    }
    catch(err){
        console.log(err);
    }
  }