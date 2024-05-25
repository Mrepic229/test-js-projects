import { meat, drones, Unit } from './index.js';

export function update_drones() {
    const number_of_meat_id = document.getElementById("number_of_meat");
    meat.amount += drones.amount * drones.multiplyer;
    number_of_meat_id.textContent = meat.amount;
}

export function buy_drones() {
    const number_of_meat_id = document.getElementById("number_of_meat");
    const number_of_drones_id = document.getElementById("number_of_drones");

    if (meat.amount - drones.price < 0) {
        return;
    }

    drones.amount += 1;
    meat.amount += -drones.price;

    number_of_drones_id.textContent = drones.amount;
    number_of_meat_id.textContent = meat.amount;
}

export function buy_max_drones() {
    let possible_buys = Math.floor((meat.amount / drones.price));
    for (let i = 0; i < possible_buys; i++) {
        buy_drones();
    }
}
