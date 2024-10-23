import { Container, Graphics } from "pixi.js";
import { Row } from "./Row";

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
    console.log(
      `Bound Width: ${boundRect.width}, Bound Height: ${boundRect.height}`
    );
    console.log(
      `Pivot: (${this._container.pivot.x}, ${this._container.pivot.y})`
    );
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

    //initialize all rows
    let acrossCount = 1;
    for (const term in acrossTerms) {
      acrossWords.push(acrossTerms[term]["word"]);
      acrossDefinitions.push(
        acrossCount.toString() + ". " + acrossTerms[term]["definition"]
      );
      acrossRows.push(
        new Row(
          acrossTerms[term]["word"],
          acrossCount,
          "across",
          acrossTerms[term]["x"],
          acrossTerms[term]["y"],
          this
        )
      );
      acrossCount++;
    }
    let downCount = 1;
    for (const term in downTerms) {
      downWords.push(downTerms[term]["word"]);
      downDefinitions.push(
        downCount.toString() + ". " + downTerms[term]["definition"]
      );
      downRows.push(
        new Row(
          downTerms[term]["word"],
          downCount,
          "down",
          downTerms[term]["x"],
          downTerms[term]["y"],
          this
        )
      );
      downCount++;
    }

    //VERY optimised iterations
    for (let i = 0; i < acrossRows.length; i++) {
      const acrossRow = acrossRows[i];

      for (let j = 0; j < downRows.length; j++) {
        const downRow = downRows[j];

        for (let k = 0; k < acrossRow.cells.length; k++) {
          const acrossCell = acrossRow.cells[k];

          for (let l = 0; l < downRow.cells.length; l++) {
            const downCell = downRow.cells[l];

            //compares x,y,and correct letter
            if (
              acrossCell.container.x === downCell.container.x &&
              acrossCell.container.y === downCell.container.y &&
              acrossCell.correctLetter === downCell.correctLetter
            ) {
              //remove cell from acrossRows container and array, and replace with the downRow cell
              const index = acrossRow.container.getChildIndex(
                acrossCell.container
              );
              acrossRow.container.addChildAt(downCell.container, index);
              acrossRow.container.removeChild(acrossCell.container);
              acrossRow.cells.splice(k, 1, downCell);
            }
          }
        }
      }
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
    const bounds = this._container.getBounds();
    bounding.drawCircle(
      bounds.x + bounds.width / 2,
      bounds.y + bounds.height / 2,
      10
    );
    return bounding;
  }
}
