
// print dynamic array
let size = Number(prompt("enter size"))
let arr = new Array(size)
for(let i =0; i< arr.length; i++) {
    arr[i] = prompt("enter element")
}

console.log(arr)