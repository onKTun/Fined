//copy this for your game script file
import {
  Application,
  Container,
  Graphics,
  Sprite,
  Text,
  TextStyle,
  Texture,
} from "pixi.js";
import TimerManager from "utils/pixiJS/time utils/TimerManager";
import Timer from "utils/pixiJS/time utils/Timer";
import backgroundImage from "public/assets/backgrounds/fined_background_1.svg";
import { GameManager } from "src/components/pixigame/GameManager";
import PixiActivityToast from "src/components/pixigame/ui/PixiActivityToast";
import { StartModal } from "src/components/pixigame/ui/StartModal";
import { MoneyObject } from "./MoneyObject";
import { getOverlapPercent } from "utils/pixiJS/pixiUtils";
import { EndModal } from "src/components/pixigame/ui/EndModal";

let pixiApp: Application;
let gameManager: GameManager;
let blurGraphics: Graphics;

let balancesDue: number[];
let balanceDueValueText: Text;

let currentBalance: number;
let currentBalanceValueText: Text;
let currentBalanceBank: MoneyObject[];
let itemsToast: PixiActivityToast;

let bank: MoneyObject[];
let dragTarget: MoneyObject | null;

let dropContainer: Container;

let timer: Timer;
let elapsedTime: number;
let timeToast: PixiActivityToast;

export default function ValueArrangerScript(app: Application, data: JSONValue) {
  pixiApp = app;
  balancesDue = data["balancesDue"];
  currentBalance = 0;

  gameManager = new GameManager(
    Load,
    Start,
    () => true,
    () => true,
    End
  );
  gameManager.setState(0);
}

function Load() {
  //load background
  const backgroundTexture = Texture.from(backgroundImage.src);
  const background = new Sprite(backgroundTexture);

  blurGraphics = new Graphics();
  blurGraphics.beginFill(0x000000);
  blurGraphics.drawRect(0, 0, pixiApp.screen.width, pixiApp.screen.height);
  blurGraphics.alpha = 0.5;

  //ui for left side of game
  const leftContainer = new Container();
  const leftGraphics = new Graphics();
  leftGraphics.beginFill("4A91FE");
  leftGraphics.drawRect(0, 0, 581, 730);
  leftContainer.addChild(leftGraphics);

  dropContainer = new Container();
  const dropGraphics = new Graphics();
  dropGraphics.beginFill("#71A6FF");
  dropGraphics.drawRoundedRect(0, 10, 523, 491, 10);
  dropContainer.addChild(dropGraphics);
  leftContainer.addChild(dropContainer);

  const infoContainer = new Container();
  const infoGraphics = new Graphics();
  infoGraphics.beginFill("#FFFFFF");
  infoGraphics.drawRoundedRect(0, 0, 482, 103, 10);
  infoGraphics.endFill();
  infoGraphics.beginFill("#3388FF");
  infoGraphics.drawRoundedRect(16, 12, 81, 79, 10);
  infoContainer.addChild(infoGraphics);
  leftContainer.addChild(infoContainer);

  const balanceDueContainer = new Container();
  const balanceDueTitleText = new Text(
    "Balance Due",
    new TextStyle({
      fontSize: 16,
    })
  );
  balanceDueContainer.addChild(balanceDueTitleText);
  infoContainer.addChild(balanceDueContainer);
  const balanceDueValueContainer = new Container();
  const balanceDueValueGraphics = new Graphics();
  balanceDueValueGraphics.beginFill("#F5F5F5");
  balanceDueValueGraphics.drawRoundedRect(0, 0, 75, 31, 5);
  balanceDueValueText = new Text(
    "$" + balancesDue[balancesDue.length - 1],
    new TextStyle({
      fill: "#4A4A4A",
      fontSize: 17,
    })
  );
  balanceDueValueContainer.addChild(
    balanceDueValueGraphics,
    balanceDueValueText
  );
  balanceDueContainer.addChild(balanceDueValueContainer);
  balanceDueValueContainer.setTransform(0, 25);
  balanceDueContainer.setTransform(115, 21);

  const currentBalanceContainer = new Container();
  const currentBalanceTitleText = new Text(
    "Current Balance",
    new TextStyle({
      fontSize: 16,
    })
  );
  currentBalanceContainer.addChild(currentBalanceTitleText);
  infoContainer.addChild(currentBalanceContainer);
  const currentBalanceValueContainer = new Container();
  const currentBalanceValueGraphics = new Graphics();
  currentBalanceValueGraphics.beginFill("#F5F5F5");
  currentBalanceValueGraphics.drawRoundedRect(0, 0, 75, 31, 5);
  currentBalanceValueText = new Text(
    "$0.00",
    new TextStyle({
      fill: "#4A4A4A",
      fontSize: 17,
    })
  );
  currentBalanceValueContainer.addChild(
    currentBalanceValueGraphics,
    currentBalanceValueText
  );
  currentBalanceContainer.addChild(currentBalanceValueContainer);
  currentBalanceValueContainer.setTransform(0, 25);
  currentBalanceContainer.setTransform(263, 21);

  //right side
  const itemsContainer = new Container();
  const itemsGraphics = new Graphics();
  itemsGraphics.beginFill("#71A6FF");
  itemsGraphics.drawRoundedRect(862, 79, 205, 565.5, 10);
  itemsGraphics.drawRoundedRect(854, 656, 213, 56, 10);
  itemsContainer.addChild(itemsGraphics);

  //initialize the moneybank
  const bankValues = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 50, 100];
  bank = [];
  let centIndex = 0;
  let dollarIndex = 0;
  for (const value of bankValues) {
    //initialize cents
    if (value < 1) {
      const cent = new MoneyObject("cent", value, 880 + centIndex * 50, 685);
      centIndex++;

      bank.push(cent);
    } else {
      const dollar = new MoneyObject(
        "dollar",
        value,
        870 + 94.5,
        89 + 44.5 + dollarIndex * 93
      );

      dollarIndex++;

      bank.push(dollar);
    }
    //initialize dollars
  }
  for (const item of bank) {
    item.Container.eventMode = "static";
    item.Container.on("pointerdown", onDragStart, item);
    itemsContainer.addChild(item.Container);
  }

  //ui at top

  itemsToast = new PixiActivityToast(
    44,
    163,
    15,
    balancesDue.length + " items left",
    new TextStyle({
      fontSize: 16,
    })
  );
  itemsToast.container.setTransform(25, 21);

  timeToast = new PixiActivityToast(
    44,
    163,
    15,
    "0 seconds elapsed",
    new TextStyle({
      fontSize: 16,
    })
  );
  timeToast.container.setTransform(876, 21);

  //start UI
  const startModal = new StartModal(
    "Students will add up cash and coins to match the total balance due.",
    "When the game starts, you'll see a bank with different bills and coins. Use these bills and coins to add up to the total sum due by dragging them towards the left side of the screen. If you would like to remove a bill, drag it outside.",
    10,
    () => {
      gameManager.setState(1);
    }
  );
  startModal.container.position.set(pixiApp.screen.width / 2, 200);

  dropContainer.setTransform(25, 239);
  infoContainer.setTransform(24, 100);
  pixiApp.stage.addChild(
    background,
    leftContainer,
    itemsContainer,
    itemsToast.container,
    timeToast.container,
    blurGraphics,
    startModal.container
  );

  return true;
}

function Start() {
  const timerManager = new TimerManager();
  timer = timerManager.createTimer(1000);

  timer.loop = true;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  timer.on("start", function (_elapsed) {
    console.log("timer started");
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  timer.on("repeat", function (_elapsed, repeat) {
    elapsedTime = repeat;
    timeToast.text = repeat + " seconds elapsed";
  });
  //main update loop
  pixiApp.ticker.add(() => {
    timerManager.update();
  });
  timer.start();

  currentBalanceBank = [];

  //setup logic for dragging
  pixiApp.stage.eventMode = "static";
  pixiApp.stage.hitArea = pixiApp.screen;
  pixiApp.stage.on("pointerup", onDragEnd);
  pixiApp.stage.on("pointerupoutside", onDragEnd);

  //disable blur
  blurGraphics.renderable = false;
  return true;
}

function End() {
  timer.stop();
  blurGraphics.renderable = true;
  const endModal = new EndModal(elapsedTime + " sec", "100%", 200, () => {
    history.back();
  });

  endModal.container.position.set(pixiApp.screen.width / 2, 250);
  pixiApp.stage.addChild(endModal.container);
  return true;
}

function onDragMove(event) {
  if (dragTarget) {
    dragTarget.Container.parent.toLocal(
      event.global,
      pixiApp.stage,
      dragTarget.Container.position
    );
  }
}

function onDragStart() {
  // Store a reference to the data
  // * The reason for this is because of multitouch *
  // * We want to track the movement of this particular touch *

  // eslint-disable-next-line @typescript-eslint/no-this-alias
  dragTarget = this.CloneObject();
  if (dragTarget) {
    dragTarget.Container.alpha = 0.5;
    pixiApp.stage.addChild(dragTarget?.Container);
    dragTarget.Container.eventMode = "static";
    dragTarget.Container.on("pointerdown", onDragStartCloned, dragTarget);
  }
  pixiApp.stage.on("pointermove", onDragMove);
}

function onDragStartCloned() {
  // Store a reference to the data
  // * The reason for this is because of multitouch *
  // * We want to track the movement of this particular touch *

  // eslint-disable-next-line @typescript-eslint/no-this-alias
  dragTarget = this;
  if (dragTarget) {
    dragTarget.Container.alpha = 0.5;
    //find and remove identical from array
    for (let i = 0; i < currentBalanceBank.length; i++) {
      if (currentBalanceBank[i].value === dragTarget.value) {
        console.log(dragTarget.value);
        currentBalanceBank.splice(i, 1);
        break;
      }
    }
  }

  pixiApp.stage.on("pointermove", onDragMove);
}

function onDragEnd() {
  if (dragTarget) {
    pixiApp.stage.off("pointermove", onDragMove);
    dragTarget.Container.alpha = 1; //opacity

    //check answer + detect overlap
    console.log(getOverlapPercent(dragTarget.Container, dropContainer));
    if (
      (getOverlapPercent(dragTarget.Container, dropContainer) >= 0.03 &&
        dragTarget.Type === "dollar") ||
      (getOverlapPercent(dragTarget.Container, dropContainer) >= 0.003 &&
        dragTarget.Type === "cent")
    ) {
      currentBalanceBank.push(dragTarget);
      UpdateValues();

      if (Check()) {
        // move onto next balance due, update items left, text, etc
        balancesDue.pop();
        if (balancesDue.length === 0) {
          balanceDueValueText.text = "$" + 0.0;
          gameManager.setState(4);
        } else {
          balanceDueValueText.text = "$" + balancesDue[balancesDue.length - 1];
        }
        itemsToast.text = balancesDue.length + " items left";

        //remove all money currently on stage
        for (const money of currentBalanceBank) {
          pixiApp.stage.removeChild(money.Container);
        }
        currentBalanceBank = [];
        UpdateValues();
      }
    } else {
      pixiApp.stage.removeChild(dragTarget.Container);
    }
    UpdateValues();
    dragTarget = null;
  }
}

function Check(): boolean {
  console.log("Checking if current balance matches the balance due");
  console.log("Current balance: " + currentBalance);
  console.log("Balance due: " + balancesDue[balancesDue.length - 1]);
  if (balancesDue[balancesDue.length - 1] == currentBalance) {
    console.log("Balance matches");
    return true;
  }
  console.log("Balance does not match");
  return false;
}

function UpdateValues() {
  //update values and text
  currentBalance = 0;
  for (const money of currentBalanceBank) {
    currentBalance += money.value;
  }
  currentBalance = Math.round(currentBalance * 100) / 100;
  currentBalanceValueText.text = "$" + currentBalance;
}
