import { Button } from "@pixi/ui";
import { Container, Graphics, Text, TextStyle } from "pixi.js";

export class StartModal {
  container: Container;
  objectiveText: Text;
  stepsText: Text;

  size: { width: number; height: number };

  constructor(
    objective: string,
    steps: string,
    width: number,
    onStart: () => void
  ) {
    const textBoxPadding = 25;
    const textPadding = 20;
    const overhead = 40;

    const textBoxContainer = new Container();

    this.objectiveText = new Text(
      `Objective: ${objective}`,
      new TextStyle({
        fontSize: 16,
        wordWrap: true,
        wordWrapWidth: 400,
      })
    );
    this.stepsText = new Text(
      `Steps: ${steps}`,
      new TextStyle({
        fontSize: 16,
        wordWrap: true,
        wordWrapWidth: 400,
      })
    );

    const title = new Text(
      `Instructions`,
      new TextStyle({
        fontSize: 24,
        wordWrap: true,
        wordWrapWidth: 400,
      })
    );

    this.objectiveText.x = textPadding;
    this.stepsText.x = textPadding;
    this.objectiveText.y = 10;
    this.stepsText.y = this.objectiveText.height + 20;

    textBoxContainer.addChild(this.objectiveText, this.stepsText);
    textBoxContainer.calculateBounds();

    const textBoxGraphics = new Graphics();
    textBoxGraphics.beginFill("#F5F5F5");
    textBoxGraphics.drawRoundedRect(
      0,
      0,
      textBoxContainer.getBounds().width + 2 * textPadding,
      textBoxContainer.getBounds().height + 2 * textPadding - 10,
      10
    );
    textBoxContainer.addChildAt(textBoxGraphics, 0);

    const buttonContainer = new Container();

    const buttonText = new Text(
      "Begin Activity",
      new TextStyle({
        fontSize: 18,
        fill: "#FFFFFF",
      })
    );
    const buttonGraphics = new Graphics();
    buttonGraphics.beginFill("#3385FF");
    buttonGraphics.drawRoundedRect(
      0,
      0,
      buttonText.width + 2 * 10,
      buttonText.height + 2 * 10,
      10
    );

    buttonText.anchor.set(0.5);
    buttonText.position.set(
      buttonGraphics.width / 2,
      buttonGraphics.height / 2
    );

    buttonContainer.addChild(buttonGraphics, buttonText);
    buttonContainer.x = textBoxPadding;
    buttonContainer.y =
      textBoxPadding + title.height + 15 + textBoxGraphics.height + 15;
    const button = new Button(buttonContainer);

    const backGraphics = new Graphics();
    backGraphics.beginFill("#FFFFFF");
    backGraphics.drawRoundedRect(
      0,
      0,
      textBoxContainer.getBounds().width + textBoxPadding * 2,
      textBoxContainer.getBounds().height +
        textBoxPadding * 2 +
        2 * title.height +
        buttonGraphics.height,
      10
    );
    backGraphics.endFill();

    this.container = new Container();
    this.container.pivot.set(backGraphics.width / 2, overhead);

    textBoxContainer.position.set(
      textBoxPadding,
      textBoxPadding + title.height + 15
    );

    title.x = textBoxPadding + 10;
    title.y = textBoxPadding;

    button.onPress.connect(() => {
      this.container.renderable = false;
      onStart();
    });

    this.container.addChild(backGraphics, textBoxContainer, title, button.view);
  }
}
