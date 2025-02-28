import {
    Graphics,
    Container,
    Text,
    TextStyle,
    RoundedRectangle,
  } from "pixi.js";

  //class for options
  export default class OptionBox{
    //ivars
    readonly description: string;
    readonly correct: boolean;
    readonly boxDimensions: {width: number, height: number, x:number, y:number, radius: number}
    readonly boxContainer: Container;
    readonly color: string;

    //base constructor
    constructor(
        description: string,
        correct:boolean,
        boxDimensions:{width: number, height: number, x: number, y:number, radius:number},
        color: string
    ){

        //assigns var
        this.description = description;
        this.correct = correct;
        this.boxDimensions = boxDimensions;
        this.boxContainer = new Container();
        this.color = color;

        //rectangle var
        const boxShape = new RoundedRectangle(
            boxDimensions.x,
            boxDimensions.y,
            boxDimensions.width,
            boxDimensions.height,
            boxDimensions.radius
        )

        //draws box
        const boxGraphics = new Graphics();
            boxGraphics.beginFill(this.color);
            boxGraphics.drawShape(boxShape);
            this.boxContainer.addChild(boxGraphics);



        //text style for rect
        const boxTextStyle = new TextStyle({
        fontFamily: "Helvetica",
        fontSize: 16,
        wordWrap: true,
        wordWrapWidth: this.boxDimensions.width - 20,
        align: "center",
        fill: "rgba(0,0,0,0.5)",
        });


        //text for rect, description, etc
        const boxText = new Text(this.description, boxTextStyle);
        boxText.anchor.set(0.0);
        boxText.x = boxDimensions.x + (boxDimensions.width / 4);
        boxText.y = boxDimensions.y + (boxDimensions.height / 2);

        //adds text to rect
        this.boxContainer.addChild(boxText);

        //makes object interactive and changes cursor when hovering
        this.boxContainer.eventMode = "static";
        this.boxContainer.cursor = "pointer";
        
    };
   
  }