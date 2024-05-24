var money = 1000
var amount_of_htmls = 0
var price = 1

function main_button_click() {
    const totalAmountId = document.getElementById("total_amount");
    const moneyAmountId = document.getElementById("money_amount");

    money += -price
    amount_of_htmls += 1
    console.log(money)

    totalAmountId.textContent = amount_of_htmls;
    moneyAmountId.textContent = money.toLocaleString(undefined, 
        {style: "currency",
        currency: "USD"});
}

function change_price(amount) {
    const priceAmoundId = document.getElementById("price_amount");
    const mainButtonPriceId = document.getElementById("main_button_price");

    if (price + amount < 0) {
        price = 0;
    } else { 
        price += amount; 
    }

    let result = price;

    priceAmoundId.textContent = result.toLocaleString(undefined, 
        {style: "currency",
        currency: "USD"});

    mainButtonPriceId.textContent = price.toLocaleString(undefined, 
        {style: "currency",
        currency: "USD"});
}

function update() {
    setInterval(() => {
        console.log(price);
    }, 1000); // 1000 milliseconds = 1 second
}


