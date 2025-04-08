import {
  Application,
  Container,
  Sprite,
  Text,
  TextStyle,
  Texture,
} from "pixi.js";
import { Crossword } from "./Crossword";
import { Graphics } from "pixi.js";
import backgroundImage from "public/assets/backgrounds/fined_background_1.svg";
import { StartModal } from "src/components/pixigame/ui/StartModal";
import Timer from "utils/pixiJS/time utils/Timer";
import TimerManager from "utils/pixiJS/time utils/TimerManager";
import PixiActivityToast from "src/components/pixigame/ui/PixiActivityToast";
import { EndModal } from "src/components/pixigame/ui/EndModal";

let pixiApp: Application;
let crossword: Crossword;
let acrossContainer: Container;
let downContainer: Container;

let timer: Timer;
let elapsedTime: number;
let timeToast: PixiActivityToast;

let blurGraphics: Graphics;

export default function crosswordScript(app: Application, data: JSONValue) {
  pixiApp = app;
  Setup(data);
}

function Setup(data: JSONValue) {
  const backgroundTexture = Texture.from(backgroundImage.src);
  const background = new Sprite(backgroundTexture);
  background.width = pixiApp.screen.width;
  background.height = pixiApp.screen.height;

  blurGraphics = new Graphics();
  blurGraphics.beginFill(0x000000);
  blurGraphics.drawRect(0, 0, pixiApp.screen.width, pixiApp.screen.height);
  blurGraphics.alpha = 0.5;

  //setup crossword
  crossword = new Crossword(data);
  crossword.position = {
    x: pixiApp.screen.width - pixiApp.screen.width / 3,
    y: pixiApp.screen.height / 2 - 15,
  };
  console.log(pixiApp.screen.height);
  console.log(crossword.position.y);

  const { acrossDefinitions, downDefinitions } = crossword.definitions;

  const definitionsDimensions = {
    fontSize: 16,
    width: 400,
    height: 100,
    radius: 10,
    textPadding: 10,
    innerBoxPadding: 15,
    boxHeightOverhead: 80,
    lineSpacing: 5,
    spaceBetweenDefinitions: 20,
  };

  //setup definition boxes
  //across
  acrossContainer = new Container();
  const acrossTextContainer = new Container();
  //propogate text components
  for (let i = 0; i < acrossDefinitions.length; i++) {
    acrossTextContainer.calculateBounds();

    const text = new Text(
      acrossDefinitions[i],
      new TextStyle({
        fontSize: definitionsDimensions.fontSize,
        wordWrap: true,
        wordWrapWidth: definitionsDimensions.width,
      })
    );

    text.x = definitionsDimensions.textPadding;
    text.y =
      acrossTextContainer.getBounds().height +
      definitionsDimensions.textPadding;
    acrossTextContainer.addChild(text);

    if (i > 0) {
      text.y = text.y + definitionsDimensions.lineSpacing;
    }
  }

  const acrossGraphics = new Graphics();
  acrossGraphics.beginFill("#FFFFFF");
  //bigger rect
  acrossGraphics.drawRoundedRect(
    0,
    0,
    acrossTextContainer.getBounds().width +
      2 * definitionsDimensions.textPadding +
      definitionsDimensions.innerBoxPadding * 2,
    acrossTextContainer.getBounds().height +
      definitionsDimensions.boxHeightOverhead,
    definitionsDimensions.radius
  );

  const acrossTitleText = new Text("Across", new TextStyle({ fontSize: 20 }));
  acrossTitleText.x = definitionsDimensions.innerBoxPadding;
  acrossTitleText.y = definitionsDimensions.innerBoxPadding;

  const textGraphics = new Graphics();
  textGraphics.beginFill("FAFAFA");
  //text rect
  textGraphics.drawRoundedRect(
    0,
    0,
    acrossTextContainer.getBounds().width +
      2 * definitionsDimensions.textPadding,
    acrossTextContainer.getBounds().height +
      2 * definitionsDimensions.textPadding,
    definitionsDimensions.radius
  );
  acrossTextContainer.addChildAt(textGraphics, 0);

  //set container positions
  acrossContainer.x = 20;
  //y value is set after down container

  acrossTextContainer.pivot.set(textGraphics.width / 2, textGraphics.height);
  acrossTextContainer.x = acrossGraphics.width / 2;
  acrossTextContainer.y =
    acrossGraphics.height - definitionsDimensions.innerBoxPadding;

  acrossContainer.addChild(
    acrossGraphics,
    acrossTitleText,
    acrossTextContainer
  );

  //down
  downContainer = new Container();
  const downTextContainer = new Container();
  //propogate text components
  for (let i = 0; i < downDefinitions.length; i++) {
    downTextContainer.calculateBounds();

    const text = new Text(
      downDefinitions[i],
      new TextStyle({
        fontSize: definitionsDimensions.fontSize,
        wordWrap: true,
        wordWrapWidth: definitionsDimensions.width,
      })
    );

    text.x = definitionsDimensions.textPadding;
    text.y =
      downTextContainer.getBounds().height + definitionsDimensions.textPadding;
    downTextContainer.addChild(text);

    if (i > 0) {
      text.y = text.y + definitionsDimensions.lineSpacing;
    }
  }

  const downGraphics = new Graphics();
  downGraphics.beginFill("#FFFFFF");
  //bigger rect
  downGraphics.drawRoundedRect(
    0,
    0,
    downTextContainer.getBounds().width +
      2 * definitionsDimensions.textPadding +
      definitionsDimensions.innerBoxPadding * 2,
    downTextContainer.getBounds().height +
      definitionsDimensions.boxHeightOverhead,
    definitionsDimensions.radius
  );

  const downTitleText = new Text("Down", new TextStyle({ fontSize: 20 }));
  downTitleText.x = definitionsDimensions.innerBoxPadding;
  downTitleText.y = definitionsDimensions.innerBoxPadding;

  const downTextGraphics = new Graphics();
  downTextGraphics.beginFill("FAFAFA");
  //text rect
  downTextGraphics.drawRoundedRect(
    0,
    0,
    downTextContainer.getBounds().width + 2 * definitionsDimensions.textPadding,
    downTextContainer.getBounds().height +
      2 * definitionsDimensions.textPadding,
    definitionsDimensions.radius
  );
  downTextContainer.addChildAt(downTextGraphics, 0);

  //game header ui
  timeToast = new PixiActivityToast(
    44,
    163,
    15,
    "0 seconds elapsed",
    new TextStyle({
      fontSize: 16,
    })
  );
  timeToast.container.setTransform(876, 21);

  //set container positions
  downContainer.x = 20;
  downContainer.y = pixiApp.screen.height - (downGraphics.height + 20);
  acrossContainer.y = downContainer.y - acrossGraphics.height - 20;

  downTextContainer.pivot.set(
    downTextGraphics.width / 2,
    downTextGraphics.height
  );
  downTextContainer.x = downGraphics.width / 2;
  downTextContainer.y =
    downGraphics.height - definitionsDimensions.innerBoxPadding;

  downContainer.addChild(downGraphics, downTitleText, downTextContainer);

  const startModal = new StartModal(
    "Students will practice their financial vocabulary using this crossword puzzle.",
    "When the game starts, click on a row or column to focus it, then type to enter the terms. Use the backspace key to delete letters.",
    10,
    Start
  );
  startModal.container.position.set(pixiApp.screen.width / 2, 200);

  pixiApp.stage.addChild(
    background,
    crossword.container,
    acrossContainer,
    downContainer,
    timeToast.container,
    blurGraphics,
    startModal.container
  );
}

function Start() {
  blurGraphics.renderable = false;
  const timerManager = new TimerManager();
  timer = timerManager.createTimer(1000);

  timer.loop = true;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  timer.on("start", function (_elapsed) {
    console.log("timer started");
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  timer.on("repeat", function (_elapsed, repeat) {
    elapsedTime = repeat;
    timeToast.text = repeat + " seconds elapsed";
  });

  timer.start();
  //main update loop
  pixiApp.ticker.add(() => {
    timerManager.update();
    if (crossword.checkCrossword()) {
      //end game logic
      End();
    }
  });
}
function End() {
  timer.stop();
  pixiApp.ticker.stop();
  blurGraphics.renderable = true;
  const endModal = new EndModal(elapsedTime + " sec", "100%", 200, () => {
    console.log("end");
    if (window.history.length > 1) {
      history.back();
    } else {
      window.location.href = "/education/unitselector";
    }
  });

  endModal.container.position.set(pixiApp.screen.width / 2, 250);
  pixiApp.stage.addChild(endModal.container);
}
