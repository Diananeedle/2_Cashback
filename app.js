console.log('worked');

let cashback;

const regularPercent = 0.01;
const increasedPercent = 0.05;
const specialPercent = 0.3;

const regularAmount = 100;
const increasedAmount = 1000;
const specialAmount = 9000;

cashback = regularPercent*regularAmount + increasedPercent*increasedAmount + specialPercent*specialAmount;

if (cashback >= 3000) {
    console.log ("Your cashback: ", 3000);
} else {
    console.log(cashback);
}