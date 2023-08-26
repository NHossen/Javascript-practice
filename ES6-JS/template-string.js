
document.getElementById('my-details').addEventListener('click',function(){

const myName="Naeem Hossen"
const age=24;
const myCar='Ferrai';

const myDetails=`My Name is${myName},I am ${age},years old.my future car is ${myCar}.

<h1>About me</h1>
<p>My Name is${myName},I am ${age},years old.my future car is ${myCar}.</p>
`

let newParagraph = document.createElement("p");
newParagraph.innerHTML = myDetails;
let containerDiv = document.getElementById("container");
containerDiv.appendChild(newParagraph);
//console.log(myDetails)

})

