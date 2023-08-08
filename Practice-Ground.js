// Define a function that takes a callback function as an argument
function doSomethingAsync(callback) {
   // Simulate an asynchronous operation (e.g., fetching data from a server)
   setTimeout(function() {
       var result = "Async operation completed";
       callback(result); // Call the callback function with the result
   }, 2000); // Simulate a 2-second delay
}

// Define a callback function
function handleResult(result) {
   console.log(result);
}

// Call the main function and provide the callback
doSomethingAsync(handleResult);


/*
We have a function doSomethingAsync that simulates an asynchronous operation using setTimeout.
The doSomethingAsync function takes a callback function callback as an argument.
Inside doSomethingAsync, after the asynchronous operation is completed, it calls the provided callback function and passes the result to it.
We define a separate function handleResult that will be used as the callback.
We call doSomethingAsync and pass handleResult as the callback function.
When doSomethingAsync is called, it simulates an asynchronous operation and then calls the handleResult function with the result after the operation is completed.
*/
