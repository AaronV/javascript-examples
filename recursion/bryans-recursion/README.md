## Problem:

Flatten an array of arbitrary depth array's in depth-first order.

```
[1,2,[3,[4,5],6] --> [1,2,3,4,5,6]

[1,2,[3,[4,5],6] w/ depth=0 --> input.
depth=1 --> [1,2,3,[4,5],6]
```

## Chat History:

Bryan:
	I was going to send you a recursion problem I came up with the other day and wrote some code for
	Take a list which has an arbitrary depth of nested lists as members and write a function which flattens it
	Such that the list has no nested lists and items are in depth first order
	Part two is allow a "maximum depth" argument, so that the input collection will only flatten sub lists up to a defined depth. Default is unlimited depth.
	If that makes any sense
	The input list may not have any nested lists, or may have a mix of nested lists and nonlist members
	[1,2,[3,[4,5],6] --> [1,2,3,4,5,6]
	[1,2,[3,[4,5],6] w/ depth=0 --> input. depth=1 --> [1,2,3,[4,5],6]

Me:
	cool
	wait, shouldn’t depth=1 --> [1,2,3,6,4,5]?
	depth of level one ordered first, then level 2, etc...
	and all flat?

Bryan:
	That'd be breadth first, no?

Me:
	huh?

Bryan:
	Shit I forgot a closing bracket
	I am typing on a phone 😬
	Input is [1,2,[3,[4,5]],6]

Me:
	haha
	and the output should be flat?

Bryan:
	Well, if a depth is supplied, you only flatten that many levels
	If no depth is supplied, flatten it completely

Me:
	hmm
	like shaving the top off a mountain?
	so [1,2,[3,[4,5]],6] depth=0 --> [1,2,3,4,5,6]?

Bryan:
	Depth=0 yields the input
	So no flattening
	You are flattening zero levels

Me:
	ah
	i see
	[1,2,[3,[4,5]],6] depth=1 --> [1,2,[3,4,5],6]?

Bryan:
	[1,2,3,[4,5],6]

Me:
	oh like that
	okay, i think i get it
