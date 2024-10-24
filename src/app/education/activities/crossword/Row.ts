import { Input } from "@pixi/ui";
import { Cell } from "./Cell";
import { Container, Graphics, Text, TextStyle } from "pixi.js";
import { Crossword } from "./Crossword";

export class Row {
  cells: Cell[];
  localx: number;
  localy: number;
  orientation: "across" | "down";
  container: Container;
  answer: string;
  input: Input;
  parentCrossword: Crossword;
  rowNumber: number;

  constructor(
    word: string,
    rowNumber: number,
    orientation: "across" | "down",
    localx: number,
    localy: number,
    crossword: Crossword
  ) {
    this.cells = [];
    this.localx = localx; // localx starts on the provided value
    this.localy = localy; // localy starts on the provided value
    this.orientation = orientation; // set the orientation
    this.container = new Container();
    this.answer = word;
    this.parentCrossword = crossword;
    this.rowNumber = rowNumber;

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

    this.container.calculateBounds();
    const boundsRect = this.container.getBounds();

    //input
    const graphics = new Graphics();
    graphics.beginFill(0xff0000);
    graphics.alpha = 0;
    graphics.drawRect(0, 0, 1000, 1000);
    this.input = new Input({
      bg: graphics,
      placeholder: "",
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      maxLength: this.answer.length,
      textStyle: new TextStyle({ fontSize: 0 }),
    });
    this.input.x = boundsRect.x;
    this.input.y = boundsRect.y;
    this.input.width = boundsRect.width;
    this.input.height = boundsRect.height;

    this.input.onChange.connect(() => this.changeValue(this.input.value));
    this.input.onEnter.connect(() => this.exitInput());

    //rowNumber textbox
    const rowNumberText = new Text(
      rowNumber.toString(),
      new TextStyle({
        fontSize: 10,
      })
    );
    rowNumberText.x = boundsRect.x + 2;
    rowNumberText.y = boundsRect.y + 1;

    this.container.addChild(this.input, rowNumberText);
  }

  changeValue(text: string) {
    console.log("change value called");
    for (let i = 0; i < this.cells.length; i++) {
      if (i <= text.length && text[i]) {
        const uppercaseText = text[i].toUpperCase();
        this.cells[i].text.text = uppercaseText;
      } else {
        this.cells[i].text.text = "";
      }
    }
  }

  focusRow() {}

  exitInput() {
    console.log("input exited");
    console.log(this.parentCrossword.checkCrossword());
  }

  isCorrect(): boolean {
    const currentAnswer = this.cells.map((cell) => cell.text.text).join("");
    console.log(
      "Compared " +
        currentAnswer +
        " to " +
        this.answer +
        " result is " +
        (currentAnswer === this.answer)
    );
    return currentAnswer === this.answer;
  }

  // Method to get the cell at a specific index
  getCell(index: number): Cell | null {
    if (index >= 0 && index < this.cells.length) {
      return this.cells[index];
    }
    return null;
  }

  //utility function to draw red bounding box
  getBoundingBox(): Graphics {
    this.container.calculateBounds();
    const bounding = new Graphics();
    bounding.lineStyle(2, 0xff0000);
    bounding.drawShape(this.container.getBounds());
    return bounding;
  }
}
