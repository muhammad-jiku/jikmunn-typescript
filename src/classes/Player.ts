import { IsPlayer } from "../interfaces/IsPlayer";
export class Player implements IsPlayer {
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

  getProperty() {
    return this.age;
  }
  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}
