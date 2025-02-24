//copy this for your game script file
import {
  Application,
  Container,
  Graphics,
  Sprite,
  Text,
  TextStyle,
  Texture,
} from "pixi.js";

import backgroundImage from "public/assets/backgrounds/fined_background_1.svg";
import { GameManager } from "src/components/pixigame/GameManager";

let pixiApp: Application;
let gameManager: GameManager;

export default function ValueArrangerScript(app: Application, data: JSONValue) {
  pixiApp = app;
  gameManager = new GameManager(Load);
  gameManager.setState(0);
}

function Load() {
  //load background
  const backgroundTexture = Texture.from(backgroundImage.src);
  const background = new Sprite(backgroundTexture);

  //ui for left side of game
  const leftContainer = new Container();
  const leftGraphics = new Graphics();
  leftGraphics.beginFill("4A91FE");
  leftGraphics.drawRect(0, 0, 581, 730);
  leftContainer.addChild(leftGraphics);

  const dropContainer = new Container();
  const dropGraphics = new Graphics();
  dropGraphics.beginFill("#71A6FF");
  dropGraphics.drawRoundedRect(0, 10, 523, 491, 10);
  dropContainer.addChild(dropGraphics);
  leftContainer.addChild(dropContainer);

  const infoContainer = new Container();
  const infoGraphics = new Graphics();
  infoGraphics.beginFill("#FFFFFF");
  infoGraphics.drawRoundedRect(0, 0, 482, 103, 10);
  infoGraphics.endFill();
  infoGraphics.beginFill("#3388FF");
  infoGraphics.drawRoundedRect(16, 12, 81, 79, 10);
  infoContainer.addChild(infoGraphics);
  leftContainer.addChild(infoContainer);

  const balanceDueContainer = new Container();
  const balanceDueTitleText = new Text(
    "Balance Due",
    new TextStyle({
      fontSize: 16,
    })
  );
  balanceDueContainer.addChild(balanceDueTitleText);
  infoContainer.addChild(balanceDueContainer);
  const balanceDueValueContainer = new Container();
  const balanceDueValueGraphics = new Graphics();
  balanceDueValueGraphics.beginFill("#F5F5F5");
  balanceDueValueGraphics.drawRoundedRect(0, 0, 75, 31, 5);
  const balanceDueValueText = new Text(
    "$59.32",
    new TextStyle({
      fill: "#4A4A4A",
      fontSize: 17,
    })
  );
  balanceDueValueContainer.addChild(
    balanceDueValueGraphics,
    balanceDueValueText
  );
  balanceDueContainer.addChild(balanceDueValueContainer);
  balanceDueValueContainer.setTransform(0, 25);
  balanceDueContainer.setTransform(115, 21);

  const currentBalanceContainer = new Container();
  const currentBalanceTitleText = new Text(
    "Current Balance",
    new TextStyle({
      fontSize: 16,
    })
  );
  currentBalanceContainer.addChild(currentBalanceTitleText);
  infoContainer.addChild(currentBalanceContainer);
  const currentBalanceValueContainer = new Container();
  const currentBalanceValueGraphics = new Graphics();
  currentBalanceValueGraphics.beginFill("#F5F5F5");
  currentBalanceValueGraphics.drawRoundedRect(0, 0, 75, 31, 5);
  const currentBalanceValueText = new Text(
    "$0.00",
    new TextStyle({
      fill: "#4A4A4A",
      fontSize: 17,
    })
  );
  currentBalanceValueContainer.addChild(
    currentBalanceValueGraphics,
    currentBalanceValueText
  );
  currentBalanceContainer.addChild(currentBalanceValueContainer);
  currentBalanceValueContainer.setTransform(0, 25);
  currentBalanceContainer.setTransform(263, 21);

  const itemsContainer = new Container();

  dropContainer.setTransform(25, 239);
  infoContainer.setTransform(24, 100);
  pixiApp.stage.addChild(background, leftContainer);
  return true;
}
