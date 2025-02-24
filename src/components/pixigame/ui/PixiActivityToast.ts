import { Container, Graphics, TextStyle, Text } from "pixi.js";

class PixiActivityToast {
  private container: Container;

  constructor(
    height: number,
    width: number,
    radius: number,
    color: string,
    text: string,
    textStyle?: TextStyle
  ) {
    this.container = new Container();

    const containerGraphics = new Graphics();
    containerGraphics.beginFill(color);
    containerGraphics.drawRoundedRect(0, 0, width, height, radius);

    const containerText = new Text(text, textStyle);
    containerText.setTransform(container);

    this.container.addChild(containerGraphics, containerText);
  }

  public getContainer(): Container {
    return this.container;
  }
}

export default PixiActivityToast;
