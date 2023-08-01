var shopingCar={
    books:3,
    sunglass:4,
    pen:6,
    mouse:1

}
// When you know the specific property name use dot notation
var penCount=shopingCar.pen;

// alternative system by property and used third bracket

var penCount2=shopingCar['pen'];

// If i dont know property name;
var propertyName='mouse';
var propertieValue=shopingCar[propertyName];
console.log(propertyName,propertieValue);

// Peoperty name

var properties=Object.keys(shopingCar);
var propertieValue=Object.values(shopingCar);
// console.log(properties);
// console.log(propertieValue);
// console.log(shopingCar);