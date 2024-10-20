import { Container } from "pixi.js";
import { Row } from "./Row";

export class Crossword {
  rows: Row[];
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
      this.rows,
    ] = this.loadData(crosswordData);

    this._container = new Container();

    for (const row of this.rows) {
      this._container.addChild(row.container);
    }
  }

  private loadData(
    crosswordData: JSONValue
  ): [string[], string[], string[], string[], Row[]] {
    const acrossTerms = crosswordData["acrossWords"];
    const downTerms = crosswordData["downWords"];

    const acrossWords: string[] = [];
    const acrossDefinitions: string[] = [];
    const downWords: string[] = [];
    const downDefinitions: string[] = [];

    const rows: Row[] = [];

    for (const term in acrossTerms) {
      acrossWords.push(acrossTerms[term]["word"]);
      acrossDefinitions.push(acrossTerms[term]["definition"]);
      rows.push(
        new Row(
          acrossTerms[term]["word"],
          "across",
          acrossTerms[term]["x"],
          acrossTerms[term]["y"]
        )
      );
    }
    for (const term in downTerms) {
      downWords.push(downTerms[term]["word"]);
      downDefinitions.push(downTerms[term]["definition"]);
      rows.push(
        new Row(
          acrossTerms[term]["word"],
          "down",
          acrossTerms[term]["x"],
          acrossTerms[term]["y"]
        )
      );
    }

    return [acrossWords, acrossDefinitions, downWords, downDefinitions, rows];
  }

  get container(): Container {
    return this._container;
  }
}
