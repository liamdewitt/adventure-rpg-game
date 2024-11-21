import { EnemyObject } from "./enemyObject.js";
import { GridObject } from "./gridObject.js";
import { ItemObject } from "./itemObject.js";
import { promptForPlayersDirection } from "./playerPrompts.js";

class Grid {
  constructor(width, height, playerPosX = 0, playerPosY = height - 1) {
    this.width = width;
    this.height = height;
    this.playerX = playerPosX;
    this.playerY = playerPosY;

    this.grid = [];
    for (let row = 0; row < this.height; row++) {
      let thisRow = [];
      for (let col = 0; col < this.width; col++) {
        thisRow.push("☘️");
      }
      this.grid.push(thisRow);
    }
    //
    this.grid[0][this.grid[0].length - 1] = "⭐";
    this.grid[height - 1][0] = "♚"; //this.grid[height - 1][0]
    this.gameStart();
  }

  async gameStart() {
    while (true) {
      if (this.grid[0][this.grid[0].length - 1] === "♚") {
        console.log("Congratulations! You've reached the goal!");
        break;
      }
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
    for (let rowIndex = 0; rowIndex < this.grid.length; rowIndex++) {
      console.log(this.grid[rowIndex].join("        "));
    }
  }

  eventSpawner() {
    if (this.grid[0][this.grid[0].length - 1] === "♚") {
      return;
    }
    const randomNum = Math.floor(Math.random() * 10) + 1;
    if (randomNum <= 3) {
      const enemyEncounter = new EnemyObject({
        name: "spider",
        attack: 1,
        defense: 2,
        hp: 3,
      });
      enemyEncounter.describe();
      return enemyEncounter;
    } else if (randomNum > 4 && randomNum <= 5) {
      const itemDiscovery = new ItemObject({
        name: "sword",
        attack: 2,
        defense: 3,
        hp: 4,
      });
      itemDiscovery.describe();
      return itemDiscovery;
    }
    const noEncounter = new GridObject();
    noEncounter.describe();
  }

  playerMoveUp() {
    if (this.playerY === 0) {
      return console.log("You cannot move up");
    }
    this.grid[this.playerY][this.playerX] = "x";
    this.grid[(this.playerY -= 1)][this.playerX] = "♚";
    this.eventSpawner();
  }

  playerMoveDown() {
    if (this.playerY === this.height - 1) {
      return console.log("You cannot move down");
    }
    this.grid[this.playerY][this.playerX] = "x";
    this.grid[(this.playerY += 1)][this.playerX] = "♚";
    this.eventSpawner();
  }

  playerMoveLeft() {
    if (this.playerX === 0) {
      return console.log("You cannot move left");
    }
    this.grid[this.playerY][this.playerX] = "x";
    this.grid[this.playerY][(this.playerX -= 1)] = "♚";
    this.eventSpawner();
  }

  playerMoveRight() {
    if (this.playerX === this.width - 1) {
      return console.log("You cannot move right");
    }
    this.grid[this.playerY][this.playerX] = "x";
    this.grid[this.playerY][(this.playerX += 1)] = "♚";
    this.eventSpawner();
  }
}

const grid = new Grid(5, 10);
// console.log(grid);
