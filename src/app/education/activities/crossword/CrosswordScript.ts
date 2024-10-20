import { Application } from "pixi.js";
import { Crossword } from "./Crossword";

let pixiApp: Application;
let crossword: Crossword;
export default function crosswordScript(app: Application, data: JSONValue) {
  pixiApp = app;
  crossword = new Crossword(data);
  pixiApp.stage.addChild(crossword.container);

  //main update loop
  pixiApp.ticker.add(() => {});
}
