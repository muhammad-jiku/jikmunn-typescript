"use strict";
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const player1 = new Player("Mash", 31, "Bangladesh");
const player2 = new Player("Shakib", "27", "Bangladesh");
console.log(player1, player2);
player1.name = "Mashrafee";
console.log(player1 === null || player1 === void 0 ? void 0 : player1.play());
console.log(player2 === null || player2 === void 0 ? void 0 : player2.play());
// declaring 'Player' as type of arraay
const players = [];
players.push(player1, player2);
console.log(players);
