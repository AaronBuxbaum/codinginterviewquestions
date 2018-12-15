import { SetOfStacks } from "../3.3 - Stack of Plates";

test('Stack of Plates', () => {
    const stacks = new SetOfStacks();

    for(let i=0; i<10; i++) {
        stacks.push(i);
    }

    expect(stacks.stacks.length).toEqual(4);

    stacks.pop();
    expect(stacks.stacks.length).toEqual(3);

    stacks.push(10);
    expect(stacks.stacks.length).toEqual(4);
});