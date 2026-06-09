
// find second max num in an array
// let arr = [28 ,6 ,74, 48, 84, 79];

// let max = Math.max(arr[0], arr[1])
// let sMax = Math.min(arr[0], arr[1])

// for(let i = 2; i <= arr.length; i++) {
//     if(arr[i] > max) {
//         sMax = max
//         max = arr[i]
//     }else if(arr[i] > sMax) {
//          sMax = arr[i]
//     }
// }

// console.log("second max number : " + sMax);

// reverse the array
let arr = [1,2,3,4,5,6]
let temp = new Array(arr.length)
let i = 0;
for(let j = arr.length-1; j>=0; j--) {
    temp[i] = arr[j]
    i++;
}

console.log(temp);