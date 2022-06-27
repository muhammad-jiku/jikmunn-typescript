"use strict";
class Player {
    //   public name: string; // by default it's 'public' modifier it can be accessible and readble
    //   private age: number; // by 'private' modifier it can not be accessible outside of class
    //   readonly country: string; // by 'readonly' modifier it can be accessible only for read
    //   constructor(n: string, a: number, c: string) {
    // when access modifier is used
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
        // this.name = n;
        // this.age = a;
        // this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const player1 = new Player("Mash", 31, "Bangladesh");
const player2 = new Player("Shakib", "27", "Bangladesh");
console.log(player1, player2);
player1.name = "Mashrafee";
player1.age = 33;
player1.country = "BD";
console.log(player1 === null || player1 === void 0 ? void 0 : player1.play());
console.log(player2 === null || player2 === void 0 ? void 0 : player2.play());
// declaring 'Player' as type of arraay
const players = [];
players.push(player1, player2);
console.log(players);
