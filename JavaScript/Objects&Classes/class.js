class ToyotaCar{
    constructor(brand,mileage){
        console.log("creating new constructor");
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar("fortuner",12);     // constructor invoke
fortuner.setBrand("fortuner");
console.log(fortuner);

let lexus = new ToyotaCar("lexus",10);       // construnctor invoke
lexus.setBrand("lexus");
console.log(lexus);

console.log(fortuner.start());
console.log(lexus.start());