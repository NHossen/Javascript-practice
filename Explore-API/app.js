const users='https://jsonplaceholder.typicode.com/users';
function loadData2(){
    fetch(users)
       .then(response=>response.json())
       .then(data=>displayUser(data))
}

function displayUser(data){
  const ul=document.getElementById('users-list');
   //console.log(data);
   for(const user of data){

    const li =document.createElement('li');
    li.innerText=user.email;
    ul.appendChild(li);
  

    //console.log(user.email)
   }
}