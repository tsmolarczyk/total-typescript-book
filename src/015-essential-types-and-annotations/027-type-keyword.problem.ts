import { Rectangle } from "./../032-typescript-only-features/122-namespaces-can-declaration-merge.explainer";
import { Expect, Equal } from "@total-typescript/helpers";
import { expect, it } from "vitest";

// interface RectangleArea {
//   width: number;
//   height: number;
// }

type Rectangle = {
  width: number;
  height: number;
};

const getRectangleArea = (rectangle: Rectangle) => {
  return rectangle.width * rectangle.height;
};

const getRectanglePerimeter = (rectangle: {
  width: number;
  height: number;
}) => {
  return 2 * (rectangle.width + rectangle.height);
};

it("should return the area of a rectangle", () => {
  const result = getRectangleArea({
    width: 10,
    height: 20
  });

  type test = Expect<Equal<typeof result, number>>;

  expect(result).toEqual(200);
});

it("should return the perimeter of a rectangle", () => {
  const result = getRectanglePerimeter({
    width: 10,
    height: 20
  });

  type test = Expect<Equal<typeof result, number>>;

  expect(result).toEqual(60);
});
