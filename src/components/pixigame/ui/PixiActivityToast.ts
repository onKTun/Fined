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
    icon?: Sprite,
    color?: number | string
  ) {
    if (!color) {
      color = 0xffffff;
    }
    this.activityToastContainer = new Container();

    const containerGraphics = new Graphics();
    containerGraphics.beginFill(color);
    containerGraphics.drawRoundedRect(0, 0, width, height, radius);

    this.containerText = new Text(text, textStyle);
    if (icon) {
      this.containerText.setTransform(10 + height - 5, height / 2);
      this.containerText.anchor.set(0, 0.5);
    } else {
      this.containerText.setTransform(width / 2, height / 2);
      this.containerText.anchor.set(0.5);
    }

    this.activityToastContainer.addChild(containerGraphics, this.containerText);

    if (icon) {
      const iconGraphics = new Graphics();
      iconGraphics.beginFill("#3385FF");
      iconGraphics.drawRoundedRect(10, 7, height - 15, height - 15, 4);

      icon.width = height - 20;
      icon.height = height - 20;
      icon.anchor.set(0, 0.5);
      icon.position.set(12.5, height / 2);
      this.activityToastContainer.addChild(iconGraphics, icon);
    }
  }

  public get container(): Container {
    return this.activityToastContainer;
  }

  public set text(v: string) {
    this.containerText.text = v;
  }
}

export default PixiActivityToast;
