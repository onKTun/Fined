import { Button } from "@pixi/ui";
import clock from "public/assets/activity/clock.svg";
import card from "public/assets/activity/white-card.svg";
import { Container, Graphics, Sprite, Text, TextStyle, Texture } from "pixi.js";

export class EndModal {
  container: Container;
  timerText: Text;
  scoreText: Text;

  size: { width: number; height: number };

  constructor(time: string, score: string, width: number, onExit?: () => void) {
    //text section + icons
    //icon section
    const svgImage = Texture.from(clock.src);
    const icon = new Sprite(svgImage);
    const iconGraphics = new Graphics();
    iconGraphics.beginFill("D7D7D7");
    iconGraphics.drawCircle(14, 14, 14);
    icon.width = 16;
    icon.height = 16;
    icon.anchor.set(0.5);
    icon.position.set(14, 14);
    iconGraphics.addChild(icon);

    //card icon
    const cardImage = Texture.from(card.src);
    const cardIcon = new Sprite(cardImage);
    const cardIconGraphics = new Graphics();
    cardIconGraphics.beginFill("D7D7D7");
    cardIconGraphics.drawCircle(14, 14, 14);
    cardIcon.width = 16;
    cardIcon.height = 16;
    cardIcon.anchor.set(0.5);
    cardIcon.position.set(15, 14);
    cardIconGraphics.addChild(cardIcon);

    this.timerText = new Text(
      `Time: ${time}`,
      new TextStyle({
        fontSize: 18,
        wordWrap: true,
        wordWrapWidth: 400,
      })
    );
    this.scoreText = new Text(
      `Score: ${score}`,
      new TextStyle({
        fontSize: 18,
        wordWrap: true,
        wordWrapWidth: 400,
      })
    );

    const textBoxGraphics = new Graphics();
    textBoxGraphics.addChild(
      this.timerText,
      this.scoreText,
      iconGraphics,
      cardIconGraphics
    );
    iconGraphics.setTransform(15, 21);
    cardIconGraphics.setTransform(15, 55);
    this.timerText.setTransform(53, 24);
    this.scoreText.setTransform(53, 58);
    textBoxGraphics.beginFill("#F2F2F2");
    textBoxGraphics.drawRoundedRect(0, 0, 233, 109, 5);
    textBoxGraphics.setTransform(35, 84);

    //title text section
    const title = new Text(
      `Great Job!`,
      new TextStyle({
        fontSize: 20,
        wordWrap: true,
        wordWrapWidth: 400,
      })
    );
    title.setTransform(35, 29);
    const subtitleText = new Text(
      "Activity Completed",
      new TextStyle({
        fontSize: 16,
        fill: "AAAAAA",
      })
    );
    subtitleText.setTransform(35, 51);
    //exit button section
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
    buttonGraphics.drawRoundedRect(0, 0, 110, 37, 5);

    buttonText.anchor.set(0.5);
    buttonText.position.set(
      buttonGraphics.width / 2,
      buttonGraphics.height / 2
    );

    buttonContainer.addChild(buttonGraphics, buttonText);
    buttonContainer.setTransform(35, 213);
    const button = new Button(buttonContainer);

    //retry button
    const retryButtonContainer = new Container();
    const retryButtonText = new Text(
      "Retry",
      new TextStyle({
        fontSize: 18,
        fill: "#3D3D3D",
      })
    );
    const retryButtonGraphics = new Graphics();
    retryButtonGraphics.beginFill("#EEEEEE");
    retryButtonGraphics.drawRoundedRect(0, 0, 110, 37, 5);

    retryButtonText.anchor.set(0.5);
    retryButtonText.position.set(
      retryButtonGraphics.width / 2,
      retryButtonGraphics.height / 2
    );

    retryButtonContainer.addChild(retryButtonGraphics, retryButtonText);
    retryButtonContainer.setTransform(156, 213);
    const retryButton = new Button(retryButtonContainer);

    const backGraphics = new Graphics();
    backGraphics.beginFill("#FFFFFF");
    backGraphics.drawRoundedRect(0, 0, 304, 283, 5);

    this.container = new Container();

    if (onExit) {
      button.onPress.connect(() => {
        this.container.renderable = false;
        onExit();
      });
    }

    this.container.addChild(
      backGraphics,
      textBoxGraphics,
      title,
      subtitleText,
      button.view,
      retryButton.view
    );
    this.container.pivot.set(this.container.width / 2, 0);
  }

  setTimerText(time: string) {
    this.timerText.text = `Time: ${time}`;
  }

  setScoreText(score: string) {
    this.scoreText.text = `Score: ${score}`;
  }
}
