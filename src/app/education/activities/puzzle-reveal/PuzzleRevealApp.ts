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
  import QuestionBox from "./QuestionBox";
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

  const questionBlockDimensions = {width: 334, height: 41, x:280, y:400};

  const letters = ["A", "B", "C", "D"];

  //option box dimensions, x are different for spacing purposes
  const optionBoxWidth = 194;
  const optionBoxHeight = 140;
  const optionBoxY = 500;
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

  let questionBank : QuestionBox[] =[];
  let optionBank : OptionBox[] = [];
  let overlayArray: Graphics[] = [];
  let questionArray: any[] = [];

  let overlayGraphic: Graphics;
  let questionBlockGraphic: Graphics;

  let overlayContainter: Container;
  let optionsContainer: Container;
  let puzzleContainer: Container;
  let questionBlockContainer: Container;

  let revealedPieces = 0;
  let optionsIndex = 0;
  let questionIndex = 0;
  
  let piecesRemainingText: Text;
  let timeText: Text;

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
      x: 110,
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

        const optionBlockBackgroundShape = new Rectangle(
          0,
          360,
          900,
          350
        )
        const optionBlockBackground = new Graphics();
        optionBlockBackground.beginFill("0x2568CC");
        optionBlockBackground.drawShape(optionBlockBackgroundShape);
        optionBlockBackground.endFill();

        const optionBlockBackground2Shape = new Rectangle(
          0,
          465,
          900,
          200
        )
        const optionBlockBackground2 = new Graphics();
        optionBlockBackground.beginFill("0x3F78CC");
        optionBlockBackground.drawShape(optionBlockBackground2Shape);
        optionBlockBackground.endFill();

        pixiApp.stage.addChild(optionBlockBackground, optionBlockBackground2);


  }

  function createOptions(jsonData: JSONValue) {

    questionArray = jsonData["questionArray"];

    optionsContainer = new Container();
    questionBlockContainer = new Container();

    questionBank = [];
    optionBank = [];

    optionsIndex = 4;
    questionIndex = 0;

    for (let j = 0; j < questionArray.length; j++){
        
        for (let y = 0; y < 4; y++){

          const optionBox = new OptionBox(
            questionArray[j].options[y]["optionDescription"], 
            questionArray[j].options[y]["correct"], 
            optionBoxDimensions[y],
            optionBoxColors[y],
            letters[y]
          );
          // console.log("optionBox", optionBox);
          // optionsContainer.addChild(optionBox.boxContainer);
          optionBank.push(optionBox);
          optionBox.boxContainer.on("pointerdown", onClick, optionBox);
        }
        const questionBox = new QuestionBox(
          questionArray[j]["description"],
          questionBlockDimensions
        )
        questionBank.push(questionBox);
        //width: number, height: number, x:number, y:number
        // xIndex++;
        
        // pixiApp.stage.addChild(optionsContainer);
    };  
    
    questionBlockContainer.addChild(questionBank[questionIndex].boxContainer);
    pixiApp.stage.addChild(questionBlockContainer);
    for (let i = 0; i < optionsIndex; i ++){
      optionsContainer.addChild(optionBank[i].boxContainer);
      pixiApp.stage.addChild(optionsContainer);
    
    }
    console.log("bank", optionBank);

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
          
        changeQuestions();
            
      }
      else {
        console.log("False!", this.correct);
      }
    }

    function changeQuestions(){

      optionsContainer.removeChildren();
      questionBlockContainer.removeChildren();
      if (optionsIndex >= 39){
        console.log("puzzleComplete!");
          
        return;
      }
      else{
        questionIndex++;
        questionBlockContainer.addChild(questionBank[questionIndex].boxContainer);
        for (let i = optionsIndex; i < optionsIndex + 4; i++){
          console.log("i", i);
          optionsContainer.addChild(optionBank[i].boxContainer);
          pixiApp.stage.addChild(optionsContainer);
        }
      }
      
      optionsIndex += 4;
      
      // optionsContainer.
      //to be created
      /*
        - rewrite the puzzlereveal.json format
          -  question array
              - question 1
                  - questionText
                  - option array
                    - option 1
                      - description
                      - isCorrect
                    - option 2
              - question 2

        - rewrite the createOptions to suit new data structure
        - for changeQuestions
          - keep track of what question you are
          - just increment the questionsIndex and then update all accordingly
          - i think you can access the data like
          questionArray[] = {data from json here}
          questionArray[questionIndex]["questionText"]
          questionArray[questionIndex]["optionArray"][optionIndex] <-- loop through all the indexes to update option
      
       */
    }
 
    //This entire timer was KevinGPT'ed
    function updateTime(timeElapsed) {
      timeText.text = "Time Remaining: " + timeElapsed;
    }