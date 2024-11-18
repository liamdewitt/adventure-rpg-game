class Grid {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.grid = [];
    for (let row = 0; row < this.height; row++) {
      let thisRow = [];
      for (let col = 0; col < this.width; col++) {
        thisRow.push("test");
      }
      this.grid.push(thisRow);
    }
  }
}

const grid = new Grid(5, 10);
console.log(grid);
