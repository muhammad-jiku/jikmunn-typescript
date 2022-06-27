// importing class
import { Player } from "./classes/Player.js";

const player1 = new Player("Mash", 31, "Bangladesh");
const player2 = new Player("Shakib", "27", "Bangladesh");

console.log(player1, player2);

player1.name = "Mashrafee";
player1.age = 33;
player1.country = "BD";

console.log(player1?.play());
console.log(player2?.play());

// declaring 'Player' as type of arraay
const players: Player[] = [];

players.push(player1, player2);
console.log(players);
