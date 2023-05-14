//FUNCTION
//alert is a built in function

//greet = custom function
// function greet (studentsName) { //parameter
//     console.log("hello " + studentsName)
// }

// greet("wania") //argument
// greet("kulsoom") //argument
// greet("anaya") //argument


// function employee (fileNo) { 
//     return"Working on file no: " + fileNo
// }
// let data= employee(7)
// console.log(data)
// let data2= employee(8)
// console.log(data2)
// let data3= employee(6)
// console.log(data3)

// function add (num1, num2) {
//     return num1 + num2;
// }
// let my= add(5,7)
// console.log(my)
// document.write(my)

//RECURSION

// function writeData (data, times) {
//     document.write(data)
//     if (times > 0) {
//         writeData(data, times-1);
//     }
// }
// writeData("hello", 5)

// function factorial (num) {  
//     if (num > 1) {
//         return num * factorial(num -1)
//     }
//     return 1
// }
// console.log(factorial(7));
//5 * 4 * 3 * 2 * 1

//closures => scope
//parent scope => whole file
//child scope => inside function
//let abc = 7 //parent
function print (def) {
    // def// child scope/ local scope
   return function (ghi) { //anonymus function
   console.log(def + ghi)
}
}

let innerFunction = print(7)
let innerFunction2 = print(8)
innerFunction(7)
innerFunction2(5)

