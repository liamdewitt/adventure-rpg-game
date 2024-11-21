class GridObject {
  #profile = {
    name: null,
    attack: 0,
    defense: 0,
    hp: 0,
  };

  constructor(stats) {
    this.#profile = stats;
    this.type = "item";
  }

  getStats() {
    console.log(
      `Attack: ${this.#profile.attack}, Defense: ${
        this.#profile.defense
      }, HP: ${this.#profile.hp}`
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
