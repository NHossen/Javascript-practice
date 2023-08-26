//class
const productsName=[

     {id:1 ,name:'lenovo',price:45000},
     {id:2 ,name:'dell',price:35000},
     {id:3 ,name:'hp',price:25000},
     {id:4 ,name:'mac',price:165000}
]
//Hs some propersties ,method

class Product{ //class name always started by capital letter,
     country='bangladesh'//we can also declare a variable without variable name

     constructor(name){//by constructor we can set value by this keyword
          this.name=name;
          
     }
    speak(talk){ //we can write a functioon inside a class section
        console.log(`talking about ${talk}`)

    }
}
const lenovo =new Product('le le lenovo')
console.log(lenovo);
lenovo.speak('oba kitha kow');

//Example 2

class Teacher{
    constructor(name,subject){
        this.name=name;
        this.subject=subject;

    }
    lecture(){
        console.log('Sir is teaching Math')
    }
}

const tapan =new Teacher('Tapon Sir','physics');
console.log(tapan);
