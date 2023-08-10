function cubeNumber(number) {
     if(typeof number!=="number"){

       return "Please provide a number";
    }
    
    else{
       return number = number * number * number;
    }
  }



function matchFinder(string1, string2) {

   if (typeof string1 !== "string" || typeof string2 !== "string") {
     
    return "Please provide valid inputs [string]";

   }

    else{

         if (string1=== string2 || string1.includes (string2)) {
         
      return true; 

      }
      else{
      
        return false;
      }
    }
}







function sortMaker (arr ) {

    if ( !Array.isArray(arr)) {
 
        return ' Invalid input, Please provide an array.';
    }
 
    for (let i = 0; i < arr.length; i++) {
 
        if (typeof  arr[i] !== 'number' || arr[i] < 0) {
            return 'Invalid Input';
        }
    }
 
    let arrNum = arr.slice();
 
    for ( let i = 0; i < arrNum.length; i++) {
    for ( let j = i + 1; j < arrNum.length; j++ ) {
 
         if  (arrNum[j] > arrNum[i]) {
                [ arrNum[i] , arrNum[j] ] = [arrNum [j], arrNum[i]] ;
            }
        }
    }


    for (let i = 0; i <arr.length; i++ ) {
 
 
        if (arr[i]!==arrNum[i]) {
            return arrNum;
        }
    }
    return 'equal ';
 }







 function findAddress(obj) {
    let objectName =[

    'street',
    'house',
    'society'];

     let address = '';

    for (let i = 0; i < objectName.length; i++) {

          let spaceDes = objectName[i];

         address = address + (obj[spaceDes] || '__');
        if (i !== objectName.length - 1) {
            address = address + ',';
        }
    }

     return address;
}





function canPay(changeArray, totalDue) {
    
     if (changeArray.length === 0) {
       return "You do not have taka,please come again with taka...";
   }

       let arrayOfSum = 0;
     for (let i = 0; i < changeArray.length ; i++) {
      arrayOfSum = arrayOfSum + changeArray[i];
   }

   if (arrayOfSum >= totalDue) {

       return true;
   }  
   
   else {
       return false;
   }
}