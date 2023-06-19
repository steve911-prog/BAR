// import goods from "./goods.json" assert { type: "json" };
// try {
//   console.log(goods["coke"]);
// } catch (error) {
//   console.log("error json");
// }


// let goods  = require("./goods.json")
// console.log(goods)

let budget = 199; //Client's money
let yours = document.getElementById("yourMoney");

let cokePrice = document.getElementsByClassName("cokePrice").textContent;
let fantaPrice = document.getElementsByClassName("fantaPrice").textContent;
let waterPrice = document.getElementsByClassName("waterPrice").textContent;

let buyCoke = document.getElementsByClassName("buyCoke");
let buyFanta = document.getElementsByClassName("buyFanta");
let buyWater = document.getElementsByClassName("buyWater");

document.getElementById("cart").textContent = "0";

let prices = {
  coke: 20,
  fanta: 19,
  sprite: 15,
  mezzo: 16,
  pepsi: 20,
  xset: 59,
  mojito: 9,
  fruitjuices: 16,
  lemonade: 9,
};

alert("You got bonus 199$. Enjoy them!");

let renewBucks = () => {
  document.getElementById("yourMoney").textContent = `${budget}$`;
  // console.log("renwBucks")
};

function renewDrink(num, id) {
  document.querySelector(`.${id}`).textContent = `${num}$`;
  // console.log("renwDrink!")
  // console.log(id)
  // console.log(document.getElementsByClassName(`${id}`).textContent);
}

function request(drink) {
  if (budget <= 0) {
    console.log("you have no money...");
    document.getElementById("yourMoney").textContent = "Sorry, no money...";
    budget = 199;
    setTimeout(renewBucks(), 2000);
    setTimeout(alert("You got bonus 199$. Enjoy them!"), 2000);
    return;
  }

  console.log("function is done!");
  budget = budget - prices[`${drink}`];

  let cartNum = parseInt(document.getElementById("cart").textContent);
  cartNum = cartNum + 1;
  // console.log(cartNum)
  document.getElementById("cart").textContent = `${cartNum}`;

  console.log(budget);
  renewBucks();
}

renewBucks();

renewDrink(20, "cokePrice");
renewDrink(19, "fantaPrice");
renewDrink(15, "spritePrice");
renewDrink(16, "mezzoPrice");
renewDrink(20, "pepsiPrice");
renewDrink(59, "xsetPrice");
renewDrink(9, "mojitoPrice");
renewDrink(16, "fruitjuicesPrice");
renewDrink(9, "lemonadePrice");

// buyCoke.onclick = request("coke");
// buyFanta.onclick = request("coke");
// buyWater.onclick = request("coke");

// document.getElementsByClassName("coke").addEventListener("click", request("coke"));
// buyFanta.addEventListener("click", request("fanta"));
// buyWater.addEventListener("click", request("water"));
