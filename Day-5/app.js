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

// let userInput;
// do {
//     let num1 = Number(prompt("enter a number 1"))
//     let num2 = Number(prompt("enter a number 2"))
//     let calu = prompt("enter operatot +,-,*,/")
//     switch (calu) {
//         case "+":
//             console.log("result :"+ (num1 + num2));
//             break;
//         case "-":
//             console.log("result :"+ (num1 + num2));
//             break;
//         case "*":
//             console.log("result :"+ (num1 + num2));
//             break;
//         case "/":
//             if (num2 !== 0) {
//                 console.log("result :"+(num1 * num2));
//             } else {
//                 console.log("enter a vaild number");
//             }
//             break;
//         default:
//             console.log("enter valid operatoor");
//     }
//     userInput = prompt("you want to continue calculation yes/no").toLowerCase()
// } while (userInput === "yes");

let menu;

do {
  menu = Number(
    prompt(
      "Restaurant Menu\n\n1. Starter\n2. Main Course\n3. Dessert\n4. Exit",
    ),
  );

  switch (menu) {
    case 1:
      let starterChoice;

      do {
        starterChoice = Number(
          prompt(
            "Starter Menu\n\n1. Chicken Fry\n2. Chicken Tikka\n3. Chicken Roasted\n4. Back",
          ),
        );

        switch (starterChoice) {
          case 1:
            console.log("Chicken Fry Selected");
            break;

          case 2:
            console.log("Chicken Tikka Selected");
            break;

          case 3:
            console.log("Chicken Roasted Selected");
            break;

          case 4:
            console.log("Going Back...");
            break;

          default:
            console.log("Invalid Choice");
        }
      } while (starterChoice !== 4);

      break;

    case 2:
      let mainChoice;

      do {
        mainChoice = Number(
          prompt(
            "Main Course Menu\n\n1. Chicken Barra\n2. Chicken Kali Mirch\n3. Butter Chicken\n4. Back",
          ),
        );

        switch (mainChoice) {
          case 1:
            console.log("Chicken Barra Selected");
            break;

          case 2:
            console.log("Chicken Kali Mirch Selected");
            break;

          case 3:
            console.log("Butter Chicken Selected");
            break;

          case 4:
            console.log("Going Back...");
            break;

          default:
            console.log("Invalid Choice");
        }
      } while (mainChoice !== 4);

      break;

    case 3:
      let dessertChoice;

      do {
        dessertChoice = Number(
          prompt(
            "Dessert Menu\n\n1. Ice Cream\n2. Gulab Jamun\n3. Kulfi\n4. Back",
          ),
        );

        switch (dessertChoice) {
          case 1:
            console.log("Ice Cream Selected");
            break;

          case 2:
            console.log("Gulab Jamun Selected");
            break;

          case 3:
            console.log("Kulfi Selected");
            break;

          case 4:
            console.log("Going Back...");
            break;

          default:
            console.log("Invalid Choice");
        }
      } while (dessertChoice !== 4);

      break;

    case 4:
      console.log("Thank You! Visit Again.");
      break;

    default:
      console.log("Invalid Menu Choice");
  }
} while (menu !== 4);
