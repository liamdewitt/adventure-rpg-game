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
  //will inherit getName() method
  //will inherit describe() method
  getStats() {
    return {
      name: this.#profile.name,
      attack: this.#profile.attack,
      defense: this.#profile.defense,
      hp: this.#profile.hp,
    };
  }

  describe() {
    const stats = this.getStats();
    console.log(`You found a ${stats.name}!`);
    console.log(`HP: ${stats.hp} ATK: ${stats.attack} DEF: ${stats.defense}`);
  }
}

// const test = new ItemObject({ name: "sword", attack: 2, defense: 3, hp: 4 });
// console.log(test);
// // test.getName();
// // test.getStats();
// test.describe();

export { ItemObject };
