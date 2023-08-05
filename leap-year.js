                                   // Options one

function isLeap(year) {

    if (year%2===0) {

        if (year%100===0) {
        
        if (year%400===0) {
            return  "is leap year" ;
        }else{

            return  " is not leap year";
        }
            
        }else{
            return  " is leap year" ;
        }
     
    }else{
        return  " is not leap year" ;
    }
    

    
}
var yearInput=2032;
var leapYear= isLeap(yearInput);
console.log(leapYear);

                                        // Option two

function isLeapyear(year) {
    const reminder=year%4;
    if(reminder===0){
        // console.log('Your year is leap year' , year)
        return true;
    }
    else{
        console.log(
            'not leap year'

        )
        return false;

    }
}
// function isLeapyear(year) {
//     const reminder=year%4;
//     if(reminder===0){
//         // console.log('Your year is leap year' , year)
//         return true;
//     }
//     else{
//         // console.log(
//         //     'not leap year'

//         // )
//         return false;

//     }
// }
const isMyYearLeapYear=isLeapyear(1933);
console.log('my year is ', isMyYearLeapYear);

