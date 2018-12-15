import { isRotation } from "../1.9 - String Rotation";

test("String Rotation", () => {
  expect(isRotation("", "")).toBe(true);
  expect(isRotation("erbottlewat", "waterbottle")).toBe(true);
  expect(isRotation("bottlewate", "waterbottle")).toBe(false);
});
