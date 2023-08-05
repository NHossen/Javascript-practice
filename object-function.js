                                  // Object declare by functions


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

// Objective property by consle
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
  