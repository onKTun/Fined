import { Container, Graphics, Text } from "pixi.js";

export class InstructionModal {
  container: Container;
  objectiveText: Text;
  stepsText: Text;

  size: { width: number; height: number };

  constructor(objective: string, steps: string, width: number, height: number) {
    this.container = new Container();
    this.container.pivot.set(width / 2, height / 2);

    this.objectiveText = new Text(`Objective: ${objective}`, {
      fontSize: 24,
      fill: 0x000000,
    });
    this.stepsText = new Text(`Steps: ${steps}`, {
      fontSize: 18,
      fill: 0x000000,
    });

    const backGraphics = new Graphics();
    backGraphics.beginFill(0xffffff);
    backGraphics.drawRoundedRect(0, 0, width, height, 10);
    backGraphics.endFill();

    this.container.addChild(backGraphics, this.objectiveText, this.stepsText);
  }
}
