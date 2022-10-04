"Use strict";

// ForEach
// 1
const array = [12, 34, 43, 56];

array.forEach((value, index ,arr) => {
    console.log(`${index} : ${value}`);
    console.log(arr);
})

// 2
const arr = [29, "Armenia", "USA", "Georgia", 32 , 32];

arr.forEach((value) => {
    if((typeof(value)) === ("string")){
        console.log(`${value} type = string`);
    }else if(typeof(value)  === ("number")){
        console.log(`${value} type = number`);
    }
});

// Filter
// 1
const num = [12, 43, 54, 76, 87, 43];

const filterNum = num.filter((value) =>{
    return value >= 54;
})

console.log(filterNum);

// 2

const country = ["Armenia", "Russia", "USA", "Argentina", "France"]

const filterCountry = country.filter((val) => {
    return val.length > 6
})

console.log(filterCountry);


// 3

const filterValue = ["Armen", 64, "Ruben", "Mari", 78 , 21, 34]

const filterStr = filterValue.filter((val) => {
    return typeof(val) === "string";
})

const filterNumber = filterValue.filter((val) => {
    return typeof(val) === "number";
})

console.log(filterStr);
console.log(filterNumber);

// Map
const oldNumbers = [ 40, 51, 53, 2, 354, 45, 540];
const newNumbers = numbers.map((val) => val);

const oldNames = ["John", "Kevin", "Jack", "Steven"];
const newNames = names.map((val) => val);

console.log(newNumbers);
console.log(newNames);

// Reduce
const names = ["John", "Kevin", "Jack", "John", "Steven", "Kevin", ];

const countedNames = names.reduce((all, name) => {
  const currCount = all[name] ?? 0;
  return {
    ...all,
    [name]: currCount + 1,
  };
}, {});

console.log(countedNames);

// Some & Eery

const someArr = [45, 65, "Armenia", 12,];
const some = someArr.some((val) => typeof(val) === "string");
console.log(some);

const every = someArr.every((val) => typeof(val) === "number");
console.log(every);


//Find

const numbers = [64, 21, 32, 54, 765, 43, 32, 657, 32];
const findNumbers = numbers.find((item) => item <= 657 );
const findLNums = numbers.findLast((item) => item <= 64 );
const findNumsIndex = numbers.findIndex((item) => item === 32);

console.log(findNumbers);
console.log(findLNums);
console.log(findNumsIndex);


// Fill
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1.fill((1)));