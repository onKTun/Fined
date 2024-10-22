import {
  Application,
  Container,
  Sprite,
  Text,
  TextStyle,
  Texture,
} from "pixi.js";
import { Input } from "@pixi/ui";
import { Crossword } from "./Crossword";
import { Graphics } from "pixi.js";
import backgroundImage from "public/assets/backgrounds/fined_background_1.svg";

let pixiApp: Application;
let crossword: Crossword;
let acrossContainer: Container;
let downContainer: Container;

export default function crosswordScript(app: Application, data: JSONValue) {
  pixiApp = app;
  Setup(data);

  //main update loop
  pixiApp.ticker.add(() => {});
}

function Setup(data: JSONValue) {
  const backgroundTexture = Texture.from(backgroundImage.src);
  const background = new Sprite(backgroundTexture);
  background.width = pixiApp.screen.width;
  background.height = pixiApp.screen.height;

  //setup crossword
  crossword = new Crossword(data);
  crossword.position = {
    x: pixiApp.screen.width - pixiApp.screen.width / 3,
    y: pixiApp.screen.height / 2,
  };

  const { acrossDefinitions, downDefinitions } = crossword.definitions;

  const definitionsDimensions = { fontSize: 20, width: 330, height: 100 };
  //setup definition boxes
  acrossContainer = new Container();
  acrossContainer.pivot.set(definitionsDimensions.width / 2, 50);
  acrossContainer.x = 200;
  acrossContainer.y = 100;

  const acrossGraphics = new Graphics();
  acrossGraphics.drawRoundedRect(
    0,
    0,
    definitionsDimensions.width,
    acrossDefinitions.length * 5,
    10
  );
  acrossContainer.addChild(acrossGraphics);

  for (let i = 0; i < acrossDefinitions.length; i++) {
    const text = new Text(
      acrossDefinitions[i],
      new TextStyle({
        fontFamily: "Helvetica",
        fontSize: definitionsDimensions.fontSize,
        wordWrap: true,
        wordWrapWidth: definitionsDimensions.width,
      })
    );
    text.y = text.height * i;
    acrossContainer.addChild(text);
  }

  pixiApp.stage.addChild(
    background,
    crossword.container,
    acrossContainer,
    crossword.getBoundingBox()
  );
}
