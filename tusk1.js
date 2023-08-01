// loops

/*
1.display ajke amr mon valo naii
2.display numbers betwen 58 to 98
3.show all even numbrrs from 412 to 456
3.odd numbers
4.different between for and while loops
6.display then as output
7.creact an array for all the mobile phones.
8.show all the elemensts at the arra using a while loop 
9.run a loop from 30 to 86 this loop stop if the vali higher then 44
10.array declare price of the books display the price if lower 
*/  


// var i = 5;
// for (i < 5; i++) {
//  console.log(i);
// }

// bmi calculator

// function bmiCalculator(w,h) {
//     var bmi=w*h;
//     return bmi; 
// }
// var bmi=bmiCalculator(7,7);
// console.log(bmi);


// 2.C.1.1
// Functions with callbacks
foo(function() {
  // Note there is no extra space between the first paren
  // of the executing function call and the word "function"
});

// Function accepting an array, no space
foo([ "alpha", "beta" ]);

// 2.C.1.2
// Function accepting an object, no space
foo({
  a: "alpha",
  b: "beta"
});

// Single argument string literal, no space
foo("bar");

// Expression parens, no space
if ( !("foo" in obj) ) {
  obj = (obj.bar || defaults).baz;
}

// if/else/for/while/try always have spaces, braces and span multiple lines
// this encourages readability

// 2.A.1.1
// Examples of really cramped syntax

if(condition) doSomething();

while(condition) iterating++;

for(var i=0;i<100;i++) someIterativeFn();


// 2.A.1.1
// Use whitespace to promote readability

if ( condition ) {
  // statements
}

while ( condition ) {
  // statements
}

for ( var i = 0; i < 100; i++ ) {
  // statements
}

// Even better:

var i,
  length = 100;

for ( i = 0; i < length; i++ ) {
  // statements
}

// Or...

var i = 0,
  length = 100;

for ( ; i < length; i++ ) {
  // statements
}

var prop;

for ( prop in object ) {
  // statements
}


if ( true ) {
  // statements
} else {
  // statements
}