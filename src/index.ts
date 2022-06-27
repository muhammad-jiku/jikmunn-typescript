class Player {
  //   public name: string; // by default it's 'public' modifier it can be accessible and readble
  //   private age: number; // by 'private' modifier it can not be accessible outside of class
  //   readonly country: string; // by 'readonly' modifier it can be accessible only for read

  //   constructor(n: string, a: number, c: string) {
  // when access modifier is used
  constructor(
    public name: string,
    private age: number,
    readonly country: string
  ) {
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

console.log(player1?.play());
console.log(player2?.play());

// declaring 'Player' as type of arraay
const players: Player[] = [];

players.push(player1, player2);
console.log(players);
