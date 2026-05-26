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
// let com = Math.floor(Math.random() * 100) + 1;
// console.log(com);

// let userInput;

// do {
//   userInput = Number(prompt("Enter your number b/w 1 to 100"));

//   if (isNaN(userInput) || userInput < 1 || userInput > 100) {
//     alert("Enter a valid number");
//     continue;
//   }

//   if (userInput > com) {
//     alert("Too High");
//   } 
//   else if (userInput < com) {
//     alert("Too Low");
//   } 
//   else {
//     alert("Congrats! Number is matched " + com);
//   }

// } while (userInput != com);

let userInput; 
do {
    let num1 = Number(prompt("enter a number 1"))
    let num2 = Number(prompt("enter a number 2"))
    let calu = prompt("enter operatot +,-,*,/") 
    switch (calu) {
        case "+":
            console.log("result :"+ (num1 + num2));
            break;
        case "-":
            console.log("result :"+ (num1 + num2));
            break;
        case "*":
            console.log("result :"+ (num1 + num2));
            break;
        case "/":
            if (num2 !== 0) {
                console.log("result :"+(num1 * num2));
            } else {
                console.log("enter a vaild number");
            }
            break;   
        default:
            console.log("enter valid operatoor");
    }
    userInput = prompt("you want to continue calculation yes/no").toLowerCase()
} while (userInput === "yes");