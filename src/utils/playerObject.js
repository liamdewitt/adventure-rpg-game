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

  getStats() {
    return {
      name: this.#profile.name,
      attack: this.#profile.attack,
      defense: this.#profile.defense,
      hp: this.#profile.hp,
    };
  }

  addStats(object) {
    if (object.attack) {
      this.#profile.attack += object.attack;
    }
    if (object.hp) {
      this.#profile.hp += object.hp;
    }
    if (object.defense) {
      this.#profile.defense += object.defense;
    }
  }

  describe() {
    const stats = this.getStats();
    console.log(
      `Players Stats: HP: ${stats.hp} ATK: ${stats.attack} DEF: ${stats.defense}`
    );
  }
  //will inherit getName() method
  //will inherit describe() method
}

export { PlayerObject };
