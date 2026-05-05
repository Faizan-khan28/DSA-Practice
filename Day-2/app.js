// math ceil
// console.log(Math.ceil(10.4))
// ans is 11 ceil means top
// math floor
// console.log(Math.floor(10.8));
// ans is 10 floor means bottom
// math round
// console.log(Math.round(10.4));
// its works btwn ceil and floor if pass value 10.5 its behave like ceil and if we pass value 10.4 its behave like floor
// math abs
// console.log(Math.abs(-8));
// when we gave negative value its gave us positive value
// math trunc
// console.log(Math.trunc(10.48483838383));
// its converts decimal value into a normal integar value like 10 
// math power
// console.log(Math.pow(5,2))
// its returns power of a number like 25 
// math sqrt 
// console.log(Math.sqrt(36));
// its return sqare root value like 6
// math cbrt
// console.log(Math.cbrt(8));
// its return qube root like 2
// math max
// console.log(Math.max(12,34,56,98));
// it return max value like 98
// console.log(Math.min(12,34,56,98));
// it return min value like 12
// math random
// console.log(Math.random());
// its returns random values from 1 to 0 
// to fixed
// let a = 10.43939
// console.log(a.toFixed(2));
// its returns fixed value that we gave like 10.43

// compound interest 
// let p = Number(prompt("enter your Principle"))
// let r = Number(prompt("enter your rate"))
// let t = Number(prompt("enter your time"))

// // Amount formula is A = P * (1 + r/100)^t
// // Compound Interst Formula CP = A - P

// console.log(p*Math.pow(1 + r/100,t) - p);

// Genrate OTP
// let phNum = Number(prompt("enter Mobile Number"))
// let OTP = Math.floor(Math.random() * 9000 + 1000) 
// console.log(OTP)

// area of tringle by herons formula
// let a = Number(prompt("enter first number"))
// let b = Number(prompt("enter second number"))
// let c = Number(prompt("enter third number"))

// if(a+b <=c || a+c <=b || a+c <= a) {
//     console.log("not possible")
// }else {
//     let s = (a + b + c)/2
//     console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)));
// }

// Circumfrance of Circle
// let r = Number(prompt("enter your Number"))
// console.log(2*Math.PI * r);
