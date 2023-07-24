const nums1 = [1, 2, 3, 4, 5];
const squaredNums = nums1.map((num) => num * num);
console.log(squaredNums);

const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNums = nums2.filter((num) => num % 2 === 0);
console.log(filteredNums);

const nums3 = [1, 2, 3, 4, 5, 6];
const reducedNums = nums3.reduce((accumulator, num) => accumulator + num, 0);
console.log(reducedNums);

const nums4 = ["apple", "mango", "banana"];
nums4.forEach((elem) => console.log(elem));
