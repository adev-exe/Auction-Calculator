const FEE_GATE = 59
let bid_price = document.getElementById("userPrice").value;
let final_price = 0
let sales_tax = 0.03
let fee_payment_method = 0
let fee_internet_bid = 0
let total_fees = 0

const BID_FEES = [
  25, 25,
  45, 45,
  80, 80,
  120, 120,
  120, 120,
  120, 120,
  160, 160,
  160, 160,
  185, 185,
  185, 185,
  210, 210,
  230, 230,
  250, 250,
  275, 275,
  325, 325,
  350, 350,
  365, 365,
  380, 380,
  390, 390,
  410, 410,
  420, 420,
  440, 440,
  470, 470,
  480, 480,
  500, 500,
  600, 600,
  650, 650,
  675, 675,
  700, 700
];

const PRICES = [
  0.01, 49.99,
  50, 99.99,
  100, 199.99,
  200, 299.99,
  300, 349.0,
  350, 399.99,
  400, 449.99,
  459, 499.99,
  500, 549.99,
  550, 599.99,
  600, 699.99,
  700, 799.99,
  800, 899.99,
  900, 999.99,
  1000, 1199.99,
  1200, 1299.99,
  1300, 1399.99,
  1400, 1499.99,
  1500, 1599.99,
  1600, 1699.99,
  1700, 1799.99,
  1800, 1999.99,
  2000, 2399.99,
  2400, 2499.99,
  2500, 2999.99,
  3000, 3499.99,
  3500, 3999.99,
  4000, 4499.99,
  4500, 4999.99
];


function get_payment_fee(bid_price) {
  for (var i = 0; i < BID_FEES.length; i++) {
    if (bid_price >= PRICES[i] && bid_price < PRICES[i + 1]) {
      fee_payment_method = BID_FEES[i];
    }
  }

  if (bid_price >= 5000) {
    fee_payment_method = bid_price * .15
  }
}

function calculate_final_price(bid_price) {
  get_payment_fee(bid_price)
  // console.log(fee_payment_method)
  // console.log(bid_price)
  total_fees = FEE_GATE + fee_payment_method + fee_internet_bid + bid_price;
  // console.log(total_fees)
  final_price = (total_fees * .03) + total_fees;
  final_price = (Math.round(final_price * 100) / 100).toFixed(2);
  return final_price;
}

function print(){

  alert(bid_price + " " + final_price)
}

document.getElementById("calcBtn").addEventListener("click", function(){
   bid_price = document.getElementById("userPrice").value;
  final_price = calculate_final_price(bid_price)
   print()
});
