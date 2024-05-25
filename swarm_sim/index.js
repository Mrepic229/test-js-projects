var number_of_meat = 35;

var number_of_drones = 0; 
var drone_multiplyer = 1;
var drone_price = 10;


function update() {
    setInterval(() => {
        update_drone()
    }, 1000);
}

function update_drone(){
    const number_of_meat_id = document.getElementById("number_of_meat");
    const number_of_drones_id = document.getElementById("number_of_drones");

    number_of_meat += number_of_drones * drone_multiplyer;

    number_of_meat_id.textContent = number_of_meat
}

function buy_drone() {
    const number_of_meat_id = document.getElementById("number_of_meat");
    const number_of_drones_id = document.getElementById("number_of_drones");

    if (number_of_meat - drone_price < 0) {
        return;
    }

    number_of_drones += 1;
    number_of_meat += -drone_price;

    number_of_drones_id.textContent = number_of_drones;
    number_of_meat_id.textContent = number_of_meat;
}

update()
