import { Button } from "@pixi/ui";
import { Container, Graphics, Sprite, Text, TextStyle, Texture } from "pixi.js";
import clock from "public/assets/activity/clock.svg";

export class StartModal {
  container: Container;
  descriptionText: Text;
  stepsText: Text;

  constructor(
    title: string,
    description: string,
    onStart: () => void,
    size?: { width: number; height: number }
  ) {
    //main description text section
    this.descriptionText = new Text(
      description,
      new TextStyle({
        fontSize: 14,
        fill: "3A3A3A",
        wordWrap: true,
        wordWrapWidth: size?.width ?? 250,
      })
    );
    const descriptionBackingGraphics = new Graphics();
    descriptionBackingGraphics.beginFill("F2F2F2");
    descriptionBackingGraphics.drawRoundedRect(
      0,
      0,
      this.descriptionText.width + 50,
      this.descriptionText.height + 50,
      5
    );
    this.descriptionText.setTransform(25, 25);
    descriptionBackingGraphics.addChild(this.descriptionText);

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
    //title text section

    const titleText = new Text(
      title,
      new TextStyle({
        fontSize: 20,
      })
    );
    const subtitleText = new Text(
      "Instructions",
      new TextStyle({
        fontSize: 16,
        fill: "AAAAAA",
      })
    );
    iconGraphics.setTransform(35, 35);
    titleText.setTransform(71, 31);
    subtitleText.setTransform(71, 52);

    //button section

    const buttonText = new Text(
      "Begin",
      new TextStyle({
        fontSize: 16,
        fill: "#FFFFFF",
      })
    );
    const buttonGraphics = new Graphics();
    buttonGraphics.beginFill("#3385FF");
    buttonGraphics.drawRoundedRect(0, 0, 110, 40, 5);
    buttonText.anchor.set(0.5);
    buttonText.position.set(
      buttonGraphics.width / 2,
      buttonGraphics.height / 2
    );
    const buttonContainer = new Container();
    buttonContainer.addChild(buttonGraphics, buttonText);

    const button = new Button(buttonContainer);

    button.onPress.connect(() => {
      this.container.renderable = false;
      onStart();
    });

    //home button
    const homeButtonText = new Text(
      "Home",
      new TextStyle({
        fontSize: 16,
        fill: "000000",
      })
    );
    const homeButtonGraphics = new Graphics();
    homeButtonGraphics.beginFill("EEEEEE");
    homeButtonGraphics.drawRoundedRect(0, 0, 110, 40, 5);
    homeButtonText.anchor.set(0.5);
    homeButtonText.position.set(
      homeButtonGraphics.width / 2,
      homeButtonGraphics.height / 2
    );
    const homeButtonContainer = new Container();
    homeButtonContainer.addChild(homeButtonGraphics, homeButtonText);

    const homeButton = new Button(homeButtonContainer);

    homeButton.onPress.connect(() => {
      history.back();
    });
    descriptionBackingGraphics.setTransform(35, 84);
    buttonContainer.setTransform(
      35,
      descriptionBackingGraphics.height + descriptionBackingGraphics.y + 24
    );
    homeButtonContainer.setTransform(
      156,
      descriptionBackingGraphics.height + descriptionBackingGraphics.y + 24
    );
    this.container = new Container();
    this.container.addChild(
      descriptionBackingGraphics,
      iconGraphics,
      titleText,
      subtitleText,
      buttonContainer,
      homeButtonContainer
    );

    //backing graphics
    const backingGraphics = new Graphics();
    backingGraphics.beginFill("FFFFFF");
    backingGraphics.drawRoundedRect(
      0,
      0,
      this.container.width + 70,
      this.container.height + 60,
      5
    );
    this.container.addChildAt(backingGraphics, 0);
    this.container.pivot.set(this.container.width / 2, 0);
  }
}
