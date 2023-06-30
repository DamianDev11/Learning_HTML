"use strict";

const sensorData = [
  {
    id: 1,
    date: "20-12-2021",
    maxTemp: 34,
    minTemp: 25,
  },
  {
    id: 2,
    date: "22-12-2021",
    maxTemp: 31,
    minTemp: 19,
  },
  {
    id: 3,
    date: "24-12-2021",
    maxTemp: 32,
    minTemp: 19.5,
  },
  {
    id: 4,
    date: "26-12-2021",
    maxTemp: 30,
    minTemp: 18.5,
  },
];

for (const data of sensorData.reverse()) {
  console.log(`${data.date} | MAX: ${data.maxTemp},MIN: ${data.minTemp}`);
}
