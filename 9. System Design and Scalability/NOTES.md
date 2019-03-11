# System Design and Scalability

Typically for these types of questions, there aren't any gotchas or required fancy algorithms -- these are more about how you would in reality. Make sure to ask questions, engage the interview, and discuss tradeoffs. There's no real "correct" answer, just better solutions for different scenarios.

## Handling the Questions
* Communicate - stay engaged with the interviewer; ask them questions; be open about the issues of your system
* Go broad first - don't go straight to the algorithm part or get too focused on one part
* Use the whiteboard - use it right from the start to help draw a picture of what you're proposing
* Acknowledge interviewer concerns - the interviewer will likely jump in with concerns; validate them and make changes accordingly. Never ignore a concern!
* Be careful about assumptions - an incorrect assumption can dramatically change the problem. For example: how quickly does the data need to be accessible? How correct does it have to be? What are the use-cases?
* Estimate when necessary - you can estimate the number of resources needed by back-of-the-envelope calculations. In general, talk with the interviewer to make sure you're both on the same page.
* Drive - as the candidate, you should be driving the discussion; asking questions; be open to tradeoffs; keep going deeper; continue to make improvements until you run out of time.

## Design: Step-By-Step

### Step 1: Scope the Problem
You can't design a system if you don't know what you're designing. Scope the problem is important because you want to ensure that you're building what the interview wants (also, part of the interview is making sure that you know how to ask the right questions).

Ask questions to dig into exactly you'll need to implement. For example, for "design tinyURL", you might ask if people are able to specific their own URLs, if it will be auto-generated, if you need to keep track of the statistics, if links have timeouts, if there are user accounts.

Make a list on the board of the major features and use cases.

### Step 2: Make Reasonable Assumptions
Make some assumptions about scope; ask the interviewer to confirm if they are fair assumptions. How many people does the system need to support? How quick does the data have to be available? How quick do the statics have to be available? How accurate does the system/statistics have to be?

Write the assumptions on the board.

### Step 3: Draw the Major Components
Draw a diagram of the major components. You might have something like a frontend server and pulls data from the backend, another set of servers that crawl the internet for some data, and another set that process analytics.

Walk through your system from end-to-end to provide a flow.

It's helpful to ignore scalability challenges and pretend that simple approaches work for now.

### Step 4: Identify the Key Issues
Think about what the bottlenecks or major challenges in the system will be.

For example, some URLs might be infrequently accessed, while others will suddenly peak (ie. posted on Reddit), and so we don't necessarily want to constantly hit the database.

The interviewer might provide some guidance; if they do, make sure to use it.

### Step 5: Redesign for the Key Issues
Now, adjust your design for the key issue. It might involve a major redesign or just minor tweaking. Update the diagram as the design changes.

Make sure to be open about limitations of the design. Communication about tradeoffs is very important here.


## Algorithms that Scale: Step-By-Step

### Step 1: Ask Questions
Make sure you really understand the question. There might be details that were left out -- you can't solve a problem if you don't understand exactly what that problem is.

### Step 2: Make Believe
Pretend that the data can all fit on one machine and there are no memory limitations. How would you solve that problem? This will provide the general outline for your solution.

### Step 3: Get Real
Go back to the original problem. How much data can you fit on one machine, and what problems will occur when you split up the data?

Common problems include figuring out how to divide the data, and how one machine would identify where to look up a different piece of data.

### Step 4: Solve problems
Solve the issues from the previous step. For each issue, you might want to remove the issue entirely, or just mitigate it for now. Usually you can continue with the approach from Step 1, but sometimes you need to fundamentally change the approach.

The iterative approach here is usually useful -- once you tackle a set of problems, it's likely that new problems have emerged, and then you can tackle those as well.


Note that the goal here is not to literally recreate the system, it's to demonstrate that you can analyze and solve problems. Poking holes in your own solution is a good way to demonstrate this. The goal is to be able to understand use cases, scope a problem, make reasonable assumptions, create a solid design based on those assumptions, and be open about the weaknesses of your design. Do not expect something perfect.


## Key Concepts

* SQL vs NoSQL
  - SQL operates on explicit relational table definitions
  - SQL is better for well-defined projects and places where you want that rigidity
  - NoSQL is effectively just an object that can be queried
  - NoSQL is more flexible to changing requirements
  - NoSQL is better for scaling and distributing across more (because it doesn't need to move around all of the data, it just moves according to a single key)
* Horizontal vs Vertical Scaling
  - Vertical: increasing the resources of a specific node
  - Horizontal: increasing the number of nodes
  - Vertical scaling is generally easier than horizontal scaling, but is limited. You can only add so much memory or disk space.
* Load Balancer
  - A server that sits in front of your servers to distribute load evenly between them
  - Of course, you need a network of cloned servers that all have essentially the same code and access to the same data
* Database Normalization and NoSQL
  - Joins in SQL can get very slow as the system grows, so you typically try to avoid them
  - _Denormalization_ means adding redundant information into a database to speed up reads. You might duplicate information that you know you'll need as an extra column in the primarily read table.
  - Alternatively, you can go with a NoSQL database. It doesn't support joins and might structure data in a different way; it was designed to scale better.
* Database Partitioning (Sharding)
  - Split the data across multiple machines, while ensuring that you have a way of figuring out which data is on which machine. Many architectures end up using multiple partitioning schemes.
  - Vertical Partitioning: partition by feature (ie. one partition for profiles, one for messages, etc). A drawback is that if a table gets very large, you might need to repartition that database, possibly with a different scheme.
  - Key-Based (or Hash-Based) Partitioning: use a part of the idea (ie. an ID) to partition it. For example, you can partition between N servers and put the data on server `mod(key, n)`. One downside is that the number of servers you have is effectively fixed -- adding new servers means reallocating all the data, which is very expensive.
  - Directory-Based Partitioning: maintain a lookup table for where the data can be found. This makes it easy to add servers, but causes a single point of failure, and it negatively impacts performance.
* Replication
  - Share the _same_ data across multiple machines and allows for automatic failover to a backup node
  - Can also help with horizontal scaling of reads if you are okay with slightly outdated information
* Caching
  - A cache is typically a very fast simple key-value pairing that sits between the application layer and your data store.
  - When an application requests information, it first tries the cache; if it isn't there, it looks it up in the data store.
  - You might cache a query and its results directly, or cache a specific object.
  - Cache invalidation and strategy is important!
* Asynchronous Processing & Queues
  - Slow operations should ideally be done asynchronously; otherwise, a user might be stuck waiting for a process to complete.
  - In some cases, we can pre-process the work. For example, we might have a queue of jobs to be done that update some parts of a website regularly. The response might be slightly out of date between runs, but that's perhaps okay in comparison to a user waiting for a site to load for likely unimportant changes.
* Network Metrics
  - Bandwidth - maximum amount of data that can be transferred in a unit of time (ie. max bits per second)
  - Throughput - actual amount of data that can be transferred in a unit of time (ie. actual bits per second)
  - Latency - how long it takes data to go from one end to the other. In other words, the delay between the sender sending information and the receiver receiving it.
    * can be easy to disregard, but can be important in some situations. For example, in a video game, it's important that you immediately see an opponent's movement.
    * there is often very little you can do about latency (websockets, edge caching, geographical matching).
* MapReduce
  - lets you process large amounts of data. You write a Map step and a Reduce step. The rest is handled by the system.
  - `Map` takes in some data and emits a `<key, value>` pair
  - `Reduce` takes a key and a set of associated values and "reduces" them in some way, emitting a new `<key, value>` pair. The results of this might be fed back into `Reduce` for more reducing.
  - `MapReduce` allows us to do a lot of processing in parallel, which makes processing huge amounts of data more scalable.


## Considerations
* Failures - any part of a system can fail. You'll need to plan for many or all of these failures
* Availability - the percentage of time that the system is operational
* Reliability - the probability that the system is operational for a certain unit of time
* Read-heavy vs. write-heavy - if the application does a lot of reads or a lot of writes impacts the design. If it's write-heavy, you might consider queuing the writes (but think about potential failure here!). If it's read-heavy, you might want to cache. Other design decisions could change as well.
* Security - think about the types of issues a system might face and design around those.



## Example Problem
> Given a list o f millions o f documents, how would you find all documents that contain a list o f words? The words
  can appear in any order, but they must be complete words. That is, "book" does not match "bookkeeper."

First, find out if this is a one-time operation, or if it will be called repeatedly. We will assume that it will be used multiple times for the same set of documents, so it makes sense to do pre-processing.

Step 1: pretend we only have a few documents. How would we implement this normally? We'd probably pre-process each document and create a hash table index from word to the list of documents that contain the word. To search for "many books", we would do an intersection on the values for "books" and "many".

Step 2: what problems are introduced with millions of documents? We probably need to divide the documents across many machines. Also, we may not be able to put the entire hash table on one machine. Assuming this is the case...
  1. We will need to divide up the hashtable in some manner (by keyword or by document)
  2. We will need to process the data on multiple machines. If we process a document on one machine and push it to another machine, what does that process look like? If we divide by document, we probably don't need this step.
  3. We need a way of knowing which machine holds which data. What does this look like, and where is it stored?

Step 3: If we divide the words alphabetically by keyword, each machine will own a range of words (ie. "after through "apple"). We can implement an algorithm where we iterate through each keyword until we're full, if we're given the full list of keywords ahead of time. The advantage is that our lookup table is small and simple (since it is ranges), but if new documents or words are added, we will need to shift all of our data.

To find, we will sort the list and then send each machine a lookup request for the strings that each machine owns. Those requests go to the the hashtable and return the document numbers, which will then be intersected. On each machine finishing, it will merge with the existing results until we reach the end, which is the correct value.