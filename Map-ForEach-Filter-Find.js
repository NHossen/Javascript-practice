//JavaScript High Funtional array method using in array and object
const arr=[1,2,4,53,43,12,53];
const products=[
    {name:'laptop',price:3200,brand:'lenovo',color:"red"},
    {name:'Iphon',price:32000,brand:'iphone',color:"red"},
    {name:'Wathch',price:6200,brand:'rado',color:"red"},
    {name:'belt',price:300,brand:'no',color:"red"},
    {name:'Sahowes',price:8800,brand:'lenovo',color:"red"},
    {name:'shirt',price:4200,brand:'lenovo',color:"red"}
];



//Map // by map we can make array from array of object by property name //if you want return you need to use map method

const brands=products.map(product=>product.brand);//Map return value

const name=products.map(product=>product.name);


console.log(brands,name)


//ForEach //ForLoop working as like map but forEach dont provide return value


///Filter and find working condition based;;;

//Filter filter give match related all products
const chap=products.filter(product=>product.price<=5000);
 console.log(chap)
// filter product by text 
const spesificName=products.filter(product=>product.name.includes('t'));
console.log(spesificName)

//Find
// but find give you match item only first item ,if matched only give you first item
const spesific=products.find(product=>product.name.includes('t'));
console.log("finfsa",spesific)

