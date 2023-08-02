// Miles to km 
/*
1 mile=1.60934 km

300 milea = how much km?

*/ 

function milesToKm(miles) {

    const km=miles*1.60934;
    return km;
    
}
const inputmiles=300;
const totalKm=milesToKm(inputmiles);
console.log(totalKm);
