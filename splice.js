const cars=["BMW","Volvo","Toyoto","Honda"];
console.log("Original array",cars);
var splice=cars.splice(1,1,"Tata");
console.log("splice add or remove items:",cars);
console.log("return value:",splice);
var splice1=cars.splice(1,0,"Tata");
console.log("splice add an item:",cars);
console.log("Return value",splice1);
