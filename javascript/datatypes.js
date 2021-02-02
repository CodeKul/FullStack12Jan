//Number , String , Boolean, Array,Objects

var number = 100;

console.log(typeof number);

//+ - concatenation operator
var str = "Hello" + number;
//var str1 = 'Hello World';
var str1 = `Hello World ${number} and Hello everyone`;
console.log(str, str1);

//Boolean -true,false 1/0
let isOn = false;
if (isOn) {
  console.log("The light is on");
} else {
  console.log("The light is off");
}

//Array
let arr = [100, 200, 200, 400, 500, "ABC", 99.99];
console.log(arr[5]);

let seasons = ["Summer", "Winter", "Rainy"];
console.log(seasons[0]);

//Object - key-value pairs
let emp = {
  firstName: "ABC",
  lastName: "XYZ",
  city: "Pune",
  salary: 40000,
};
console.log(emp.city);
//Array of objects
let employees = [
  {
    firstName: "ABC",
    lastName: "XYZ",
    city: "Pune",
    salary: 40000,
  },
  {
    firstName: "XYZ",
    lastName: "XYZ",
    city: "Mumbai",
    salary: 40000,
  },
  {
    firstName: "PQR",
    lastName: "XYZ",
    city: "Pune",
    salary: 40000,
  },
];

console.log(employees[1].city);
