import { DisplayObject } from "pixi.js";

export function isColliding(
  object1: DisplayObject,
  object2: DisplayObject
): boolean {
  /*
  Recalculates the bounds of the container.
  This implementation will automatically fit the children's bounds into the calculation. Each child's bounds is limited to its mask's bounds or filterArea, if any is applied.
  */
  object1.calculateBounds();
  object2.calculateBounds();

  if (
    object1._bounds.maxX < object2._bounds.minX ||
    object2._bounds.maxX < object1._bounds.minX
  ) {
    return false;
  }
  if (
    object1._bounds.maxY < object2._bounds.minY ||
    object2._bounds.maxY < object1._bounds.minY
  ) {
    return false;
  }

  return true;
}

export function getOverlapPercent(
  object1: DisplayObject,
  object2: DisplayObject
) {
  if (!isColliding(object1, object2)) {
    return 0;
  }

  object1.calculateBounds();
  object2.calculateBounds();

  const lengthX =
    Math.min(object1._bounds.maxX, object2._bounds.maxX) -
    Math.max(object1._bounds.minX, object2._bounds.minX);
  const lengthY =
    Math.min(object1._bounds.maxY, object2._bounds.maxY) -
    Math.max(object1._bounds.minY, object2._bounds.minY);

  const overlapArea = lengthX * lengthY;

  const object1Area =
    (object1._bounds.maxX - object1._bounds.minX) *
    (object1._bounds.maxY - object1._bounds.minY);
  const object2Area =
    (object2._bounds.maxX - object2._bounds.minX) *
    (object2._bounds.maxY - object2._bounds.minY);

  const totalArea = object1Area + object2Area - overlapArea;
  const overlapPercent = overlapArea / totalArea;

  return overlapPercent;
}
