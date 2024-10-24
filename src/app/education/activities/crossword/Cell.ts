import { Container, Graphics, Text, TextStyle } from "pixi.js";

export class Cell {
  correctLetter: string;
  currentLetter: string;
  container: Container;
  graphics: Graphics;
  text: Text;
  size: { length: number };

  constructor(correctLetter: string) {
    this.size = { length: 40 };
    this.correctLetter = correctLetter;
    this.currentLetter = "";
    this.container = new Container();
    this.container.pivot.set(this.size.length / 2, this.size.length / 2);

    this.graphics = new Graphics();
    this.text = new Text(
      "",
      new TextStyle({
        align: "center",
        fontSize: 0.65 * this.size.length,
      })
    );
    this.text.anchor.set(0.5);
    this.text.x = this.size.length / 2;
    this.text.y = this.size.length / 2;

    this.graphics.beginFill(0xffffff);
    this.graphics.lineStyle(1, 0x000000, 0.5);
    this.graphics.drawRect(0, 0, this.size.length, this.size.length);
    this.graphics.endFill();

    this.container.addChild(this.graphics);
    this.container.addChild(this.text);
  }

  setCurrentLetter(letter: string) {
    this.currentLetter = letter;
    this.text.text = letter;
  }

  setPositionGlobal(localx: number, localy: number) {
    this.container.x = localx * this.size.length;
    this.container.y = localy * this.size.length;
  }
}
