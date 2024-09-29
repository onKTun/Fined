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

let dragTarget: DisplayObject;
let pixiApp: Application;
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
    card.on("pointerdown", onDragStart, card);

    console.log(card.isInteractive());
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
    dragTarget.alpha = 1;
    //dragTarget = null;
  }
}

/*

    function createBunny(x, y)
    {
        // Create our little bunny friend..
        const bunny = new Sprite(texture);

        // Enable the bunny to be interactive... this will allow it to respond to mouse and touch events
        bunny.eventMode = 'static';

        // This button mode will mean the hand cursor appears when you roll over the bunny with your mouse
        bunny.cursor = 'pointer';

        // Center the bunny's anchor point
        bunny.anchor.set(0.5);

        // Setup events for mouse + touch using the pointer events
        bunny.on('pointerdown', onDragStart, bunny);
    }

    let dragTarget = null;

    app.stage.eventMode = 'static';
    app.stage.hitArea = app.screen;
    app.stage.on('pointerup', onDragEnd);
    app.stage.on('pointerupoutside', onDragEnd);

    function onDragMove(event)
    {
        if (dragTarget)
        {
            dragTarget.parent.toLocal(event.global, null, dragTarget.position);
        }
    }

    function onDragStart()
    {
        // Store a reference to the data
        // * The reason for this is because of multitouch *
        // * We want to track the movement of this particular touch *
        this.alpha = 0.5;
        dragTarget = this;
        app.stage.on('pointermove', onDragMove);
    }

    function onDragEnd()
    {
        if (dragTarget)
        {
            app.stage.off('pointermove', onDragMove);
            dragTarget.alpha = 1;
            dragTarget = null;
        }
    }
})();

*/
