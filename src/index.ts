class Player {
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
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

console.log(player1?.play());
console.log(player2?.play());

// declaring 'Player' as type of arraay
const players: Player[] = [];

players.push(player1, player2);
console.log(players);
