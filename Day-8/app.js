
// print dynamic array
// let size = Number(prompt("enter size"))
// let arr = new Array(size)
// for(let i =0; i< arr.length; i++) {
//     arr[i] = prompt("enter element")
// }

// console.log(arr)

// print sum of array 
// let size = Number(prompt("enter size"))
// let arr = new Array(size)
// let sum = 0;
// for(let i =0; i< arr.length; i++) {
//     arr[i] = Number(prompt("enter element"))
//     sum = sum + arr[i];
// }

// console.log("sum =" + sum)

// find max number in an array
let arr = [10,5,20,8,30]
let maxNum = arr[0];
for(let i = 1; i < arr.length; i++) {
    if(arr[i] > maxNum) {
        maxNum = arr[i]
    }
}

console.log(maxNum);