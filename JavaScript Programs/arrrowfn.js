const userName = (name, age, isAdmin) => ({
  name,
  age,
  isAdmin,
});

let dam = userName("dam", 24, true);
console.log(dam);
