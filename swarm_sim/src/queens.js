import { drones, queens } from "./index.js";

export function update_queens() {
    const number_of_drones_id = document.getElementById("number_of_drones");
    drones.amount += queens.amount * queens.multiplyer;
    number_of_drones_id.textContent = drones.amount;
}

export function buy_queens() {
    const number_of_drones_id = document.getElementById("number_of_drones");
    const number_of_queens_id = document.getElementById("number_of_queens");

    if (drones.amount - queens.price < 0) {
        return;
    }

    queens.amount += 1;
    drones.amount += -queens.price;

    number_of_queens_id.textContent = queens.amount;
    number_of_drones_id.textContent = drones.amount;
}

export function buy_max_queens() {
    let possible_buys = Math.floor((drones.amount / queens.price));
    for (let i = 0; i < possible_buys; i++) {
        buy_queens();
    }
}
