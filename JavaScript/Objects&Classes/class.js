class ToyotaCar{
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

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
console.log(fortuner);

let lexus = new ToyotaCar();
lexus.setBrand("lexus");
console.log(lexus);

console.log(fortuner.start());
console.log(lexus.start());