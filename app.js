console.log('worked');

const purchase = 12500;
let cashback;

const regularPercent = 0.01;
const increasedPercent = 0.05;
const specialPercent = 0.3;

if (purchase < 1000){
    cashback = purchase*regularPercent;
} else if (purchase < 10000) {
    cashback = purchase*increasedPercent;
} else {
    cashback = purchase*specialPercent;
}

if (cashback >= 3000) {
    console.log ("Your cashback: ", 3000);
} else {
    console.log(cashback);
}