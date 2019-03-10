# Object-Oriented Design

## Step 1: Handle Ambiguity
OOD questions are often intentionally vague to test if you'll make assumptions or ask clarifying questions. You should ask _who_ is going to use it and _how_ they will use it. Depending on the question, you may even want to go through the "six Ws" -- who, what, when, where, why, and how.

## Step 2: Define the Core Objects
Consider what the core objects are and define them. List them on the board.
(might be smart to use the yo-yo technique from Clean Code -- define the agents of change and they are the modules, then go into the specifics of what we know now and use that concept, but without using the actual term)

## Step 3: Analyze Relationship
Which objects are members of which other objects? Do any objects inherit from any others? Are relationships many-to-many or one-to-many?

Make sure to discuss incorrect assumptions (for example, in a restaurant example, a single `Table` may have multiple `Parties` if it is a communal set up)

## Step 4: Investigate Actions
Consider the key actions that the objects will take and how they relate to each other. You may find that you have forgotten some objects, and you will need to update your design.



# Design Patterns

These are useful patterns but don't fall into a trap of trying to find the "right" pattern. If it jumps out, it is likely useful.

* Singleton Class - ensures that a class only has one instance, and ensures access to it throughout the application
  - Particularly useful where you have a "global" object with exactly one instance
  - In the restaurant case, we might want a singleton of a `Restaurant` class
  - Some people dislike it; it can interfere with unit testing
* Factory Method - an interface for creating an instance with a class, with its subclasses deciding which class to instantiate
  - You can implement this with a creator class being abstract and not providing an implementation for the Factory method
  - or it can be a concrete class that provides an implementation, in which case it would take a parameter to say which class to instantiate