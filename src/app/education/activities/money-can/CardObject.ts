import {
  Graphics,
  RoundedRectangle,
  Container,
  Text,
  TextStyle,
} from "pixi.js";

export default class CardObject {
  readonly description: string;
  readonly answer: boolean;
  readonly cardDimensions: { width: number; height: number; radius: number };
  readonly cardContainer: Container;

  constructor(
    description: string,
    answer: boolean,
    cardDimensions: { width: number; height: number; radius: number }
  ) {
    this.description = description;
    this.answer = answer;
    this.cardDimensions = cardDimensions;

    //container for whole card
    this.cardContainer = new Container();
    this.cardContainer.pivot.set(
      cardDimensions.width / 2,
      cardDimensions.height / 2
    );

    const cardShape = new RoundedRectangle(
      0,
      0,
      cardDimensions.width,
      cardDimensions.height,
      cardDimensions.radius
    );
    //card graphics
    const cardGraphics = new Graphics();
    cardGraphics.beginFill("ffffff");
    cardGraphics.drawShape(cardShape);
    this.cardContainer.addChild(cardGraphics);

    const cardTextStyle = new TextStyle({
      fontFamily: "Helvetica",
      fontSize: 16,
      wordWrap: true,
      wordWrapWidth: this.cardDimensions.width - 10,
      align: "center",
    });

    //description text
    const text = new Text(this.description, cardTextStyle);
    text.anchor.set(0.5);
    text.x = cardDimensions.width / 2;
    text.y = cardDimensions.height / 2;
    this.cardContainer.addChild(text);

    //card interactivity
    this.cardContainer.eventMode = "static";
    this.cardContainer.cursor = "pointer";
  }

  setPosition(x: number, y: number) {
    this.cardContainer.x = x;
    this.cardContainer.y = y;
  }
}
