/*
    An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first out" basis.
    People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they can select
    whether they would prefer a dog or a cat (and will receive the oldest animal of that type).
    They cannot select which specific animal they would like.

    Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat.
    You may use the built-in LinkedList data structure.
 */

import { Queue } from "../Data Structures/Queue";

class Animal {
  constructor({ timestamp, type }) {
    this.timestamp = timestamp;
    this.type = type;
  }

  isOlderThan(animal) {
    return this.timestamp < animal.timestamp;
  }
}

export class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
  }

  enqueue(type) {
    const animalType = type === "cat" ? this.cats : this.dogs;
    const animal = new Animal({
      timestamp: Date.now(),
      type
    });
    animalType.enqueue(animal);
  }

  dequeueAny() {
    if (this.cats.isEmpty()) {
      return this.dogs.dequeue();
    }

    if (this.dogs.isEmpty()) {
      return this.cats.dequeue();
    }

    const oldestCat = this.cats.peek();
    const oldestDog = this.dogs.peek();

    const animalType = oldestCat.isOlderThan(oldestDog) ? this.cats : this.dogs;
    return animalType.dequeue();
  }

  dequeueDog() {
    return this.dogs.dequeue();
  }

  dequeueCat() {
    return this.cats.dequeue();
  }
}

/*
    This takes O(1) time to queue and dequeue and adds O(1) space!
 */
