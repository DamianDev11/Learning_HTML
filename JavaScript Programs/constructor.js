"use strict";

function User(name, email, isAdmin, age) {
  this.name = name;
  this.email = email;
  this.isAdmin = isAdmin;
  this.age = age;
  this.canDrive = () => (this.age >= 18 ? "yes" : "no");
  this.access = () => (isAdmin ? "access granted" : "access denied");
}

const dam = new User("dam1", "dam@gmailcom", true, 24);
const bishu = new User("bishu", "bish@gmail.com", false, 7);

console.log(dam.canDrive());
console.log(bishu.canDrive());
console.log(dam.access());
console.log(bishu.access());
