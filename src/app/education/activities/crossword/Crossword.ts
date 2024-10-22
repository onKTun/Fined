import { Container, Graphics } from "pixi.js";
import { Row } from "./Row";
import { Input } from "@pixi/ui";

export class Crossword {
  acrossRows: Row[];
  downRows: Row[];
  private _container: Container;
  acrossWords: string[];
  acrossDefinitions: string[];
  downWords: string[];
  downDefinitions: string[];

  constructor(crosswordData: JSONValue) {
    [
      this.acrossWords,
      this.acrossDefinitions,
      this.downWords,
      this.downDefinitions,
      this.acrossRows,
      this.downRows,
    ] = this.loadData(crosswordData);

    this._container = new Container();

    for (const row of this.acrossRows) {
      this._container.addChild(row.container);
    }
    for (const row of this.downRows) {
      this._container.addChild(row.container);
    }

    //set container pivot
    this._container.calculateBounds();
    const boundRect = this._container.getBounds();
    this._container.pivot.set(boundRect.width / 2, boundRect.height / 2);
  }
  checkCrossword(): boolean {
    const allAcrossCorrect = this.acrossRows.every((row) => row.isCorrect());
    const allDownCorrect = this.downRows.every((row) => row.isCorrect());
    return allAcrossCorrect && allDownCorrect;
  }

  private loadData(
    crosswordData: JSONValue
  ): [string[], string[], string[], string[], Row[], Row[]] {
    const acrossTerms = crosswordData["acrossWords"];
    const downTerms = crosswordData["downWords"];

    const acrossWords: string[] = [];
    const acrossDefinitions: string[] = [];
    const downWords: string[] = [];
    const downDefinitions: string[] = [];

    const acrossRows: Row[] = [];
    const downRows: Row[] = [];

    for (const term in acrossTerms) {
      acrossWords.push(acrossTerms[term]["word"]);
      acrossDefinitions.push(acrossTerms[term]["definition"]);
      acrossRows.push(
        new Row(
          acrossTerms[term]["word"],
          5,
          "across",
          acrossTerms[term]["x"],
          acrossTerms[term]["y"],
          this
        )
      );
    }
    for (const term in downTerms) {
      downWords.push(downTerms[term]["word"]);
      downDefinitions.push(downTerms[term]["definition"]);
      downRows.push(
        new Row(
          downTerms[term]["word"],
          6,
          "down",
          downTerms[term]["x"],
          downTerms[term]["y"],
          this
        )
      );
    }

    return [
      acrossWords,
      acrossDefinitions,
      downWords,
      downDefinitions,
      acrossRows,
      downRows,
    ];
  }

  get container(): Container {
    return this._container;
  }

  get position(): { x: number; y: number } {
    const x = this._container.x;
    const y = this._container.y;
    return { x, y };
  }

  set position({ x, y }: { x: number; y: number }) {
    this._container.x = x;
    this._container.y = y;
  }

  get definitions(): {
    acrossDefinitions: string[];
    downDefinitions: string[];
  } {
    return {
      acrossDefinitions: this.acrossDefinitions,
      downDefinitions: this.downDefinitions,
    };
  }

  //utility function to draw red bounding box
  getBoundingBox(): Graphics {
    const bounding = new Graphics();
    bounding.lineStyle(2, 0xff0000);
    bounding.drawShape(this._container.getBounds());
    return bounding;
  }
}
