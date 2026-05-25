// let i = 1
// do {
//     console.log("hello World");
//     i++
// }while(i<=5);

// question Repeat Hello
// let userInput;
// do {
//  console.log("hello");
//  userInput= prompt("continue Hello yes / no").toLowerCase()
// }while(userInput === "yes")

//  question quess number
let com = Math.floor(Math.random() * 100) + 1;
let userInput;
do {
 userInput = Number(prompt("enter your number b/w 1 to 100"))
 if(userInput == NaN || userInput<0 || userInput>100) {
    console.log("enter a valid number")
    continue;
 }
 if(userInput > com) {
   console.log("Too High");
 }else if (userInput < com) {
   console.log("too Low");
 }else {
   console.log("congrates num is matched" + com );
 }
}while(userInput !== com)