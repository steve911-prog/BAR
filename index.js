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

function renewBucks() {
  document.getElementById("yourMoney").textContent = `${budget}$`;
  console.log("renwBucks")
};

function request(drink) {
  if (budget - prices[`${drink}`] <= 0) {
    console.log("you have no money...");
    document.getElementById("yourMoney").textContent = "Sorry, no money...";
    budget = 199;
    setTimeout(renewBucks(), 2000);
    setTimeout(alert("You got bonus 199$. Enjoy them!"), 2000);
    return;
  }

  // console.log("function is done!");
  budget = budget - prices[`${drink}`];
  console.log(budget)

  renewBucks();

  let cartNum = parseFloat(document.getElementById("cart").textContent);
  console.log(cartNum)
  // cartNum = cartNum + 1;
  cartNum++
  
  // console.log(cartNum)
  document.getElementById("cart").textContent = `${cartNum}`;


}

renewBucks();

// let drinks = {
//   coke: ["img/coke.jpg", "Coca-Cola, 2L", 20, "cokePrice"],
// };

// for(const elem of drinks){
  
// }




// renewDrink(20, "cokePrice");
// renewDrink(19, "fantaPrice");
// renewDrink(15, "spritePrice");
// renewDrink(16, "mezzoPrice");
// renewDrink(20, "pepsiPrice");
// renewDrink(59, "xsetPrice");
// renewDrink(9, "mojitoPrice");
// renewDrink(16, "fruitjuicesPrice");
// renewDrink(9, "lemonadePrice");




// buyCoke.onclick = request("coke");
// buyFanta.onclick = request("coke");
// buyWater.onclick = request("coke");

// document.getElementsByClassName("coke").addEventListener("click", request("coke"));
// buyFanta.addEventListener("click", request("fanta"));
// buyWater.addEventListener("click", request("water"));
