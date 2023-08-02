function isLeapyear(year) {
    const reminder=year%4;
    if(reminder===0){
        // console.log('Your year is leap year' , year)
        return true;
    }
    else{
        // console.log(
        //     'not leap year'

        // )
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
console.log('my yewar is ', isMyYearLeapYear);

