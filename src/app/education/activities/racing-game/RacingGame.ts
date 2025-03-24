//copy this for your game script file
/* eslint-disable @typescript-eslint/no-unused-vars */

/*
have it be a long ass freaking strip
    2 states
        car stationary
        ending animation where strip stops moving and then car starts moving
when car passes the end trigger the end script
every question right is a speed up and wrong is speed down (have a multiplier)
*/
import { Application, Graphics, Sprite, Texture, TilingSprite } from "pixi.js";

import backgroundImage from "public/assets/backgrounds/fined_background_1.svg";
import { GameManager } from "src/components/pixigame/GameManager";

import grass from "public/assets/activity/grass-background.jpg";
import asphalt from "public/assets/activity/asphalt-background.jpg";
import car from "public/assets/activity/red-car.png";

let pixiApp: Application;
let gameManager: GameManager;

let asphaltSprite: TilingSprite;
let carSprite: Sprite;
let speedMultiplier: number;

export default function RacingGameScript(app: Application, data: JSONValue) {
  pixiApp = app;
  const backgroundTexture = Texture.from(backgroundImage.src);
  const background = new Sprite(backgroundTexture);
  pixiApp.stage.addChild(background);

  gameManager = new GameManager(Load);
}

function Load() {
  //backround assets
  //grass
  const grassSprite = Sprite.from(grass.src);
  grassSprite.setTransform(0, 131);
  grassSprite.width = 924;
  grassSprite.height = 517;
  pixiApp.stage.addChild(grassSprite);
  //asphalt
  const asphaltTexture = Texture.from(asphalt.src);
  asphaltSprite = new TilingSprite(asphaltTexture, 924 * 4, 101);
  asphaltSprite.tileScale.set(0.1);
  //draw white lines on asphalt
  const asphaltGraphics = new Graphics();

  asphaltGraphics.beginFill("FFFFFF");
  for (let i = 0; i <= asphaltSprite.width / 136; i++) {
    asphaltGraphics.drawRect(i * 136, 46, 46, 7);
  }
  asphaltSprite.addChild(asphaltGraphics);
  asphaltSprite.setTransform(0, 223);
  pixiApp.stage.addChild(asphaltSprite);

  //red car
  carSprite = Sprite.from(car.src);
  carSprite.setTransform(0, 223);
  pixiApp.stage.addChild(carSprite);
  return true;
}
