
// print dynamic array
// let size = Number(prompt("enter size"))
// let arr = new Array(size)
// for(let i =0; i< arr.length; i++) {
//     arr[i] = prompt("enter element")
// }

// console.log(arr)

// print sum of array 
let size = Number(prompt("enter size"))
let arr = new Array(size)
let sum = 0;
for(let i =0; i< arr.length; i++) {
    arr[i] = Number(prompt("enter element"))
    sum = sum + arr[i];
}

console.log("sum =" + sum)