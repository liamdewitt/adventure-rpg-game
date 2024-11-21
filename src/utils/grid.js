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
        thisRow.push("T");
      }
      this.grid.push(thisRow);
    }
    //
    this.grid[0][this.grid[0].length - 1] = "G";
    this.grid[height - 1][0] = "O"; //this.grid[height - 1][0]
    this.gameStart();
  }

  async gameStart() {
    while (true) {
      if (this.grid[0][this.grid[0].length - 1] === "O") {
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

  playerMoveUp() {
    if (this.playerY === 0) {
      return console.log("You cannot move up");
    }
    this.grid[this.playerY][this.playerX] = "x";
    this.grid[(this.playerY -= 1)][this.playerX] = "O";
  }

  playerMoveDown() {
    if (this.playerY === this.height - 1) {
      return console.log("You cannot move down");
    }
    this.grid[this.playerY][this.playerX] = "x";
    this.grid[(this.playerY += 1)][this.playerX] = "O";
  }

  playerMoveLeft() {
    if (this.playerX === 0) {
      return console.log("You cannot move left");
    }
    this.grid[this.playerY][this.playerX] = "x";
    this.grid[this.playerY][(this.playerX -= 1)] = "O";
  }

  playerMoveRight() {
    if (this.playerX === this.width - 1) {
      return console.log("You cannot move right");
    }
    this.grid[this.playerY][this.playerX] = "x";
    this.grid[this.playerY][(this.playerX += 1)] = "O";
  }
}

const grid = new Grid(5, 10);
// console.log(grid);
