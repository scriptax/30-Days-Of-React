const arr1 = []; // Empty array

const cars = ['Ford', 'BMW', 'VW', 'KIA', 'Toyota', 'Tesla', 'Benz']; 

let carsLength = cars.length;

let firstItem = cars[0];
let middleItem = cars[Math.ceil(carsLength / 2)];
let lastItem = cars[carsLength - 1];

const mixedDataTypes = [true, 35, null, undefined, "Food", false];
let mixedDataTypesLength = mixedDataTypes.length;

const itCompanies  = [
	'Facebook', 
	'Google', 
	'Microsoft', 
	'Apple', 
	'IBM', 
	'Oracle', 
	'Amazon'
];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]); // First company
console.log(Math.ceil(itCompanies.length / 2)); // Second company
console,log(itCompanies[itCompanies.length - 1]);
