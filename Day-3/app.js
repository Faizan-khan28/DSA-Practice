// let n = Number(prompt("Enter a Number"))
// // n = 10
// for(let i = n; i>=1 ; i--) {
//     console.log(i)
// }

// let n = Number(prompt("enter a number"))

// for(let i = 1; i<=10; i++) {
//     console.log(n * i);
// }

// let n = Number(prompt("enter a number"))
// let sum = 0;
// for(let i = 1; i<=n; i++) {
//     sum = sum + i
// }
// console.log(sum);

// let n = Number(prompt("enter a number"))
// let factorial = 1;
// for(let i = 1; i<=n; i++) {
//     factorial = factorial * i
// }
// console.log(factorial);

let n = Number(prompt("enter a number"))
let odd = 0;
let even = 0;
for(let i = 1; i<=n; i++) {
    if(i%2==0) {
        even = even + i
    }else {
        odd = odd + i
    }
}

console.log(odd)
console.log(even)