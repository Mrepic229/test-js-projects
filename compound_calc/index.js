function calculate() {
    const totalAmount = document.getElementById("total-amount")
    const firstAmount = document.getElementById("firstAmount")
    const interest = document.getElementById("interest")
    const yearsInput = document.getElementById("years")

    let principle = Number(firstAmount.value);
    let rate = Number(interest.value / 100);
    let years = Number(yearsInput.value);

    const result = principle * Math.pow(((1 + rate)/1),1* years)

    totalAmount.textContent = result.toLocaleString(undefined, 
        {style: "currency",
        currency: "USD"});
}