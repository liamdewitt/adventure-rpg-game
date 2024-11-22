class GridObject {
  #profile = {
    name: null,
    attack: 0,
    defense: 0,
    hp: 0,
  };

  constructor(stats, type = "no event") {
    this.#profile = stats;
    this.type = type;
  }

  getStats() {
    console.log(
      `HP: ${this.#profile.hp} ATK: ${this.#profile.attack}, Def: ${
        this.#profile.defense
      }`
    );
  }

  getName() {
    console.log(this.#profile.name);
  }

  describe() {
    console.log(`Nothing out of the ordinary...`);
  }
}

export { GridObject };
