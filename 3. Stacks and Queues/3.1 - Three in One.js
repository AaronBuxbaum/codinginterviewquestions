/*
    Describe how you could use a single array to implement three stacks.
 */

/*
    A lot of this depends on the discussion with the interviewer -- if we know how big the array will be,
    or if we can make such assumptions, we can just split up the array accordingly and then manage the
    split points in functions.

    If we need to have dynamic sizes, the problem gets a lot harder -- we now have to manage split points,
    but we also have to shift all elements over every time one of the arrays changes in size.
 */
