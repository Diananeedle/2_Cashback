console.log('worked');

let cashback;

const regularPercent = 0.01;
const increasedPercent = 0.05;
const specialPercent = 0.3;

const regularAmount = 100;
const increasedAmount = 1000;
const specialAmount = 9000;

const maxCashback = 3000;

cashback = regularPercent*regularAmount + increasedPercent*increasedAmount + specialPercent*specialAmount;

if (cashback >= maxCashback) {
    console.log ("Your cashback: ", maxCashback);
} else {
    console.log(cashback);
}