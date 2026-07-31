let amount = Number(prompt("enter amount"))
let payableAmount = null
if(amount >= 5000 && amount < 7000) {
    let dis = (amount * 5) / 100
    console.log("you get 5% Discount");
    payableAmount = amount - dis
}else if(amount >= 7000 && amount < 9000) {
    let dis = (amount * 10) / 100
    console.log("you get 10% Discount");
    payableAmount = amount - dis
}else if (amount >= 9000) {
    let dis = (amount * 20) / 100
    console.log("you get 20% Discount");
    payableAmount = amount - dis
}else {
    console.log("you get 0% Discount")
}

console.log(payableAmount);
