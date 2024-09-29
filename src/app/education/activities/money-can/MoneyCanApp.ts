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
} from "pixi.js";
import backgroundImage from "public/assets/backgrounds/fined_background_1.svg";

const cardDimensions = { width: 187, height: 275, radius: 10 };

const fontStyle = new TextStyle({
  fontFamily: "Helvetica",
  fontSize: 16,
  wordWrap: true,
  wordWrapWidth: cardDimensions.width - 10,
  align: "center",
});

export default function moneyCanScript(pixiApp: Application) {
  setup(pixiApp);
  propagateCards(testData, pixiApp);
  //main update loop
  pixiApp.ticker.add(() => {});
}

function setup(pixiApp: Application) {
  //setup background
  const backgroundTexture = Texture.from(backgroundImage.src);
  const background = new Sprite(backgroundTexture);
  background.width = pixiApp.screen.width;
  background.height = pixiApp.screen.height;
  pixiApp.stage.addChild(background);

  //graphics for card regions
  let cardRegion = new Graphics();
  cardRegion.lineStyle(2, "ffffff");
  cardRegion.drawRoundedRect(
    (pixiApp.screen.width - cardDimensions.width) / 2,
    80,
    cardDimensions.width,
    cardDimensions.height,
    cardDimensions.radius
  ); //card bank
  cardRegion.drawRoundedRect(
    (pixiApp.screen.width - 2 * cardDimensions.width) / 4,
    350,
    cardDimensions.width,
    cardDimensions.height,
    cardDimensions.radius
  ); //left
  cardRegion.drawRoundedRect(
    pixiApp.screen.width -
      ((pixiApp.screen.width - 2 * cardDimensions.width) / 4 +
        cardDimensions.width),
    350,
    cardDimensions.width,
    cardDimensions.height,
    cardDimensions.radius
  ); //right

  // Add it to the stage to render
  pixiApp.stage.addChild(cardRegion);
}

function propagateCards(jsonData: object, pixiApp: Application) {
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
    const container = new Container();
    container.x = (pixiApp.screen.width - cardDimensions.width) / 2;
    container.y = 80;
    pixiApp.stage.addChild(container);

    //card graphics
    const card = new Graphics();
    card.beginFill("ffffff");
    card.drawShape(cardShape);
    container.addChild(card);

    //description text
    const text = new Text(cardsArray[0]["description"], fontStyle);
    text.anchor.set(0.5);
    text.x = cardDimensions.width / 2;
    text.y = cardDimensions.height / 2;
    container.addChild(text);

    card.eventMode = "static";
    console.log(card.isInteractive());
  }
}
