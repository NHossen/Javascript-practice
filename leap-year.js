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



