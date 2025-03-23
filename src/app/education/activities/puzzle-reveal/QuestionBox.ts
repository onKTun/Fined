import {
    Graphics,
    Container,
    Text,
    TextStyle,
    RoundedRectangle,
  } from "pixi.js";

  export default class QuestionBox{
        //ivars
        readonly description: string;
        readonly boxDimensions: {width: number, height: number, x:number, y:number}
        readonly boxContainer: Container;
        //base constructor
        constructor(
            description: string,
            boxDimensions:{width: number, height: number, x: number, y:number},
        ){
    
            //assigns var
            this.description = description;
            this.boxDimensions = boxDimensions;
            this.boxContainer = new Container();
            //rectangle var
            const boxShape = new RoundedRectangle(
                boxDimensions.x,
                boxDimensions.y,
                boxDimensions.width,
                boxDimensions.height,
                4
            )
    
            //draws box
            const boxGraphics = new Graphics();
                boxGraphics.beginFill("0x3F78CC");
                boxGraphics.drawShape(boxShape);
                this.boxContainer.addChild(boxGraphics);
            //text style for rect
            const boxTextStyle = new TextStyle({
            fontFamily: "Helvetica",
            fontSize: 16,
            wordWrap: true,
            wordWrapWidth: this.boxDimensions.width - 20,
            align: "left",
            fill: "0xFFFFFF",
            });
    
    
            //text for rect, description, etc
            const boxText = new Text("Define: " + this.description, boxTextStyle);
            boxText.x = boxDimensions.x + 20;
            boxText.y = boxDimensions.y + 5;
    
            //box for term
            const termBox = new RoundedRectangle(
                boxText.x + 20,
                boxText.y + 5,
                81,
                31,
                2
            );

            //graphic for term box
            const termBoxGraphics = new Graphics();
            termBoxGraphics.beginFill("#2B61B3");
            termBoxGraphics.drawShape(termBox);
            termBoxGraphics.endFill();


            //adds text to rect
            this.boxContainer.addChildAt(termBoxGraphics, 1);
            this.boxContainer.addChild(boxText);
            
        };
       
  }