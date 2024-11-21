import { GridObject } from "./gridObject.js";

class EnemyObject extends GridObject {
  #profile = {
    name: null,
    attack: 0,
    defense: 0,
    hp: 0,
  };

  constructor(stats) {
    super(stats);
    this.#profile = stats;
    this.type = "enemy";
  }
  //will inherit getStats() method
  //will inherit getName() method
  //will inherit describe() method
  describe() {
    console.log(`You encountered a ${this.#profile.name}!`);
    this.getStats();
  }
}

// const test = new EnemyObject({ name: "spider", attack: 1, defense: 2, hp: 3 });
// console.log(test);
// // test.getName();
// // test.getStats();
// test.describe();

export { EnemyObject };
