function main_click() {
    const totalAmountId = document.getElementById("total_amount");

    let amount = Number(totalAmountId.value);
    console.log(amount);
   
    if (isNaN(amount)) {
        amount = 0;
    }
    console.log(amount);

    let result = amount + 1;

    totalAmountId.textContent = result;
}