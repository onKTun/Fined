enum GameActivityStates {
  LOAD,
  START,
  RUN,
  PAUSE,
  END,
  UNLOAD,
}

class GameManager {
  private state: GameActivityStates;
  private prevState: GameActivityStates;
  private loadFunction: () => boolean;
  private startFunction: () => boolean;
  private runFunction: () => boolean;
  private pauseFunction: () => boolean;
  private endFunction: () => boolean;
  private unloadFunction: () => boolean;

  constructor(
    functions: {
      loadFunction?: () => boolean;
      startFunction?: () => boolean;
      runFunction?: () => boolean;
      pauseFunction?: () => boolean;
      endFunction?: () => boolean;
      unloadFunction?: () => boolean;
    } = {}
  ) {
    this.state = GameActivityStates.LOAD;
    this.loadFunction = functions.loadFunction || (() => true);
    this.startFunction = functions.startFunction || (() => true);
    this.runFunction = functions.runFunction || (() => true);
    this.pauseFunction = functions.pauseFunction || (() => true);
    this.endFunction = functions.endFunction || (() => true);
    this.unloadFunction = functions.unloadFunction || (() => true);
    this.initialize();
  }

  private initialize() {
    console.log("Initializing game...");
    this.setState(GameActivityStates.LOAD);
  }

  setState(state: GameActivityStates) {
    switch (state) {
      case GameActivityStates.LOAD:
        // do stuff for LOAD
        console.log("Loading game...");
        this.loadFunction();
        break;
      case GameActivityStates.START:
        // do stuff for START
        console.log("Starting game...");
        this.startFunction();
        break;
      case GameActivityStates.RUN:
        // do stuff for RUN
        console.log("Running game...");
        this.runFunction();
        break;
      case GameActivityStates.PAUSE:
        // do stuff for PAUSE
        console.log("Pausing game...");
        this.pauseFunction();
        break;
      case GameActivityStates.END:
        // do stuff for END
        console.log("Ending game...");
        this.endFunction();
        break;
      case GameActivityStates.UNLOAD:
        // do stuff for UNLOAD
        console.log("Unloading game...");
        this.unloadFunction();
        break;
    }

    this.prevState = this.state;
    this.state = state;
  }

  public getState(): GameActivityStates {
    return this.state;
  }
  public getPrevState(): GameActivityStates {
    return this.prevState;
  }
}

export { GameManager, GameActivityStates };
