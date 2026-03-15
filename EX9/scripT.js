let car = {
    make: "Ferrari",
    model : "lamborghini",
    year : 2000,
    started : function() {
        console.log("Car started" , this.make);
    }
    
}
console.log(car.make);
console.log(car.model);
console.log(car.year);
console.log(car.started());