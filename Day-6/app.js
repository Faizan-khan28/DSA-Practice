const promt = require("prompt-sync")()

// let n = promt("enter a number: ")
// console.log(n);

// for (let i = 1; i<=5; i++) {

//     for(let j = 1; j<=5; j++) {
//          process.stdout.write("* ")
//     }
//     console.log();
// }

// right angle tringle
// for(let i = 1; i <= 5; i++) {
//     for(let j = 1; j <= i; j++) {
//         process.stdout.write("* ")
//     }
//     console.log()
// }

//reverse right angle tringle
// for(let i = 5; i >= 1; i--) {
//     for(let j = 1; j <= i; j++) {
//         process.stdout.write("* ")
//     }
//     console.log()
// }

// print numbers in tringle

for(let i=1; i<=5; i++) {
    for(let j=1; j<=i; j++) {
       process.stdout.write(j + "")
    }
    console.log()
}