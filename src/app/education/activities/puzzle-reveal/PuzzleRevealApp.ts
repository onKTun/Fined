import {
    Application,
    Sprite,
    Texture,
    Graphics,
    Container,
    Text,
    TextStyle,
    DisplayObject,
    Rectangle,
    BLEND_MODES
  } from "pixi.js";
  import TimerManager from "utils/pixiJS/time utils/TimerManager";
  import Timer from "utils/pixiJS/time utils/Timer";
  import OptionBox from "./OptionBox";
  import { markComplete } from "utils/supabase/lessonProgressService";
  import { StartModal } from "../../../../components/pixigame/ui/StartModal";
  import clock from "public/assets/activity/clock.svg";
  import { EndModal } from "src/components/pixigame/ui/EndModal";
  import puzzleImg from "public/assets/activity/puzzleReveal/iLoveLeg.jpg";
  import optionData from "src/data/puzzleReveal.json"

  //Dimensions for puzzle
  const puzzleDimensions = { width: 440, height: 288, x: 230, y: 50 }; //5 (88)width 6 (48)height

  //colors for option boxes
  const optionBoxColors = ["FF8254", "FFC954", "549EFF", "4CCF53"];

  const questionBlockDimensions = {width: 100, height: 100, x:230, y:100};

  //option box dimensions, x are different for spacing purposes
  const optionBoxWidth = 194;
  const optionBoxHeight = 140;
  const optionBoxY = 450;
  const optionBoxRad = 10;
  const optionBoxDimensions = [
    {
      width: optionBoxWidth, height:optionBoxHeight, x: 15, y: optionBoxY, radius: optionBoxRad
    },
    {
      width: optionBoxWidth, height:optionBoxHeight, x: 245, y: optionBoxY, radius: optionBoxRad
    },
    {
      width: optionBoxWidth, height:optionBoxHeight, x: 470, y: optionBoxY, radius: optionBoxRad
    },
    {
      width: optionBoxWidth, height:optionBoxHeight, x: 690, y: optionBoxY, radius: optionBoxRad
    },
  ];

  //variables
  let pixiApp : Application;

  let optionBank : OptionBox[] =[];
  let overlayArray: Graphics[] = [];
  let optionArray: any[] = [];

  let overlayGraphic: Graphics;
  let questionBlockGraphic: Graphics;

  let overlayContainter: Container;
  let optionsContainer: Container;
  let puzzleContainer: Container;
  let questionBlockContainer: Container;

  let revealedPieces = 0;
  let questionIndex = 0;
  
  
  let piecesRemainingText: Text;
  let timeText: Text;
  let questionBlockText: Text;

  let timer: Timer;

  let piecesLeft: number;


  let onStart: () => void;

  //default function
  export default function puzzleRevealScript(app: Application, data:JSONValue) {
    pixiApp = app;
    setup();
    createOptions(data);

    //KevinGpt
    const totalTime = 60;
    let remainingTime = totalTime;
    const timerManager = new TimerManager();
      timer = timerManager.createTimer(1000);
    
      timer.loop = true;
    
      timer.on("repeat", function (_elapsed, repeat) {
        remainingTime = totalTime - repeat;
        updateTime(remainingTime);

        if (remainingTime <= 0){
          timer.stop();
          console.log("Time is up!");
        }
      });

      pixiApp.ticker.add(() => {
        timerManager.update();
      });

      onStart = () => {
        remainingTime = totalTime;
        timer.start();
      };

      const instruction = new StartModal(
          "Welcome to Puzzle Reveal. This activity will test you on your knowledge of finance ",
          "When the game starts, you'll see 4 different boxes with different options. You will have 60 seconds too complete this activity, choose the right answer to reveal more of the puzzle!",
          10,
          onStart
        );

      instruction.container.position.set(pixiApp.screen.width / 2, 200);
      pixiApp.stage.addChild(
        instruction.container,
      );
  }

  function setup(){
    
    //creates puzzle container and puzzle
    puzzleContainer = new Container();
    const puzzleTexture = Texture.from(puzzleImg.src);
    const puzzle = new Sprite(puzzleTexture);

    puzzle.width = puzzleDimensions.width;
    puzzle.height = puzzleDimensions.height;
    puzzle.x = puzzleDimensions.x;
    puzzle.y = puzzleDimensions.y;

    puzzleContainer.addChild(puzzle);

    pixiApp.stage.addChild(puzzleContainer);

    //overlay on puzzle, black boxes in array
    overlayArray = [];
    overlayContainter = new Container();
    for (let y = 0; y < 2; y++){
      for (let i = 0; i < 5; i++){
        overlayGraphic = new Graphics();
        overlayGraphic.beginFill(0x000000);
        //230 is the x value of puzzle added with i * 88 which is 440 (width) / 5, 5o is the y value of puzzle added with y * 144 which is 288 (height) / 2, 88 and 144 are width and height values
        overlayGraphic.drawRect(230 + (i * 88), 50 + (y * 144), 88, 144);
        overlayArray.push(overlayGraphic);
        overlayGraphic.endFill();
        overlayContainter.addChild(overlayGraphic);
      }
    }
    piecesLeft = overlayArray.length;

    pixiApp.stage.addChild(overlayContainter);    

    //More KevinGPT
    const scoreBoxDimensions = {
      width: 190,
      height: 50,
      x: 120,
      y: 50,
      radius: 10,
    };

    const piecesRemainingContainer = new Container();
      piecesRemainingContainer.position.set(
      scoreBoxDimensions.x,
      scoreBoxDimensions.y
    );
    const piecesRemainingGraphics = new Graphics();

    piecesRemainingGraphics.pivot.set(
      scoreBoxDimensions.width / 2,
      scoreBoxDimensions.height / 2
    );
    piecesRemainingGraphics.beginFill("ffffff");
    piecesRemainingGraphics.drawRoundedRect(
      0,
      0,
      scoreBoxDimensions.width,
      scoreBoxDimensions.height,
      scoreBoxDimensions.radius
    );
    piecesRemainingText = new Text(
        "10 Pieces Remaining",
        new TextStyle({
          fontFamily: "Helvetica",
          fontSize: 16,
          wordWrap: true,
          wordWrapWidth: scoreBoxDimensions.width,
          align: "right",
        })
      );
    
      piecesRemainingText.anchor.set(0.5);
      piecesRemainingContainer.addChild(piecesRemainingGraphics, piecesRemainingText);
      pixiApp.stage.addChild(piecesRemainingContainer);

      //AND SOME MORE KevinGPT
      const svgImage = Texture.from(clock.src);
      const svgClock = new Sprite(svgImage);
      const timeContainer = new Container();
        timeContainer.position.set(
          pixiApp.screen.width - scoreBoxDimensions.x,
          scoreBoxDimensions.y
        );
        const timeBoxGraphics = new Graphics();
      
        const timeBoxSVGContainerGraphic = new Graphics();
        timeBoxSVGContainerGraphic.beginFill("#3385FF");
        timeBoxSVGContainerGraphic.drawRoundedRect(-90, -15, 30, 30, 4);
      
        timeBoxGraphics.pivot.set(
          scoreBoxDimensions.width / 2,
          scoreBoxDimensions.height / 2
        );
        timeBoxGraphics.beginFill("ffffff");
        timeBoxGraphics.drawRoundedRect(
          -10,
          0,
          scoreBoxDimensions.width + 10,
          scoreBoxDimensions.height,
          scoreBoxDimensions.radius
        );
        timeText = new Text(
          "Time Remaining: 60",
          new TextStyle({
            fontFamily: "Helvetica",
            fontSize: 16,
            wordWrap: true,
            wordWrapWidth: scoreBoxDimensions.width + 10,
            align: "left",
          })
        );
      
        timeText.anchor.set(0.5);
        timeText.x = 9;
        timeText.y = -1;
      
        svgClock.width = timeBoxSVGContainerGraphic.width - 10;
        svgClock.height = timeBoxSVGContainerGraphic.height - 10;
        svgClock.position.set(-85, -10);
      
        timeContainer.addChild(
          timeBoxGraphics,
          timeText,
          timeBoxSVGContainerGraphic,
          svgClock
        );

        pixiApp.stage.addChild(timeContainer);
        
        // questionBlockGraphic = new Graphics();
        // questionBlockGraphic.beginFill(0xffffff);
        // questionBlockGraphic.drawRect(questionBlockDimensions.x, questionBlockDimensions.y, questionBlockDimensions.width, questionBlockDimensions.height);
        // questionBlockGraphic.endFill();

        // questionBlockContainer = new Container();

        // questionBlockText = new Text(
        //   "Define the Following: ",
        //   new TextStyle({
        //     fontFamily: "Helvetica",
        //     fontSize: 16,
        //     wordWrap: true,
        //     wordWrapWidth: questionBlockDimensions.width + 10,
        //     align: "center",
        //   })
        // );
        // const questionText = new Text(this.description, boxTextStyle);
        // boxText.anchor.set(0.0);
        // boxText.x = boxDimensions.x + (boxDimensions.width / 4);
        // boxText.y = boxDimensions.y + (boxDimensions.height / 2);

        // boxContainer.addChild(boxText);

        // this.boxContainer.eventMode = "static";
        // this.boxContainer.cursor = "pointer";
        // questionBlockContainer.addChild(questionBlockGraphic, questionBlockText);

        // pixiApp.stage.addChild(questionBlockContainer);
        
  }

  function createOptions(jsonData: JSONValue) {
    //assigns optionArray to data in ./data/puzzleReveal
    optionArray = jsonData["optionArray"];
    optionsContainer = new Container();
    console.log(optionArray);
    optionBank = [];
    //xIndex to assign certain squares, certain x values
    let xIndex = 0;
    
    for (let j = 0; j < 4; j++){

      //if any go out of bounds, return
        if (xIndex >= 4){
          return;
        }
        if (questionIndex >= optionArray.length){
          return;
        }

        //assigns new OptionBox object to values from optionArray - values from the json file
        const optionBox = new OptionBox(
          optionArray[j]["description"], 
          optionArray[j]["correct"], 
          optionBoxDimensions[xIndex],
          optionBoxColors[xIndex]
        );
        optionsContainer.addChild(optionBox.boxContainer);
        optionBank.push(optionBox);
        xIndex++;
        questionIndex++;
        pixiApp.stage.addChild(optionsContainer);
        //event listener for click
        optionBox.boxContainer.on("pointerdown", onClick, optionBox);

    };  
  }

    
    function onClick(){
      //if value of the option is true

      
      if (this.correct === true){

        //random piece from 0 - 30 ; to pick a random overlay square to become invisible
        revealedPieces = Math.floor((Math.random() * overlayArray.length));


        //checks if overlay square is already invisible
        if (overlayArray[revealedPieces].visible == false){

          //while loop to find a square that is not invisible
          while (overlayArray[revealedPieces].visible == false){
            revealedPieces = Math.floor((Math.random() * overlayArray.length));
            // console.log("rev Piec", revealedPieces);
          }
        }
          // console.log("reeval peice", revealedPieces);

          //if square is visible, make it invisible
          console.log("True!", this.correct);
          overlayArray[revealedPieces].visible = false;
          
          
          piecesLeft--;
          piecesRemainingText.text = piecesLeft + " Pieces Remaining";
        // changeQuestions();
            
      }
      else {
        console.log("False!", this.correct);
      }
    }

    function changeQuestions(){
      //to be created
    }
 
    //This entire timer was KevinGPT'ed
    function updateTime(timeElapsed) {
      timeText.text = "Time Remaining: " + timeElapsed;
    }