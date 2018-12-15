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

test('Stack of Plates - popAt', () => {
    const stacks = new SetOfStacks();

    for(let i=0; i<10; i++) {
        stacks.push(i);
    }

    stacks.popAt(3);
    expect(stacks.stacks.length).toEqual(3);
    expect(stacks.pop()).toEqual(8);

    expect(stacks.popAt(0)).toEqual(2);

    let counter = 0;
    for(let i=0; i<stacks.stacks.length; i++) {
        counter += stacks.stacks[i].length();
    }
    expect(counter).toEqual(7);

    expect(stacks.currStack.length()).toEqual(1);
});