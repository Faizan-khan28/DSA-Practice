// mirror right angle tringle
// for(let i = 1; i <= 5; i++) {
//     for(let j = 1; j <= 5-i; j++) {
//         process.stdout.write("  ")
//     }
//      for(let j = 1; j <= i; j++) {
//         process.stdout.write("* ")
//     }
//     console.log();
// }

// print tringle
// for(let i = 1; i <= 5; i++) {
//     for(let j = 1; j <= 5-i; j++) {
//         process.stdout.write(" ")
//     }
//      for(let j = 1; j <= i; j++) {
//         process.stdout.write("* ")
//     }
//     console.log();
// }

for(let i = 1; i<=5; i++) {
    for(let j = 1; j<=5; j++) {
        if(i == j || i+j == 5+1) {
            process.stdout.write("* ")
        }else {
            process.stdout.write(" ")
        }
    }
    console.log();
}