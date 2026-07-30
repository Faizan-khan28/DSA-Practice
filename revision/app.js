let a = Number(prompt("enter a"))
let b = Number(prompt("enter b"))
let c = Number(prompt("enter c"))

if(a>b && a<c) {
    console.log("a is gretest" + a);
}else if (b>c && b>a) {
    console.log("b is gretest" + b);
}else {
   console.log("c is gretest" + c);
}

console.log(a , "" ,b, "", c);