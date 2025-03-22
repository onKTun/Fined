import { Container, Graphics, TextStyle, Text, Sprite } from "pixi.js";

class PixiActivityToast {
  private activityToastContainer: Container;
  private containerText: Text;

  constructor(
    height: number,
    width: number,
    radius: number,
    text: string,
    textStyle?: TextStyle,
    color?: number | string,
    icon?: Sprite
  ) {
    if (!color) {
      color = 0xffffff;
    }
    this.activityToastContainer = new Container();

    const containerGraphics = new Graphics();
    containerGraphics.beginFill(color);
    containerGraphics.drawRoundedRect(0, 0, width, height, radius);

    this.containerText = new Text(text, textStyle);
    this.containerText.setTransform(width / 2, height / 2);
    this.containerText.anchor.set(0.5);

    const iconGraphics = new Graphics();
    iconGraphics.beginFill("#3385FF");
    iconGraphics.drawRoundedRect(-90, -5, height, height - 10, 4);

    this.activityToastContainer.addChild(
      containerGraphics,
      iconGraphics,
      this.containerText
    );
  }

  public get container(): Container {
    return this.activityToastContainer;
  }

  public set text(v: string) {
    this.containerText.text = v;
  }
}

export default PixiActivityToast;
