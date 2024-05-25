import { update_drones, buy_drones, buy_max_drones } from "./drones.js";
import { update_queens, buy_queens, buy_max_queens } from "./queens.js";

export class Unit {
    constructor(amount, multiplyer, price) {
        this.amount = amount;
        this.multiplyer = multiplyer;
        this.price = price;
    }
}

export var meat = new Unit(35, 1, 0);
export var drones = new Unit(0, 1, 10);
export var queens = new Unit(0, 1, 100);

function update() {
    setInterval(() => {
        update_drones();
        update_queens();

    }, 1000);
}


window.buy_drones = buy_drones;
window.buy_max_drones = buy_max_drones;

window.buy_queens = buy_queens;
window.buy_max_queens = buy_max_queens;

update();


