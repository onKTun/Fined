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

const cardDimensions = { width: 187, height: 275, radius: 10 };
let dragTarget: DisplayObject | null;
let pixiApp: Application;

let cardBankContainer: Container;
let correctContainer: Container;
let wrongContainer: Container;

const fontStyle = new TextStyle({
  fontFamily: "Helvetica",
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
  cardBankGraphics.drawRoundedRect(
    0,
    0,
    cardDimensions.width,
    cardDimensions.height,
    cardDimensions.radius
  ); //card bank

  let cardAnswerGraphicsRight = new Graphics();
  cardAnswerGraphicsRight.lineStyle(2, "ffffff");
  cardAnswerGraphicsRight.drawRoundedRect(
    0,
    0,
    cardDimensions.width,
    cardDimensions.height,
    cardDimensions.radius
  ); //right

  let cardAnswerGraphicsWrong = new Graphics();
  cardAnswerGraphicsWrong.lineStyle(2, "ffffff");
  cardAnswerGraphicsWrong.drawRoundedRect(
    0,
    0,
    cardDimensions.width,
    cardDimensions.height,
    cardDimensions.radius
  ); //left

  // Add card graphics to containers
  cardBankContainer.addChild(cardBankGraphics);
  correctContainer.addChild(cardAnswerGraphicsRight);
  wrongContainer.addChild(cardAnswerGraphicsWrong);

  // Add it to the stage to render
  pixiApp.stage.addChild(cardBankContainer, correctContainer, wrongContainer);

  pixiApp.stage.eventMode = "static";
  pixiApp.stage.hitArea = pixiApp.screen;
  pixiApp.stage.on("pointerup", onDragEnd);
  pixiApp.stage.on("pointerupoutside", onDragEnd);
}

function propagateCards(jsonData: object) {
  const cardShape = new RoundedRectangle(
    0,
    0,
    cardDimensions.width,
    cardDimensions.height,
    cardDimensions.radius
  );

  const cardsArray = jsonData["cardsArray"];

  for (const card in cardsArray) {
    //container for whole card
    const cardContainer = new Container();
    cardContainer.pivot.set(
      cardDimensions.width / 2,
      cardDimensions.height / 2
    );
    cardContainer.x = pixiApp.screen.width / 2;
    cardContainer.y = 217.5;
    pixiApp.stage.addChild(cardContainer);

    //card graphics
    const cardGraphics = new Graphics();
    cardGraphics.beginFill("ffffff");
    cardGraphics.drawShape(cardShape);
    cardContainer.addChild(cardGraphics);

    //description text
    const text = new Text(cardsArray[card]["description"], fontStyle);
    text.anchor.set(0.5);
    text.x = cardDimensions.width / 2;
    text.y = cardDimensions.height / 2;
    cardContainer.addChild(text);

    //card interactivity
    cardContainer.eventMode = "static";
    cardContainer.on("pointerdown", onDragStart, cardContainer);
    cardContainer.cursor = "pointer";
  }
}

function onDragMove(event) {
  if (dragTarget) {
    dragTarget.parent.toLocal(event.global, pixiApp.stage, dragTarget.position);
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
    dragTarget.alpha = 1; //opacity

    if (
      getOverlapPercent(dragTarget, correctContainer) < 0.5 &&
      getOverlapPercent(dragTarget, wrongContainer) < 0.5
    ) {
      dragTarget.x = pixiApp.screen.width / 2;
      dragTarget.y = 217.5;
    }

    console.log(isColliding(dragTarget, correctContainer));
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
