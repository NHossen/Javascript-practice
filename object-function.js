                                  


var student={
  id:115,
  name:'Naeem Hossen',
  FavColor:'red'
  ,}
var mobile={
  brand:'Iphone',
  price:1500,
  camera:'7MP'
}

                                    // 1 .Object declare by functions
// console.log(mobile.price);
function movie(){
  return "Din-The day";
  return "Poran";
  return "Hawa";
 }
 console.log(movie());



                                                   // 2
function myFunc(theObject) {
    theObject.make = "Toyota";

    const mycar = {
        make: "Toyota",
        model: "Deaert",
        year: 1998,
      };

      console.log(mycar.make);
      console.log(mycar.year);
  }
  
  const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(mycar.make); // "Honda"
  console.log(mycar.model); // "Honda"

  myFunc(mycar);
//   console.log(mycar.make); // "Toyota"
  

                      // by object and function making sentence of string
function personalInfo(info){
  const stringSentence="My Name is " + info.name + " , My Home " + info.address + " , My Age " + info.age + " .";

  // console.log(stringSentence); //Parameter with no return

  return stringSentence;
}

const myinfo={
  name:'Naeem Hossen',
  age:24,
  address:"Bangladesh"
}
console.log(personalInfo(myinfo));