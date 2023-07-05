"use strict";

const Product = function (name, desc, cost, stock) {
  this.name = name;
  this.desc = desc;
  this.cost = cost;
  this.stock = stock;
  let revenue = 0;
  this.buy = (qty) => {
    if (qty <= this.stock) {
      this.stock = this.stock - qty;
      let costOfOrder = qty * this.cost;
      revenue = revenue + costOfOrder;
      console.log(`${qty} of ${this.name} : $${costOfOrder}`);
    } else {
      console.log("Out of stock");
    }
  };
  this.getStock = () => {
    console.log(`Available qty ${this.name}:${this.stock}`);
  };
  this.salesReport = () => {
    console.log(`Total sales for ${this.name} : $${revenue}`);
  };
};

const vPhone = new Product("vPhone", "fastest phone", 500, 40);

const tabbook = new Product("vtablet", "thinnest lappy", 600, 25);
vPhone.buy(5);
