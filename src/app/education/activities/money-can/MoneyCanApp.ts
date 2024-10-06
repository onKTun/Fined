import testData from "src/data/moneycan.json";
import {
  Application,
  Sprite,
  Texture,
  Graphics,
  RoundedRectangle,
  Container,
  Text,
  TextStyle,
  DisplayObject,
} from "pixi.js";
import backgroundImage from "public/assets/backgrounds/fined_background_1.svg";
import CardObject from "utils/pixiJS/CardObject";

const cardDimensions = { width: 187, height: 275, radius: 10 };
let dragTarget: CardObject | null;
let pixiApp: Application;

let cardBankContainer: Container;
let correctContainer: Container;
let wrongContainer: Container;

const whiteTextStyle = new TextStyle({
  fontFamily: "Helvetica",
  fill: "#ffffff",
  fontSize: 16,
  wordWrap: true,
  wordWrapWidth: cardDimensions.width - 10,
  align: "center",
});

export default function moneyCanScript(app: Application) {
  pixiApp = app;
  setup();
  propagateCards(testData);
  //main update loop
  pixiApp.ticker.add(() => {});
}

function setup() {
  //setup background
  const backgroundTexture = Texture.from(backgroundImage.src);
  const background = new Sprite(backgroundTexture);
  background.width = pixiApp.screen.width;
  background.height = pixiApp.screen.height;
  pixiApp.stage.addChild(background);

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
  let cardBankGraphics = new Graphics();
  cardBankGraphics.lineStyle(2, "ffffff");
  cardBankGraphics.beginFill("63A4FF");
  cardBankGraphics.drawRoundedRect(
    0,
    0,
    cardDimensions.width,
    cardDimensions.height,
    cardDimensions.radius
  ); //card bank

  let cardAnswerGraphicsTrue = new Graphics();
  cardAnswerGraphicsTrue.lineStyle(2, "ffffff");
  cardAnswerGraphicsTrue.beginFill("63A4FF");
  cardAnswerGraphicsTrue.drawRoundedRect(
    0,
    0,
    cardDimensions.width,
    cardDimensions.height,
    cardDimensions.radius
  ); //right

  let cardAnswerGraphicsWrong = new Graphics();
  cardAnswerGraphicsWrong.lineStyle(2, "ffffff");
  cardAnswerGraphicsWrong.beginFill("63A4FF");
  cardAnswerGraphicsWrong.drawRoundedRect(
    0,
    0,
    cardDimensions.width,
    cardDimensions.height,
    cardDimensions.radius
  ); //left

  //container texts
  const containerTrueText = new Text("Money Can", whiteTextStyle);
  containerTrueText.anchor.set(0.5);
  containerTrueText.x = cardDimensions.width / 2;
  containerTrueText.y = cardDimensions.height / 2;

  const containerWrongText = new Text("Money Can Not", whiteTextStyle);
  containerWrongText.anchor.set(0.5);
  containerWrongText.x = cardDimensions.width / 2;
  containerWrongText.y = cardDimensions.height / 2;

  // Add card components to containers
  cardBankContainer.addChild(cardBankGraphics);
  correctContainer.addChild(cardAnswerGraphicsTrue, containerTrueText);
  wrongContainer.addChild(cardAnswerGraphicsWrong, containerWrongText);

  // Add it to the stage to render
  pixiApp.stage.addChild(cardBankContainer, correctContainer, wrongContainer);

  pixiApp.stage.eventMode = "static";
  pixiApp.stage.hitArea = pixiApp.screen;
  pixiApp.stage.on("pointerup", onDragEnd);
  pixiApp.stage.on("pointerupoutside", onDragEnd);
}

function propagateCards(jsonData: object) {
  const cardsArray = jsonData["cardsArray"];

  for (const card in cardsArray) {
    const cardObject = new CardObject(
      cardsArray[card]["description"],
      cardsArray[card]["answer"],
      cardDimensions
    );
    cardObject.cardContainer.x = pixiApp.screen.width / 2;
    cardObject.cardContainer.y = 217.5;
    pixiApp.stage.addChild(cardObject.cardContainer);

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
  this.alpha = 0.5;
  dragTarget = this;
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
        dragTarget.cardContainer.off("pointerdown", onDragStart);
        dragTarget.cardContainer.x = pixiApp.screen.width / 4;
        dragTarget.cardContainer.y = 487.5;
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
        dragTarget.cardContainer.off("pointerdown", onDragStart);
        dragTarget.cardContainer.x =
          pixiApp.screen.width - pixiApp.screen.width / 4;
        dragTarget.cardContainer.y = 487.5;
      } else {
        dragTarget.cardContainer.x = pixiApp.screen.width / 2;
        dragTarget.cardContainer.y = 217.5;
      }
    } else {
      dragTarget.cardContainer.x = pixiApp.screen.width / 2;
      dragTarget.cardContainer.y = 217.5;
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
