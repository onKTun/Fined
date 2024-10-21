import { Application, Sprite } from "pixi.js";
import { Input } from "@pixi/ui";
import { Crossword } from "./Crossword";
import { Graphics } from "pixi.js";

let pixiApp: Application;
let crossword: Crossword;
export default function crosswordScript(app: Application, data: JSONValue) {
  pixiApp = app;
  crossword = new Crossword(data);
  crossword.position = { x: app.screen.width / 2, y: app.screen.height / 2 };
  pixiApp.stage.addChild(crossword.container, crossword.getBoundingBox());

  //main update loop
  pixiApp.ticker.add(() => {});
}
