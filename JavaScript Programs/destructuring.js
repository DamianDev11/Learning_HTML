"use strict";

const user = ["dam", 24, "SWE-1"];

const [name, , role, ...rest] = user;

console.log(name, role);
