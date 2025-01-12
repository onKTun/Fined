//copy this for your game script file
import { Application, Sprite, Texture } from "pixi.js";

import backgroundImage from "public/assets/backgrounds/fined_background_1.svg";
import { GameManager } from "src/components/pixigame/GameManager";

let pixiApp: Application;
let gameManager: GameManager;

export default function ExampleAppScript(app: Application, data: JSONValue) {
  pixiApp = app;
  gameManager = new GameManager();
  const backgroundTexture = Texture.from(backgroundImage.src);
  const background = new Sprite(backgroundTexture);
  pixiApp.stage.addChild(background);
}
