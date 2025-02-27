import { Button } from "@pixi/ui";
import { Container, Graphics, Text, TextStyle } from "pixi.js";

export class EndModal {
  container: Container;
  timerText: Text;
  scoreText: Text;

  size: { width: number; height: number };

  constructor(time: string, score: string, width: number, onExit?: () => void) {
    const textBoxPadding = 25;
    const textPadding = 20;
    const overhead = 40;

    const textBoxContainer = new Container();

    this.timerText = new Text(
      `Time: ${time}`,
      new TextStyle({
        fontSize: 24,
        wordWrap: true,
        wordWrapWidth: 400,
      })
    );
    this.scoreText = new Text(
      `Score: ${score}`,
      new TextStyle({
        fontSize: 24,
        wordWrap: true,
        wordWrapWidth: 400,
      })
    );

    const title = new Text(
      `Great Job!`,
      new TextStyle({
        fontSize: 24,
        wordWrap: true,
        wordWrapWidth: 400,
      })
    );

    this.timerText.x = textPadding;
    this.scoreText.x = textPadding;
    this.timerText.y = 10;
    this.scoreText.y = this.scoreText.height + 20;

    textBoxContainer.addChild(this.timerText, this.scoreText);
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
      "Exit",
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

    if (onExit) {
      button.onPress.connect(() => {
        this.container.renderable = false;
        onExit();
      });
    }

    this.container.addChild(backGraphics, textBoxContainer, title, button.view);
  }

  setTimerText(time: string) {
    this.timerText.text = `Time: ${time}`;
  }

  setScoreText(score: string) {
    this.scoreText.text = `Score: ${score}`;
  }
}
