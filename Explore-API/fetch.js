// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => console.log(response))//Json close to json.parse
//       //.then(json => console.log(json))


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))



// fetch(url)
// .then(response=>response.json())
// .then(json=>console.log(json))
const url='https://jsonplaceholder.typicode.com/todos/1';
function loadData(){
    fetch(url)
       .then(response=>response.json())
       .then(json=>console.log(json))
}

