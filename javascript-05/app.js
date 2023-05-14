// arrays
// let months = ["january, february, march, april"];
// months[4] = "may"  //not recommended

// let shouldIStore = prompt("array me vale rakhun?")
// if (shouldIStore === "yes") {
//     months.push("May");
// }  

//let months = ["january", "february", "march", "april"];

    // months.shift(); // removes 1 index
    // months.unshift("jan") //add value on 1 index
    // months.pop() // removes last index
    // .length tells the quantity of values
// console.log(months.length);

// months.splice(2, 1, "june") remove or replace index
// months.slice() provide a new copy of an array
// let newArray = months.slice(1, 3)
// console.log(newArray)
// console.log(months);


//forEach //loops through array values
// let my = ["apple", "mango", "banana"  ]
// my.forEach(function(val, index, my) {
// console.log(index,val, my)
// })

// let arr = [1, 2, 3, 4, 5]
// let filteredArray = arr.filter(function(val) {  
//     if (val % 2 === 0){
//         return true;
//     }else {
//         return false
//     } 
// })
// console.log(filteredArray, arr)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10]
//  let filteredArray = arr.filter(function(val) {  
// return val % 2 === 0
//  })
// console.log(filteredArray, arr)

//let array.sort()
// let arr = [1, 4, 7, 9, 5, 0, 8]
// let sorrtedArr = arr.sort(function(a, b){
//     if (a>b) {  // (A<b)
//         return 1
//     }else {
//         return -1
//     }
// })
// console.log(sorrtedArr)

//reduce
// let arr = [1, 4, 7, 9, 5, 0, 8]
// let total = arr.reduce(function(preveValues, currValues) {
//     return preveValues + currValues;

// }, 0)
// console.log(total)

// let arr = ["happy", "birthday", "ameen"]
// let total = arr.reduce(function(preveValues, currValues) {
//     return preveValues + " " + currValues;

// }, "")
// console.log(total)

// let arr = ["happy", "birthday", "ameen"]
// let finalString = "";
// arr.forEach(function(val) {
//     finalString = finalString + " " + val;

// });
// console.log(finalString)