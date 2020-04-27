class Greetings {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hello ${this.name}`);
  }
}

module.exports = Greetings;
