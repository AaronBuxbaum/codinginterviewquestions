import { StackMin } from "../3.2 - Stack Min";

test('Stack Min', () => {
    const stack = new StackMin();
    stack.push(19);
    stack.push(20);
    stack.push(19);

    expect(stack.min()).toEqual(19);
    stack.pop();
    expect(stack.min()).toEqual(19);
    stack.pop();
    expect(stack.min()).toEqual(20);
});