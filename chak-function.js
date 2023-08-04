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
  