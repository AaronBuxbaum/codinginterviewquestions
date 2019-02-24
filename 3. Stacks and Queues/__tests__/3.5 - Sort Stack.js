import { sortStack } from "../3.5 - Sort Stack";
import { buildStack } from "../../Data Structures/Stack";
import { range, shuffle } from "lodash";

test("Sort Stack", () => {
  const stack = buildStack(shuffle(range(1, 10)));
  const sortedStack = buildStack(range(1, 10));
  expect(sortStack(stack)).toEqual(sortedStack);
});
