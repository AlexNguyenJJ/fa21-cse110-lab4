# Javascript Part 1

### 1
Line 9 prints out 20

### 2
Line 13 prints out 0 because even though result is defined in the `if` block, 
the `var` keyword means that that variable can be accessed anywhere within the
function is is defined in.

### 3
Line 9 prints out 20

### 4
The code returns an error because `result` is declared with `let`, meaning it can
only be accessed within the same block. The else statement is a different block
from where `result` is defined in and since result is not declared inside the
else block, line 13 is unable to retrieve `result` since the variable doesn't 
exist (within that block) yet!

### 5
Line 9 prints out 0

### 6
Similar to the issue as the `let` keyword, `const` only provided the variable 
with a scope of the block and not the function. With the same justification
provided in (question 4)[#4], the code returns an error