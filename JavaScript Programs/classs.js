class Vehicle {
  constructor(manufacturer, model, year) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    return `${this.manufacturer} made ${this.model} in ${this.year}`;
  }
}
class Car extends Vehicle {
  constructor(manufacturer, model, year, fuelType) {
    super(manufacturer, model, year);
    this.fuelType = fuelType;
  }

  getCarInfo() {
    return this.getInfo() + `. The fuel type is ${this.fuelType}`;
  }
}

let myCar = new Car("BMW", "beat", 1998, "electric");
console.log(myCar.getCarInfo());
