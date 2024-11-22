import { EnemyObject } from "./enemyObject.js";
import { GridObject } from "./gridObject.js";
import { ItemObject } from "./itemObject.js";
import { PlayerObject } from "./playerObject.js";
import { promptForPlayersDirection } from "./playerPrompts.js";

class Grid {
  #currentObject;
  constructor(width, height, playerPosX = 0, playerPosY = height - 1) {
    this.width = width;
    this.height = height;
    this.playerX = playerPosX;
    this.playerY = playerPosY;
    this.player = new PlayerObject({
      attack: 10,
      defense: 5,
      hp: 20,
    });

    //creates grid
    this.grid = [];
    for (let row = 0; row < this.height; row++) {
      let thisRow = [];
      for (let col = 0; col < this.width; col++) {
        thisRow.push("☘️");
      }
      this.grid.push(thisRow);
    }
    //goal top right
    this.grid[0][this.grid[0].length - 1] = "⭐";
    //player bottom left
    this.grid[height - 1][0] = "♚"; //this.grid[height - 1][0]
    this.gameStart();
  }

  async gameStart() {
    while (true) {
      this.displayGrid();
      const result = await promptForPlayersDirection();
      if (result === "Up") {
        this.playerMoveUp();
      } else if (result === "Down") {
        this.playerMoveDown();
      } else if (result === "Left") {
        this.playerMoveLeft();
      } else if (result === "Right") {
        this.playerMoveRight();
      }
      console.log("---------------------");
    }
  }

  displayGrid() {
    this.player.describe();
    for (let rowIndex = 0; rowIndex < this.grid.length; rowIndex++) {
      console.log(this.grid[rowIndex].join("        "));
    }
  }

  eventSpawner() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    if (randomNum <= 3) {
      const enemyEncounter = new EnemyObject({
        name: "spider",
        attack: 6,
        defense: 5,
        hp: 15,
      });
      return enemyEncounter;
    } else if (randomNum > 4 && randomNum <= 5) {
      const itemDiscovery = new ItemObject({
        name: "sword",
        attack: 5,
        defense: 2,
        hp: 2,
      });
      return itemDiscovery;
    }
    const noEncounter = new GridObject();
    return noEncounter;
  }

  executeTurn() {
    if (this.grid[0][this.grid[0].length - 1] === "♚") {
      console.log("Congratulations! You've reached the goal!");
      process.exit();
    } else if (this.#currentObject.type === "item") {
      this.#currentObject.describe();
      const itemStats = this.#currentObject.getStats();
      this.player.addStats(itemStats);
      return;
    } else if (this.#currentObject.type === "no event") {
      return this.#currentObject.describe();
    }

    this.#currentObject.describe();
    const enemyStats = this.#currentObject.getStats();
    const playerStats = this.player.getStats();

    if (enemyStats.defense > playerStats.attack) {
      console.log("Y O U    D I E D");
      process.exit();
    }

    let playerDamage = 0;
    while (enemyStats.hp > 0) {
      const playerAttackPotency = playerStats.attack - enemyStats.defense;
      const enemyAttackPotency = enemyStats.attack - playerStats.defense;

      if (playerAttackPotency > 0) {
        enemyStats.hp -= playerAttackPotency;
      }

      if (enemyAttackPotency > 0) {
        playerStats.hp -= enemyAttackPotency;
        playerDamage += enemyAttackPotency;
      }
    }

    if (playerStats.hp <= 0) {
      console.log("Y O U    D I E D");
      process.exit();
    }

    this.player.addStats({ hp: -playerDamage });
    console.log("E N E M Y    F E L L E D");
    this.player.describe();
  }

  playerMoveUp() {
    if (this.playerY === 0) {
      return console.log("You cannot move up");
    }
    this.grid[this.playerY][this.playerX] = "x";
    this.grid[(this.playerY -= 1)][this.playerX] = "♚";
    this.#currentObject = this.eventSpawner();
    this.executeTurn();
  }

  playerMoveDown() {
    if (this.playerY === this.height - 1) {
      return console.log("You cannot move down");
    }
    this.grid[this.playerY][this.playerX] = "x";
    this.grid[(this.playerY += 1)][this.playerX] = "♚";
    this.#currentObject = this.eventSpawner();
    this.executeTurn();
  }

  playerMoveLeft() {
    if (this.playerX === 0) {
      return console.log("You cannot move left");
    }
    this.grid[this.playerY][this.playerX] = "x";
    this.grid[this.playerY][(this.playerX -= 1)] = "♚";
    this.#currentObject = this.eventSpawner();
    this.executeTurn();
  }

  playerMoveRight() {
    if (this.playerX === this.width - 1) {
      return console.log("You cannot move right");
    }
    this.grid[this.playerY][this.playerX] = "x";
    this.grid[this.playerY][(this.playerX += 1)] = "♚";
    this.#currentObject = this.eventSpawner();
    this.executeTurn();
  }
}

new Grid(5, 10);
// console.log(grid);
