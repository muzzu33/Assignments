class Vehicle{
    modelname;
    topspeed;
    horsePower;
    year;

    constructor(modelname,topspeed,horsePower,year){
        this.modelname=modelname;
        this.topspeed=topspeed;
        this.horsePower=horsePower;
        this.year=year;
    }
vehicledetails(){
    console.log(`Vehicle Details ==>
    Name : ${this.modelname} 
    Top Speed : ${this.topspeed}
    Horsepower : ${this.horsePower} 
    Year Manufactured : ${this.year}`)
}    
}

let carFerrari=new Vehicle(`Ferrari SF90 Spider`,`355 km/h`,`980 HP`,`2021`)
carFerrari.vehicledetails();

let carlamborghini=new Vehicle(`Lamborghini Aventador`,`350 km/h`,`869 HP`,`2011`)
carlamborghini.vehicledetails();

let carBugatti=new Vehicle(`Bugatti Veyron`,`408 km/h`,`987 HP`,`2016`)
carBugatti.vehicledetails();

let carMclaren=new Vehicle(`McLaren 720S`,`360 km/h`,`700 HP`,`2017`)
carMclaren.vehicledetails();

let carAstonMartin=new Vehicle(`Aston Martin V8 Vantage `,`314 km/h`,`600 HP`,`2015`)
carAstonMartin.vehicledetails();

