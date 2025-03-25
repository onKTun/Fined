//copy this for your game script file
/* eslint-disable @typescript-eslint/no-unused-vars */

/*
have it be a long ass freaking strip
    2 states
        car stationary
        ending animation where strip stops moving and then car starts moving
when car passes the end trigger the end script
every question right is a speed up and wrong is speed down (have a multiplier)

have everything not interactive until start

*/
import {
  Application,
  Container,
  DisplayObject,
  Graphics,
  Sprite,
  Text,
  TextStyle,
  Texture,
  TilingSprite,
} from "pixi.js";

import backgroundImage from "public/assets/backgrounds/fined_background_1.svg";
import { GameManager } from "src/components/pixigame/GameManager";

import grass from "public/assets/activity/grass-background.jpg";
import asphalt from "public/assets/activity/asphalt-background.jpg";
import car from "public/assets/activity/red-car.png";
import { PixiMcqManager } from "src/components/pixigame/PixiMcqManager";
import { Button } from "@pixi/ui";
import { StartModal } from "src/components/pixigame/ui/StartModal";
import TimerManager from "utils/pixiJS/time utils/TimerManager";
import Timer from "utils/pixiJS/time utils/Timer";
import PixiActivityToast from "src/components/pixigame/ui/PixiActivityToast";
import { EndModal } from "src/components/pixigame/ui/EndModal";

let pixiApp: Application;
let gameData: JSONValue;
let gameManager: GameManager;
let blurGraphics: Graphics;

let timer: Timer;
let elapsedTime: number;
let timeToast: PixiActivityToast;

let asphaltSprite: TilingSprite;
const asphaltWidth = 924 * 2;
let carSprite: Sprite;
let speedMultiplier: number = 1;

let buttons: Button[];
let mcqManager: PixiMcqManager;

export default function RacingGameScript(app: Application, data: JSONValue) {
  pixiApp = app;
  gameData = data;
  const backgroundTexture = Texture.from(backgroundImage.src);
  const background = new Sprite(backgroundTexture);
  pixiApp.stage.addChild(background);

  gameManager = new GameManager({
    loadFunction: load,
    startFunction: start,
    endFunction: end,
  });
}

function load() {
  //grass
  const grassSprite = Sprite.from(grass.src);
  grassSprite.setTransform(0, 131);
  grassSprite.width = 924;
  grassSprite.height = 517;
  pixiApp.stage.addChild(grassSprite);

  //setup questions and answers
  const mcqContainer = new Container();
  const questionText = new Text(
    "Loading...",
    new TextStyle({
      fill: "FFFFFF",
      fontSize: 20,
    })
  );
  questionText.resolution = 3;
  const questionSubtitle = new Text(
    "Select answer below",
    new TextStyle({
      fill: "FFFFFF",
      fontSize: 16,
    })
  );
  questionSubtitle.resolution = 3;
  const mcqBackingGraphics = new Graphics();
  mcqBackingGraphics.beginFill("000000");
  mcqBackingGraphics.drawRect(0, 0, 924, 349);
  mcqBackingGraphics.alpha = 0.3;
  //answers
  let answerTexts: Text[];
  const mcqData: McqQuestion[] = gameData as McqQuestion[];

  const answerGraphics1 = new Graphics()
    .beginFill("FF3B3B")
    .drawRoundedRect(0, 0, 213, 132, 10);
  const answerText1 = new Text(
    "",
    new TextStyle({
      fill: "FFFFFF",
      fontSize: 18,
      wordWrap: true,
      wordWrapWidth: 200,
    })
  );
  answerText1.anchor.set(0.5);
  answerText1.setTransform(213 / 2, 132 / 2);
  answerGraphics1.addChild(answerText1);
  const button1 = new Button(answerGraphics1);

  const answerGraphics2 = new Graphics()
    .beginFill("3B72FF")
    .drawRoundedRect(0, 0, 213, 132, 10);
  const answerText2 = new Text(
    "",
    new TextStyle({
      fill: "FFFFFF",
      fontSize: 18,
      wordWrap: true,
      wordWrapWidth: 200,
    })
  );
  answerText2.anchor.set(0.5);
  answerText2.setTransform(213 / 2, 132 / 2);
  answerGraphics2.addChild(answerText2);
  const button2 = new Button(answerGraphics2);

  const answerGraphics3 = new Graphics()
    .beginFill("FF863B")
    .drawRoundedRect(0, 0, 213, 132, 10);
  const answerText3 = new Text(
    "",
    new TextStyle({
      fill: "FFFFFF",
      fontSize: 18,
      wordWrap: true,
      wordWrapWidth: 200,
    })
  );
  answerText3.anchor.set(0.5);
  answerText3.setTransform(213 / 2, 132 / 2);
  answerGraphics3.addChild(answerText3);
  const button3 = new Button(answerGraphics3);

  answerTexts = [answerText1, answerText2, answerText3];

  mcqManager = new PixiMcqManager(mcqData, answerTexts, questionText);
  mcqManager.updateQuestionAndAnswers(0);
  buttons = [button1, button2, button3];
  //setButtons(mcqManager.currentQuestion);

  const buttonContainer = new Container();
  buttonContainer.addChild(answerGraphics1, answerGraphics2, answerGraphics3);
  answerGraphics2.setTransform(233);
  answerGraphics3.setTransform(233 * 2);
  buttonContainer.setTransform(110, 183);
  questionText.setTransform(123, 108);
  questionSubtitle.setTransform(123, 130);

  mcqContainer.addChild(
    mcqBackingGraphics,
    buttonContainer,
    questionText,
    questionSubtitle
  );

  mcqContainer.setTransform(0, 299);
  pixiApp.stage.addChild(mcqContainer);

  //asphalt
  const asphaltTexture = Texture.from(asphalt.src);
  asphaltSprite = new TilingSprite(asphaltTexture, asphaltWidth, 101);
  asphaltSprite.tileScale.set(0.1);
  //draw white lines on asphalt
  const asphaltGraphics = new Graphics();

  asphaltGraphics.beginFill("FFFFFF");
  for (let i = 0; i <= (asphaltWidth - 200) / 136; i++) {
    asphaltGraphics.drawRect(i * 136, 46, 46, 7);
  }
  asphaltGraphics.endFill();
  asphaltGraphics.beginFill("B3B3B3");
  asphaltGraphics.drawRect(asphaltWidth - 150, 0, 6, 101);
  asphaltGraphics.drawRect(asphaltWidth - 135, 0, 4, 101);
  asphaltGraphics.drawRect(asphaltWidth - 125, 0, 4, 101);
  const asphaltText = new Text(
    "Finish",
    new TextStyle({
      fill: "B3B3B3",
    })
  );
  asphaltText.anchor.set(0.5);
  asphaltText.setTransform(
    asphaltWidth - 100,
    asphaltSprite.height / 2,
    1,
    1,
    Math.PI / 2
  );
  asphaltSprite.addChild(asphaltGraphics, asphaltText);
  asphaltSprite.setTransform(0, 223);
  pixiApp.stage.addChild(asphaltSprite);

  //red car
  carSprite = Sprite.from(car.src);
  carSprite.setTransform(0, 223);
  pixiApp.stage.addChild(carSprite);

  //timer toast
  timeToast = new PixiActivityToast(44, 190, 20, "Time");
  timeToast.container.setTransform(708, 21);
  pixiApp.stage.addChild(timeToast.container);

  //blur
  blurGraphics = new Graphics();
  blurGraphics.beginFill(0x000000);
  blurGraphics.drawRect(0, 0, pixiApp.screen.width, pixiApp.screen.height);
  blurGraphics.alpha = 0.5;
  //start modal
  const startModal = new StartModal(
    "Value Arranger",
    "Students will add up cash and coins to match the total balance due. When the game starts, you'll see a bank with different bills and coins. Use these bills and coins to add up to the total sum due by dragging them towards the left side of the screen. If you would like to remove a bill, drag it outside.",
    () => {
      gameManager.setState(1);
    }
  );
  startModal.container.position.set(pixiApp.screen.width / 2, 100);
  pixiApp.stage.addChild(blurGraphics, startModal.container);

  return true;
}

function start() {
  setButtons(mcqManager.currentQuestion);
  blurGraphics.renderable = false;

  //timer
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

  //main update loop
  pixiApp.ticker.add(() => {
    timerManager.update();
    if (asphaltSprite.x + asphaltWidth > 924) {
      asphaltSprite.x -= 1 * speedMultiplier;
    } else if (carSprite.x < 1000) {
      //end animation
      carSprite.x += 1 * speedMultiplier;
    } else {
      gameManager.setState(4);
      pixiApp.ticker.stop();
    }
  });
  timer.start();

  return true;
}

function end() {
  blurGraphics.renderable = true;
  const endModal = new EndModal(elapsedTime + "", "100", 200);
  endModal.container.position.set(pixiApp.screen.width / 2, 200);
  pixiApp.stage.addChild(endModal.container);
  clearButtons();
  return true;
}

function setButtons(currentQuestion: McqQuestion) {
  for (let index = 0; index < currentQuestion.answerChoices.length; index++) {
    const answerChoice = currentQuestion.answerChoices[index];
    buttons[index].onPress.disconnectAll();
    buttons[index].onPress.connect(() => {
      mcqManager.submitAnswer(answerChoice, onCorrect, onIncorrect);
    });
  }
}
function clearButtons() {
  buttons.forEach((button) => {
    button.onPress.disconnectAll();
  });
}
function onCorrect() {
  console.log("Correct!");
  speedMultiplier += 1;
  nextQuestion();
}
function onIncorrect() {
  console.log("Incorrect.");
  speedMultiplier -= 1;
  nextQuestion();
}

function nextQuestion() {
  mcqManager.randomQuestion();
  setButtons(mcqManager.currentQuestion);
}
