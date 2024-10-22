import {
  Graphics,
  RoundedRectangle,
  Container,
  Text,
  TextStyle,
  Sprite,
  Texture,
} from "pixi.js";
import questionSVG  from "../../../../../public/assets/activity/questionmark.svg";

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
    const whiteTextStyle = new TextStyle({
      fontFamily: "Helvetica",
      fill: "#000000",
      fontSize: 16,
      wordWrap: true,
      wordWrapWidth: cardDimensions.width - 10,
      align: "center",
    });
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

    const cardHeader = new Graphics();
    cardHeader.beginFill("#F7F7F7")
    cardHeader.drawRoundedRect((cardDimensions.width - 150)/2, 20, 150, 40, 8);


    const cardTextStyle = new TextStyle({
      fontFamily: "Helvetica",
      fontSize: 16,
      wordWrap: true,
      wordWrapWidth: this.cardDimensions.width - 10,
      align: "center",
    });
//header for stuff
  const headerText = new Text("Money Can/Cannot", cardTextStyle);
  headerText.anchor.set(0.5);
  headerText.x = cardDimensions.width / 2;
  headerText.y = 40;

  const questionSVGTexture = Texture.from(questionSVG.src);
  const questionMark = new Sprite(questionSVGTexture);
  questionMark.width = 20;
  questionMark.height = 20;
  this.cardContainer.addChild(questionMark);

    this.cardContainer.addChild(cardHeader, headerText)
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
