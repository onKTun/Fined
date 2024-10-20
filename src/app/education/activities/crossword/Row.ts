import { Cell } from "./Cell";
import { Container } from "pixi.js";

export class Row {
  cells: Cell[];
  localx: number;
  localy: number;
  orientation: "across" | "down";
  container: Container;

  constructor(
    word: string,
    orientation: "across" | "down",
    localx: number,
    localy: number
  ) {
    this.cells = [];
    this.localx = localx; // localx starts on the provided value
    this.localy = localy; // localy starts on the provided value
    this.orientation = orientation; // set the orientation
    this.container = new Container(); // create a new PixiJS container

    // Initialize the cells array with a Cell for each letter in the word
    for (let i = 0; i < word.length; i++) {
      const cell = new Cell(word[i]);
      this.cells.push(cell);
      this.container.addChild(cell.container);

      // Increment the cell's container x and y properties based on orientation
      if (this.orientation === "across") {
        cell.setPositionGlobal(this.localx + i, this.localy);
      } else {
        cell.setPositionGlobal(this.localx, this.localy + i);
      }
    }
  }

  // Method to get the cell at a specific index
  getCell(index: number): Cell | null {
    if (index >= 0 && index < this.cells.length) {
      return this.cells[index];
    }
    return null;
  }
}
