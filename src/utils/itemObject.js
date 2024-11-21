import { GridObject } from "./gridObject.js";

class ItemObject extends GridObject {
  #profile = {
    name: null,
    attack: 0,
    defense: 0,
    hp: 0,
  };

  constructor(stats) {
    super(stats);
    this.#profile = stats;
    this.type = "item";
  }
  //will inherit getStats() method
  //will inherit getName() method
  //will inherit describe() method
  describe() {
    console.log(`You found a ${this.#profile.name}!`);
    this.getStats();
  }
}

const test = new ItemObject({ name: "sword", attack: 2, defense: 3, hp: 4 });
console.log(test);
// test.getName();
// test.getStats();
test.describe();

export { ItemObject };
