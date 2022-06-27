export class Player {
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
