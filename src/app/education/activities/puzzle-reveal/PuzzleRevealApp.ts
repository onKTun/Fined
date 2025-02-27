import {
    Application,
    Sprite,
    Texture,
    Graphics,
    Container,
    Text,
    TextStyle,
    DisplayObject,
  } from "pixi.js";
  import TimerManager from "utils/pixiJS/time utils/TimerManager";
  import Timer from "utils/pixiJS/time utils/Timer";
  import backgroundImage from "public/assets/backgrounds/fined_background_1.svg";
  import OptionBox from "./OptionBox";
  import { markComplete } from "utils/supabase/lessonProgressService";
  import { StartModal } from "../../../../components/pixigame/ui/StartModal";
  import clock from "public/assets/activity/clock.svg";
  import { EndModal } from "src/components/pixigame/ui/EndModal";
  import puzzleImg from "public/assets/activity/puzzleReveal/iLoveLeg.jpg";

  const puzzleDimensions = { width: 433, height: 288, x: 230, y: 120 };
  const optionBoxDimensions = { width: 194, height: 140, x:200, y: 500 };

  let pixiApp : Application;
  let optionBank : OptionBox[] =[];

  const optionBoxGraphics = new Graphics();
  optionBoxGraphics.beginFill("0xffffff");
  export default function puzzleRevealScript(app: Application, data:JSONValue) {
    pixiApp = app;
    setup();
    createOptions(data);
    console.log("running");
  }

  function setup(){
    
    const puzzleTexture = Texture.from(puzzleImg.src);
    const puzzle = new Sprite(puzzleTexture);

    puzzle.width = puzzleDimensions.width;
    puzzle.height = puzzleDimensions.height;
    puzzle.x = puzzleDimensions.x;
    puzzle.y = puzzleDimensions.y;

    pixiApp.stage.addChild(puzzle);
    
  }

  function createOptions(jsonData: JSONValue) {
    
    const optionArray: JSONArray = jsonData["optionArray"];
    const optionsContainer = new Container();
    for (const option in optionArray){
        const optionBox = new OptionBox(option["description"], option["correct"], optionBoxDimensions);
        optionBank.push(optionBox);
        optionsContainer.addChild(optionBox.boxContainer);

    };
    pixiApp.stage.addChild(optionsContainer);
    
    
  }
  