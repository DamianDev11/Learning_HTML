class Courier {
  constructor(weight, destination, source, bookBuy) {
    this.weight = weight;
    this.destination = destination;
    this.source = source;
    this.bookBuy = bookBuy;
  }

  bookCourier() {
    this.price = this.weight > 20 ? 200 : 100;
    return `Courier booked! The price is ${this.price}`;
  }

  showCourier() {
    return `The courier  is headed to ${this.destination}. It was booled by ${this.bookBuy} at ${this.source} and weighs a total of ${this.weight}`;
  }
}

do {
  let myCourier = new Courier();
  console.log("Choose onc : 1. Book Courier 2. See Details 3.Quit ");
  choice = parseInt(prompt("Enter your choice"));
  switch (choice) {
    case 1:
      console.log(myCourier.bookCourier);
      break;
    case 2:
      console.log(myCourier.showCourier);
      break;
    case 3:
      console.log("Thank you for participating");
      break;
    default:
      console.log("Enter the valid input");
  }
} while (choice > 0 && choice <= 3);
