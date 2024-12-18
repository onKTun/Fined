import {
  Application,
  Sprite,
  Texture,
  Graphics,
  Container,
  Text,
  TextStyle,
  DisplayObject,
} from "pixi.js";
import TimerManager from "utils/pixiJS/time utils/TimerManager";
import Timer from "utils/pixiJS/time utils/Timer";
import backgroundImage from "public/assets/backgrounds/fined_background_1.svg";
import CardObject from "src/app/education/activities/money-can/CardObject";
import { markComplete } from "utils/supabase/lessonProgressService";
import { InstructionModal } from "../ActivityModals";
import clock from "public/assets/activity/clock.svg";

const cardDimensions = { width: 187, height: 275, radius: 10 };
let dragTarget: CardObject | null;
let pixiApp: Application;

let cardBank: CardObject[];

let cardBankContainer: Container;
let correctContainer: Container;
let wrongContainer: Container;

let cardsRemainingText: Text;
let cardsLeft: number;
let timeText: Text;
let timer: Timer;

let onStart: () => void;

const whiteTextStyleBold = new TextStyle({
  fontFamily: "Helvetica",
  fill: "#ffffff",
  fontSize: 16,
  wordWrap: true,
  wordWrapWidth: cardDimensions.width - 10,
  align: "center",
  fontWeight: "600",
});

const subTextCard = new TextStyle({
  fontFamily: "Helvetica",
  fill: "#CCE0FF",
  fontSize: 14,
  wordWrap: true,
  wordWrapWidth: cardDimensions.width - 10,
  align: "center",
  fontWeight: "500",
});

export default function moneyCanScript(app: Application, data: JSONValue) {
  pixiApp = app;
  setup();

  propagateCards(data);

  const timerManager = new TimerManager();
  timer = timerManager.createTimer(1000);

  timer.loop = true;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  timer.on("start", function (_elapsed) {
    console.log("timer started");
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  timer.on("repeat", function (_elapsed, repeat) {
    updateTime(repeat);
  });

  const blurGraphics = new Graphics();
  blurGraphics.beginFill(0x000000);
  blurGraphics.drawRect(0, 0, pixiApp.screen.width, pixiApp.screen.height);
  blurGraphics.alpha = 0.5;

  onStart = () => {
    timer.start();
    blurGraphics.renderable = false;
  };

  const instruction = new InstructionModal(
    "Welcome to Money Can. This activity will help you understand the ways that Money can help you, and the ways that Money can't help you. ",
    "When the game starts, you'll see cards with different actions written on them. Read each card and think: Can money do this? If yes, put the card in the Money Can pile. If no, put it in the Money Cannot pile.",
    10,
    onStart
  );

  instruction.container.position.set(pixiApp.screen.width / 2, 200);

  pixiApp.stage.addChild(
    correctContainer,
    wrongContainer,
    blurGraphics,
    instruction.container
  );
  //main update loop
  pixiApp.ticker.add(() => {
    timerManager.update();
  });
}

function setup() {
  //setup background
  const backgroundTexture = Texture.from(backgroundImage.src);
  const background = new Sprite(backgroundTexture);

  const svgImage = Texture.from(clock.src);
  const svgClock = new Sprite(svgImage);

  background.width = pixiApp.screen.width;
  background.height = pixiApp.screen.height;
  pixiApp.stage.addChild(background);

  //cards left
  const scoreBoxDimensions = {
    width: 190,
    height: 50,
    x: 120,
    y: 50,
    radius: 10,
  };
  const cardsRemainingContainer = new Container();
  cardsRemainingContainer.position.set(
    scoreBoxDimensions.x,
    scoreBoxDimensions.y
  );
  const cardsRemainingGraphics = new Graphics();

  cardsRemainingGraphics.pivot.set(
    scoreBoxDimensions.width / 2,
    scoreBoxDimensions.height / 2
  );
  cardsRemainingGraphics.beginFill("ffffff");
  cardsRemainingGraphics.drawRoundedRect(
    0,
    0,
    scoreBoxDimensions.width,
    scoreBoxDimensions.height,
    scoreBoxDimensions.radius
  );
  cardsRemainingText = new Text(
    "0 Cards Remaining",
    new TextStyle({
      fontFamily: "Helvetica",
      fontSize: 16,
      wordWrap: true,
      wordWrapWidth: scoreBoxDimensions.width,
      align: "right",
    })
  );

  cardsRemainingText.anchor.set(0.5);

  cardsRemainingContainer.addChild(cardsRemainingGraphics, cardsRemainingText);

  //timer
  const timeContainer = new Container();
  timeContainer.position.set(
    pixiApp.screen.width - scoreBoxDimensions.x,
    scoreBoxDimensions.y
  );
  const timeBoxGraphics = new Graphics();

  const timeBoxSVGContainerGraphic = new Graphics();
  timeBoxSVGContainerGraphic.beginFill("#3385FF");
  timeBoxSVGContainerGraphic.drawRoundedRect(-90, -15, 30, 30, 4);

  timeBoxGraphics.pivot.set(
    scoreBoxDimensions.width / 2,
    scoreBoxDimensions.height / 2
  );
  timeBoxGraphics.beginFill("ffffff");
  timeBoxGraphics.drawRoundedRect(
    -10,
    0,
    scoreBoxDimensions.width + 10,
    scoreBoxDimensions.height,
    scoreBoxDimensions.radius
  );
  timeText = new Text(
    "Time Elapsed: 0",
    new TextStyle({
      fontFamily: "Helvetica",
      fontSize: 16,
      wordWrap: true,
      wordWrapWidth: scoreBoxDimensions.width + 10,
      align: "left",
    })
  );

  timeText.anchor.set(0.5);
  timeText.x = 9;
  timeText.y = -1;

  svgClock.width = timeBoxSVGContainerGraphic.width - 10;
  svgClock.height = timeBoxSVGContainerGraphic.height - 10;
  svgClock.position.set(-85, -10);

  timeContainer.addChild(
    timeBoxGraphics,
    timeText,
    timeBoxSVGContainerGraphic,
    svgClock
  );

  //initialize containers
  cardBankContainer = new Container();
  cardBankContainer.pivot.set(
    cardDimensions.width / 2,
    cardDimensions.height / 2
  );
  cardBankContainer.x = pixiApp.screen.width / 2;
  cardBankContainer.y = 217.5;
  correctContainer = new Container();
  correctContainer.pivot.set(
    cardDimensions.width / 2,
    cardDimensions.height / 2
  );
  correctContainer.x = pixiApp.screen.width / 4;
  correctContainer.y = 487.5;
  wrongContainer = new Container();
  wrongContainer.pivot.set(cardDimensions.width / 2, cardDimensions.height / 2);
  wrongContainer.x = pixiApp.screen.width - pixiApp.screen.width / 4;
  wrongContainer.y = 487.5;

  //graphics for card regions
  const cardBankGraphics = new Graphics();
  cardBankGraphics.lineStyle(1, "ffffff");
  cardBankGraphics.beginFill("63A4FF");
  cardBankGraphics.drawRoundedRect(
    0,
    0,
    cardDimensions.width,
    cardDimensions.height,
    cardDimensions.radius
  ); //card bank
  cardBankGraphics.beginFill("#3385FF");
  cardBankGraphics.drawRoundedRect(
    (cardDimensions.width - 100) / 2,
    (cardDimensions.height - 180) / 2,
    100,
    180,
    8
  );
  cardBankGraphics.endFill();

  const cardAnswerGraphicsTrue = new Graphics();
  cardAnswerGraphicsTrue.lineStyle(1, "ADCEFF");
  cardAnswerGraphicsTrue.beginFill("63A4FF");
  cardAnswerGraphicsTrue.drawRoundedRect(
    0,
    0,
    cardDimensions.width,
    cardDimensions.height,
    cardDimensions.radius
  ); //right

  //square contianers around the text
  cardAnswerGraphicsTrue.beginFill("#3385FF");
  cardAnswerGraphicsTrue.drawRoundedRect(
    (cardDimensions.width - 150) / 2,
    (cardDimensions.height - 70) / 2,
    150,
    70,
    8
  );
  cardAnswerGraphicsTrue.endFill();

  const cardAnswerGraphicsWrong = new Graphics();
  cardAnswerGraphicsWrong.lineStyle(1, "#ADCEFF");
  cardAnswerGraphicsWrong.beginFill("63A4FF");
  cardAnswerGraphicsWrong.drawRoundedRect(
    0,
    0,
    cardDimensions.width,
    cardDimensions.height,
    cardDimensions.radius
  ); //left

  cardAnswerGraphicsWrong.beginFill("#3385FF");
  cardAnswerGraphicsWrong.drawRoundedRect(
    (cardDimensions.width - 150) / 2,
    (cardDimensions.height - 70) / 2,
    150,
    70,
    8
  );
  cardAnswerGraphicsWrong.endFill();
  //container texts
  const containerTrueText = new Text("Money Can", whiteTextStyleBold);
  containerTrueText.anchor.set(0.5);
  containerTrueText.x = cardDimensions.width / 2;
  containerTrueText.y = cardDimensions.height / 2 - 10;

  const containerDragTrue = new Text("(Drag Card Here)", subTextCard);
  containerDragTrue.anchor.set(0.5);
  containerDragTrue.x = cardDimensions.width / 2;
  containerDragTrue.y = cardDimensions.height / 2 + 10;

  const containerDragFalse = new Text("(Drag Card Here)", subTextCard);
  containerDragFalse.anchor.set(0.5);

  containerDragFalse.x = cardDimensions.width / 2;
  containerDragFalse.y = cardDimensions.height / 2 + 10;

  const containerWrongText = new Text("Money Can Not", whiteTextStyleBold);
  containerWrongText.anchor.set(0.5);
  containerWrongText.x = cardDimensions.width / 2;
  containerWrongText.y = cardDimensions.height / 2 - 10;

  // Add card components to containers
  cardBankContainer.addChild(cardBankGraphics);
  correctContainer.addChild(
    cardAnswerGraphicsTrue,
    containerTrueText,
    containerDragTrue
  );
  wrongContainer.addChild(
    cardAnswerGraphicsWrong,
    containerWrongText,
    containerDragFalse
  );

  // Add it to the stage to render
  pixiApp.stage.addChild(
    cardBankContainer,

    cardsRemainingContainer,
    timeContainer
  );

  pixiApp.stage.eventMode = "static";
  pixiApp.stage.hitArea = pixiApp.screen;
  pixiApp.stage.on("pointerup", onDragEnd);
  pixiApp.stage.on("pointerupoutside", onDragEnd);
}

function propagateCards(jsonData: JSONValue) {
  const cardsArray: JSONArray = jsonData["cardsArray"];
  cardsLeft = cardsArray.length;
  cardsRemainingText.text = cardsLeft + " Cards Remaining";
  cardBank = [];
  for (const card in cardsArray) {
    const cardObject = new CardObject(
      cardsArray[card]["description"],
      cardsArray[card]["answer"],
      cardDimensions
    );
    cardObject.cardContainer.x = pixiApp.screen.width / 2;
    cardObject.cardContainer.y = 217.5;
    cardBank.push(cardObject);
    pixiApp.stage.addChildAt(cardObject.cardContainer, 3);

    cardObject.cardContainer.on("pointerdown", onDragStart, cardObject);
  }
}

function onDragMove(event) {
  if (dragTarget) {
    dragTarget.cardContainer.parent.toLocal(
      event.global,
      pixiApp.stage,
      dragTarget.cardContainer.position
    );
  }
}

function onDragStart() {
  // Store a reference to the data
  // * The reason for this is because of multitouch *
  // * We want to track the movement of this particular touch *

  // eslint-disable-next-line @typescript-eslint/no-this-alias
  dragTarget = this;
  if (dragTarget) {
    dragTarget.cardContainer.alpha = 0.5;
  }
  pixiApp.stage.on("pointermove", onDragMove);
}

function onDragEnd() {
  if (dragTarget) {
    pixiApp.stage.off("pointermove", onDragMove);
    dragTarget.cardContainer.alpha = 1; //opacity
    //check answer + detect overlap
    //correct container scenario
    if (getOverlapPercent(dragTarget.cardContainer, correctContainer) >= 0.3) {
      if (dragTarget.answer) {
        cardsLeft--;
        cardsRemainingText.text = cardsLeft + " Cards Remaining";

        dragTarget.cardContainer.off("pointerdown", onDragStart);
        dragTarget.cardContainer.x = pixiApp.screen.width / 4;
        dragTarget.cardContainer.y = 487.5;

        cardBank.pop();
      } else {
        dragTarget.cardContainer.x = pixiApp.screen.width / 2;
        dragTarget.cardContainer.y = 217.5;
      }
    }
    //wrong container scenario
    else if (
      getOverlapPercent(dragTarget.cardContainer, wrongContainer) >= 0.3
    ) {
      if (!dragTarget.answer) {
        cardsLeft--;
        cardsRemainingText.text = cardsLeft + " Cards Remaining";

        dragTarget.cardContainer.off("pointerdown", onDragStart);
        dragTarget.cardContainer.x =
          pixiApp.screen.width - pixiApp.screen.width / 4;
        dragTarget.cardContainer.y = 487.5;
        cardBank.pop();
      } else {
        dragTarget.cardContainer.x = pixiApp.screen.width / 2;
        dragTarget.cardContainer.y = 217.5;
      }
    } else {
      dragTarget.cardContainer.x = pixiApp.screen.width / 2;
      dragTarget.cardContainer.y = 217.5;
    }

    if (cardsLeft == 0) {
      endGame();
    }

    dragTarget = null;
  }
}

function isColliding(object1: DisplayObject, object2: DisplayObject): boolean {
  /*
  Recalculates the bounds of the container.
  This implementation will automatically fit the children's bounds into the calculation. Each child's bounds is limited to its mask's bounds or filterArea, if any is applied.
  */
  object1.calculateBounds();
  object2.calculateBounds();

  if (
    object1._bounds.maxX < object2._bounds.minX ||
    object2._bounds.maxX < object1._bounds.minX
  ) {
    return false;
  }
  if (
    object1._bounds.maxY < object2._bounds.minY ||
    object2._bounds.maxY < object1._bounds.minY
  ) {
    return false;
  }

  return true;
}

function getOverlapPercent(object1: DisplayObject, object2: DisplayObject) {
  if (!isColliding(object1, object2)) {
    return 0;
  }

  object1.calculateBounds();
  object2.calculateBounds();

  const lengthX =
    Math.min(object1._bounds.maxX, object2._bounds.maxX) -
    Math.max(object1._bounds.minX, object2._bounds.minX);
  const lengthY =
    Math.min(object1._bounds.maxY, object2._bounds.maxY) -
    Math.max(object1._bounds.minY, object2._bounds.minY);

  const overlapArea = lengthX * lengthY;

  const object1Area =
    (object1._bounds.maxX - object1._bounds.minX) *
    (object1._bounds.maxY - object1._bounds.minY);
  const object2Area =
    (object2._bounds.maxX - object2._bounds.minX) *
    (object2._bounds.maxY - object2._bounds.minY);

  const totalArea = object1Area + object2Area - overlapArea;
  const overlapPercent = overlapArea / totalArea;

  return overlapPercent;
}

function updateTime(timeElapsed) {
  timeText.text = "Time Elapsed: " + timeElapsed;
}

function endGame() {
  console.log("End game called");
  timer.stop();
  markComplete("money-can");
}
