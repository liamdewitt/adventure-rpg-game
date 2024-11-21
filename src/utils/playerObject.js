import { GridObject } from "./gridObject.js";

class PlayerObject extends GridObject {
  #profile = {
    attack: 0,
    defense: 0,
    hp: 0,
  };

  constructor(stats) {
    super(stats);
    this.#profile = stats;
    this.type = "player";
  }
  //will inherit getStats() method
  //will inherit getName() method
  //will inherit describe() method
}

const test = new PlayerObject({
  name: "player",
  attack: 10,
  defense: 5,
  hp: 5,
});
// console.log(test);
// test.getStats();
