import {
    Graphics,
    RoundedRectangle,
    Container,
    Text,
    TextStyle,
    Rectangle,
  } from "pixi.js";

  export default class OptionBox{

    readonly description: string;
    readonly correct: boolean;
    readonly boxDimensions: {width: number, height: number, x:number, y:number}
    readonly boxContainer: Container;

    constructor(
        description: string,
        correct:boolean,
        boxDimensions:{width: number, height: number, x: number, y:number}
    ){
        this.description = description;
        this.correct = correct;
        this.boxDimensions = boxDimensions;
        this.boxContainer = new Container();

        const boxShape = new Rectangle(
            boxDimensions.x,
            boxDimensions.y,
            boxDimensions.width,
            boxDimensions.height,
        )

        const boxGraphics = new Graphics();
        boxGraphics.beginFill("0x000000");
        boxGraphics.drawShape(boxShape);
        this.boxContainer.addChild(boxGraphics);
    };
    
  }