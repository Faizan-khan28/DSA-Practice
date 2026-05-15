// let n = 5;
// let i = 1;

// while (i<=n) {
//     console.log("hello World");
//     i++
// }

// let n = Number(prompt("enter Number"))
// let sum = 0;

// while(n>0) {
//     rem = n % 10
//     sum = sum + rem
//     n = Math.floor(n / 10)
// }

// console.log(sum);

// let n = Number(prompt("enter Number"))
// let rev = 0;

// while(n>0) {
//   let rem = n % 10
//   rev = rev * 10 + rem
//   n = Math.floor(n / 10)
// }

// console.log(rev)

let n = Number(prompt("enter Number"))
let copy = n;
let sq = n * n;
let count = 0;
while(n>0) {
  count ++;
  n = Math.floor(n/10)
}

if (sq%Math.pow(10,count) == copy) {
    console.log("Automorphic number");
} else {
     console.log("not Automorphic number");
}