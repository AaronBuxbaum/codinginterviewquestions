import { findBuildOrder } from "../4.7 - Build Order";

test("Build Order", () => {
  const projects = ["a", "b", "c", "d", "e", "f"];
  const dependencies = [
    ["a", "d"],
    ["f", "b"],
    ["b", "d"],
    ["f", "a"],
    ["d", "c"]
  ];
  const expected = ["e", "f", "a", "b", "d", "c"];

  expect(findBuildOrder(projects, dependencies)).toEqual(expected);

  // add a cycle
  dependencies.push(["c", "d"]);
  expect(() => findBuildOrder(projects, dependencies)).toThrowError(
    "Cycle detected!"
  );
});
