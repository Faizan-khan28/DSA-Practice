const promt = require("prompt-sync")();

// for (let i = 5; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {
//         if(i == j || i + j) {
//            process.stdout.write("* ")
//         }
//     }
//     console.log()
// }

// for (let i = 1; i <= 5; i++) {
//     for (let k = 1; k <=5 - i; k++) {
//         process.stdout.write(" ")
//     }
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("*")
//     }
//     console.log()

// }

// for (let i = 1; i <= 5; i++) {

//   for (let j = 1; j <= 5; j++) {
//     if (i == j || i + j == 5 + 1) {
//       process.stdout.write("*");
//     }else {
//         process.stdout.write(" ");
//     }
//   }
//   console.log();
// }


// for (let i = 1; i <= 5; i++) {

//   for (let k = 1; k <= 5 -i; k++) {
//     process.stdout.write(" ");
//   }

//   for (let j = 1; j <=i ; j++) {
//     process.stdout.write("* ");
//   }

//   console.log()
  
// }

// V pattern

// let n = 5

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <=(n*2)-1; j++) {
//         if(i == j || i + j == 2*n  ) {
//             process.stdout.write("* ");
//         }else {
//             process.stdout.write(" ");
//         }
        
//     }
//     console.log()
    
// }

// let fact = 5;
// let res = 1
// for(let i = 1; i<=fact ; i++) {
//     res = res * i

// }

// console.log(res)

// let n = 5;

// for (let i = 1; i <= 5; i++) {
//     for (let k = 1; k <= n-i; k++) {
//         process.stdout.write(" ") 
//     }
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("*") 
//     }
//     console.log()
// }

// let arr = [30,20,10,40,50,80,15]
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > max) {
//         max = arr[i]
//     }
    
// }

// console.log(max)


// let arr = [30,20,35,40,50,80,90]
// let max = Math.max(arr[0],arr[1])
// let sMax = Math.min(arr[0],arr[1])
// for (let i = 2; i < arr.length; i++) {
//     if(arr[i] > max) {
//         sMax = max
//         max = arr[i]
//     }else if(arr[i] > sMax) {
//         sMax = arr[i]
//     }
    
// }

// console.log(max)
// console.log(sMax)

// let arr = [10,20,30,40,50]
// let temp = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] 
// }

// console.log(arr)


// let arr = [1,0,1,0,1,0]
// let j = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]==0) {
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         j++
//     }
// }

// console.log(arr)

let arr = [10,20,30,40,50]
let temp = arr[0]
for (let i = 0; i < arr.length-1; i++) {
    arr[i] = arr[i + 1]
}
arr[arr.length-1] = temp

console.log(arr)