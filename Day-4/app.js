// let n = 5;
// let i = 1;

// while (i<=n) {
//     console.log("hello World");
//     i++
// }

let n = Number(prompt("enter Number"))
let sum = 0;

while(n>0) {
    rem = n % 10
    sum = sum + rem
    n = Math.floor(n / 10)
}

console.log(sum);
