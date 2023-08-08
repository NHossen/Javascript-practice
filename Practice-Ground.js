                                // Constructor Function
 function HouseKeeper(yearsofExperience,name,cleaningRepotoire){
    this.yearsofExperience=yearsofExperience;
    this.name=name;
    this.cleaningRepotoire=cleaningRepotoire;
 }   
 
 var houseKeeper1=new HouseKeeper(9,"tom",["lobby","bedroom"]);
 var houseKeeper2=new HouseKeeper(5,"Naeem",["Handdy","bedroom"]);
 console.log(houseKeeper1,houseKeeper2);
