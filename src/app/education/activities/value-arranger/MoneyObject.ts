import { Container, Sprite, Graphics, Text, TextStyle, Texture } from "pixi.js";
import one from "public/assets/valuearranger/1.png";
import five from "public/assets/valuearranger/5.png";
import ten from "public/assets/valuearranger/10.png";
import twenty from "public/assets/valuearranger/20.png";
import fifty from "public/assets/valuearranger/50.png";
import hundred from "public/assets/valuearranger/100.png";

export class MoneyObject {
  private container: Container;
  private type: "dollar" | "cent";
  private amount: number;

  private x: number;
  private y: number;

  constructor(type: "dollar" | "cent", amount: number, x: number, y: number) {
    this.container = new Container();
    this.type = type;
    this.amount = amount;
    this.x = x;
    this.y = y;

    this.container.setTransform(x, y);

    const bankValues = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 50, 100];
    let moneyGraphics: Graphics;
    let moneyText: Text;
    let sprite: Sprite;
    let texture: Texture;
    switch (amount) {
      case 0.01:
        // Handle penny
        moneyGraphics = new Graphics();
        moneyGraphics.beginFill("#C76B32");
        moneyGraphics.drawCircle(0, 0, 17.5);
        moneyText = new Text(
          "1",
          new TextStyle({
            fill: "#feffff",
            fontSize: 16,
          })
        );
        moneyText.anchor.set(0.5);
        moneyText.setTransform(0, 0);
        this.container.addChild(moneyGraphics, moneyText);
        break;
      case 0.05:
        // Handle nickel
        moneyGraphics = new Graphics();
        moneyGraphics.beginFill("#B3B3B3");
        moneyGraphics.drawCircle(0, 0, 19.5);
        moneyText = new Text(
          "5",
          new TextStyle({
            fill: "#feffff",
            fontSize: 16,
          })
        );
        moneyText.anchor.set(0.5);
        moneyText.setTransform(0, 0);
        this.container.addChild(moneyGraphics, moneyText);
        break;
      case 0.1:
        // Handle dime
        moneyGraphics = new Graphics();
        moneyGraphics.beginFill("#B3B3B3");
        moneyGraphics.drawCircle(0, 0, 17.5);
        moneyText = new Text(
          "10",
          new TextStyle({
            fill: "#feffff",
            fontSize: 16,
          })
        );
        moneyText.anchor.set(0.5);
        moneyText.setTransform(0, 0);
        this.container.addChild(moneyGraphics, moneyText);
        break;
      case 0.25:
        // Handle quarter
        moneyGraphics = new Graphics();
        moneyGraphics.beginFill("#B3B3B3");
        moneyGraphics.drawCircle(0, 0, 23);
        moneyText = new Text(
          "25",
          new TextStyle({
            fill: "#feffff",
            fontSize: 16,
          })
        );
        moneyText.anchor.set(0.5);
        moneyText.setTransform(0, 0);
        this.container.addChild(moneyGraphics, moneyText);
        break;
      case 1:
        // Handle one dollar
        texture = Texture.from(one.src);
        sprite = new Sprite(texture);
        sprite.width = 189;
        sprite.height = 83;
        this.container.addChild(sprite);

        break;
      case 5:
        // Handle five dollars
        texture = Texture.from(five.src);
        sprite = new Sprite(texture);
        sprite.width = 189;
        sprite.height = 83;
        this.container.addChild(sprite);
        break;
      case 10:
        // Handle ten dollars
        texture = Texture.from(ten.src);
        sprite = new Sprite(texture);
        sprite.width = 189;
        sprite.height = 83;
        this.container.addChild(sprite);
        break;
      case 20:
        // Handle twenty dollars
        texture = Texture.from(twenty.src);
        sprite = new Sprite(texture);
        sprite.width = 189;
        sprite.height = 83;
        this.container.addChild(sprite);
        break;
      case 50:
        // Handle fifty dollars
        texture = Texture.from(fifty.src);
        sprite = new Sprite(texture);
        sprite.width = 189;
        sprite.height = 83;
        this.container.addChild(sprite);
        break;
      case 100:
        // Handle hundred dollars
        texture = Texture.from(hundred.src);
        sprite = new Sprite(texture);
        sprite.width = 189;
        sprite.height = 83;
        this.container.addChild(sprite);
        break;
      default:
        // Handle unknown amount
        break;
    }

    if (type === "dollar") {
      this.container.pivot.set(
        this.container.width / 2,
        this.container.height / 2
      );
    }
  }

  public get value(): number {
    return this.amount;
  }
  public get Type(): "dollar" | "cent" {
    return this.type;
  }

  public get Container(): Container {
    return this.container;
  }

  public CloneObject(): MoneyObject {
    return new MoneyObject(this.type, this.amount, this.x, this.y);
  }
}
