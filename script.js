// fetch("goods.json")
//     .then((response)=>{
//         response.json();
//     })
//     .then((data)=>{
//         process(data);
//     })
//     .catch((error)=>{
//         console.log("json error: ", error);
//     })
let budget = 199; //Client's money
let yours = document.getElementById("yourMoney");



let data = {
  'coke': ["img/coke.jpg", "Coca-Cola, 2L", 20, "cokePrice"],
  'fanta': ["img/fanta.png", "Fanta, 0.5L", 19, "fantaPrice"],
  'sprite': ["img/sprite.jfif", "Sprite Zero, 2L", 15, "spritePrice"],
  'mezzo': ["img/mezzo.png", "Mezzo mix, 0.5L", 16, "mezzoPrice"],
  'pepsi': ["img/pepsi.png", "Pepsi Light, 0.5L", 20, "pepsiPrice"],
  'xset': ["img/3xset.webp", "3X SET, 5.5L", 59, "xsetPrice"],
  'mojito': ["img/mojito.jpg", "Mojito, 0.3L", 9, "mojitoPrice"],
  'fruitjuices': ["img/fruitjuices.avif","2 Fruit Juices, 1L",16,"fruitjuicesPrice",],
  'lemonade': ["img/lemonade.jpg", "Strong Lemonade, 0.3L", 9, "lemonadePrice"],
};

function process(_data_){
        dataNamesArray = Object.keys(_data_);
        console.log(dataNamesArray);
        budget = 199;
        renewBucks();
        const store = document.getElementById('store') 
        
        for (const i in dataNamesArray) {
            let item = document.createElement('div')
            item.className = 'item'
            console.log(dataNamesArray[i])
            let id = dataNamesArray[i]
            item.innerHTML = `<div class="img"><img src="${data[`${id}`][0]}"></div>
                                <div class="title">${data[`${id}`][1]}</div>
                                <div class="price ${data[`${id}`][3]}">${data[`${id}`][2]}$</div>
                                <div class="btn"><a href="#store" class = "buy" onclick="request('${dataNamesArray[i]}')">BUY</a></div>`;
            store.appendChild(item)

            
        }

};

function renewBucks() {
  document.getElementById("yourMoney").textContent = `${budget}$`;
  console.log("renwBucks")
};

process(data)

// //////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////



document.getElementById("cart").textContent = "0";



function request(drink) {
  if (budget - data[`${drink}`][2] <= 0) {
    console.log("you have no money...");
    document.getElementById("yourMoney").textContent = "Sorry, no money...";
    budget = 199;
    setTimeout(renewBucks(), 2000);
    setTimeout(alert("You got bonus 199$. Enjoy them!"), 2000);
    return;
  }

  // console.log("function is done!");
  budget = budget - prices[`${drink}`];
  console.log(budget);

  renewBucks();

  let cartNum = parseFloat(document.getElementById("cart").textContent);
  console.log(cartNum);
  // cartNum = cartNum + 1;
  cartNum++;

  // console.log(cartNum)
  document.getElementById("cart").textContent = `${cartNum}`;
}

renewBucks();

alert("You got bonus 199$. Enjoy them!");