import { AnimalShelter } from "../3.6 - Animal Shelter";

test('Animal Shelter', () => {
    let currentTime = Date.now();
    const spy = jest.spyOn(Date, 'now');
    spy.mockImplementation(() => currentTime);

    const shelter = new AnimalShelter();

    shelter.enqueue('cat');
    currentTime += 1000;
    shelter.enqueue('cat');
    currentTime += 1000;
    shelter.enqueue('dog');
    currentTime += 1000;
    shelter.enqueue('dog');
    currentTime += 1000;
    shelter.enqueue('dog');
    currentTime += 1000;
    shelter.enqueue('cat');

    shelter.dequeueDog();
    shelter.dequeueCat();
    expect(shelter.dequeueAny().type).toEqual('cat');
    expect(shelter.dequeueAny().type).toEqual('dog');
});