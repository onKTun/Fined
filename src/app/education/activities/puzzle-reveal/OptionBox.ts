import {
    Graphics,
    Container,
    Text,
    TextStyle,
    RoundedRectangle,
    Rectangle,
  } from "pixi.js";
import { text } from "stream/consumers";

  //class for options
  export default class OptionBox{
    //ivars
    readonly description: string;
    readonly correct: boolean;
    readonly boxDimensions: {width: number, height: number, x:number, y:number, radius: number}
    readonly boxContainer: Container;
    readonly color: string;
    readonly letter: string;

    //base constructor
    constructor(
        description: string,
        correct:boolean,
        boxDimensions:{width: number, height: number, x: number, y:number, radius:number},
        color: string,
        letter: string
    ){

        //assigns var
        this.description = description;
        this.correct = correct;
        this.boxDimensions = boxDimensions;
        this.boxContainer = new Container();
        this.color = color;
        this.letter = letter;
        
        //rectangle var
        const boxShape = new RoundedRectangle(
            boxDimensions.x,
            boxDimensions.y,
            boxDimensions.width,
            boxDimensions.height,
            boxDimensions.radius
        )

        const textBoxShape = new RoundedRectangle(
            boxDimensions.x + 6,
            boxDimensions.y + 45,
            180,
            54,
            5
        )

        //draws box
        const boxGraphics = new Graphics();
            boxGraphics.beginFill(this.color);
            boxGraphics.drawShape(boxShape);
            this.boxContainer.addChild(boxGraphics);



        //text style for rect
        const boxTextStyle = new TextStyle({
        fontFamily: "Helvetica",
        fontSize: 14,
        wordWrap: true,
        wordWrapWidth: this.boxDimensions.width - 20,
        align: "center",
        fill: "0x000000",
        });


        //text for rect, description, etc
        const boxText = new Text(this.description, boxTextStyle);
        boxText.anchor.set(0.5);
        boxText.x = boxDimensions.x + (boxDimensions.width/2);
        boxText.y = boxDimensions.y + (boxDimensions.height / 2);

        const textBox = new Graphics();
        textBox.beginFill("0xFFFFFF");
        textBox.drawShape(textBoxShape);
        textBox.endFill();
        

        //adds text to rect
        this.boxContainer.addChild(boxText);
        this.boxContainer.addChildAt(textBox, 1);

        const letterBox = new RoundedRectangle(
            boxDimensions.x + 6,
            boxDimensions.y + 7,
            26,
            26,
            5
        );

        const letterBoxGraphics = new Graphics();
        letterBoxGraphics.beginFill("0xFFFFFF");
        letterBoxGraphics.drawShape(letterBox);
        letterBoxGraphics.endFill();
        
        const letterText = new Text(this.letter, boxTextStyle);
        letterText.x = letterBox.x + 7;
        letterText.y = letterBox.y + 5;

        this.boxContainer.addChild(letterBoxGraphics);
        this.boxContainer.addChild(letterText);
        
        //makes object interactive and changes cursor when hovering
        this.boxContainer.eventMode = "static";
        this.boxContainer.cursor = "pointer";
        
    };
   
  }