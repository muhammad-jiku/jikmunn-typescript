import { Player } from "./classes/Player.js";
import { IsPlayer } from "./interfaces/IsPlayer.js";

// object interfaces
interface rectangleOptions {
  width: number;
  height: number;
}

function drawRectangle(options: rectangleOptions) {
  let width = options.width;
  let height = options.height;
  console.log(options);
}

let obj = { width: 30, height: 60, length: 70 };

console.log(drawRectangle({ width: 30, height: 60 }));
console.log(drawRectangle({ width: 30, height: 60, length: 70 }));
console.log(drawRectangle(obj));

// class interfaces
const player1 = new Player("Mash", 31, "Bangladesh");
let player2: IsPlayer;

player2 = new Player("Shakib", 27, "Bangladesh");

console.log(player1, player2);

console.log(player1?.play());
console.log(player2?.play());

// declaring 'Player' as type of arraay
const players: Player[] = [];

players.push(player1, player2);
console.log(players);
