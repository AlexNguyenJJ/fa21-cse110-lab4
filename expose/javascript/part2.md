# Javascript Part 2
### 1
Line 12 prints out 3

### 2
Line 13 prints out 150

### 3
Line 14 prints out 150

### 4
The function will return an array of 3 elements: `[50, 100, 150]` because the `discounted`
is a `var` array and after running through the `for` loop on line 6, which iterates through
the `prices` input array and discounts the prices for each element in the input array
then pushes the discounted price into the `discounted` array.

### 5
The code causes an error because the variable `i` is declared with `let`, which
means it can only be accessed within the block it is declared in i.e. the `for`
loop. Since line 12 is outside the `for` loop, it cannot access the `i` in the
`for` loop block and thus cannot print anything for the `i` does not exist for it.

### 6
This has the same issue as the previous question. The code will cause an error 
because `discountedPrice` is declared with `let` inside the `for` loop and so its
value is not able to be retrieve by the `console.log` statement on line 13.

### 7 
Since `finalPrice` is declared in the same scope as the code on line 14, despite
it being declared as a `let` variable, the `console.log` statement is still able
to access `finalPrice`. Thus, line 14 will print out 150.

### 8
Similarly to #7, `discounted` is an array that is declared with `let` but in the
same scope as line 16, which is the return statment. Therefore, the function will
return the `discounted` array which is: `[50, 100, 150]`\

### 9
This is the same issue as #5; since `i` is a `let` variable, line 11 will not be
able to get its value since `i` is not in the same code block. Thus, the code 
will cause an error.

### 10
Line 12 will print out the length of the array since `length` is a `const`
variable in the same scope/block as line 12. Thus, `3` will be printed out

### 11
The function will return an empty array: `[]` since the returned variable, `discounted`
is declared as a `const`, therefore it will not be changed, even through the
`for` loop

### 12
##### 12A
`student.name` or `student[name]`
##### 12B
`student["Grad Year"]`
##### 12C
`student.greeting()`
##### 12D
`student["Favorite Teacher"][name]`
##### 12E
`student[courseLoad][0]`

### 13
##### 13A
`'32'`; This output was given because integers map to their exact string representation
so 2 was mapped to '2' and then it became '3'+'2' which is just string concatenation
##### 13B
`1`; This output was given because unlike the '+' operator, the '-' operator does 
not exist with strings so here, '3' got mapped to it integer equivalent making the
statement become an integer equation 3-2=1. It seems that among two integers, one
which is a string and the other integer, '+' by default means string concatenation
and '-' means integer subtraction.
##### 13C
`3`; This output was given because `3` is an integer and adding `null` to `3` is just
integer addition and since null has the same integer value as 0, `3+null` = `0`
##### 13D
`'3null'`; This output was given because here, the 3 is denoted as a string `'3'`
and so Javascript reads the addition statement as a string concatenation statement
where `null` is mapped to its string equivalent `'null'`
##### 13E
`4`; `true` is a boolean value and its integer/bit equivalent is 1. When a boolean
is added to an integer, the boolean is converted to its integer equivalent thus
`true+3` becomes `1+3` = `4`.
##### 13F
`0`; `false` is equivalent to `0` as an integer and since there are no strings in
this statement, it cannot be string concatenation. `null` also has an integer
value of `0` so `false+null` is essentially the same as `0+0` = `0`.
##### 13G
`'3undefined'`; the 3 is denoted a string `'3'` so when it is added to another
value, by default it become string concatenation and so Javascript reads
`undefined` as a string. Thus the statement `'3'+undefined` -> `'3'+'undefined'`
= `'3undefined'`.
##### 13H
`NaN`; This is Javascript's way of saying that the statement is invalid as an
arithmetic expression. Since the expression contains an `-` sign, Javascript 
thinks this is a subtraction expression. However, even though `'3'` might be able
to be mapped to its integer equivalent `3`, `undefined` cannot be mapped to any
integer since it has no integer value; it is just "undefined". Therefore, the
output is `NaN` or "Not a Number"

### 14
##### 14A
`true`; In this comparison, one of the values, `1`, is an integer and so this is
read as a comparison between two integers since the string `'2'` can be mapped
to it integer equivalent `2`. Since 2 is indeed greater than 1, the comparison
returns `true`
##### 14B
`false`; This is a comparison between two strings since both values are strings.
Therefore, due to the algorithm for string comparisons, the first character in 
each string is compared to one another, the second in each to one another, and
so on and so forth according to lexigraphical order. That means that when doing
this comparison, `'2'` is checked against `'1'`, but since `'1'` comes before
`'2'` in the "dictionary", the comparison `'2'<'1'` is invalid = false. Thus the
comparison exits immediately and returns false.
##### 14C
`true`; Since one of the values being compared is of type integer, and both *can*
be mapped to integers, this becomes an integer comparison due to the comparison
operator `==`. This comparison then just reads as `2==2` which is true of course.
##### 14D
`false`; Even though the two values are identical to the ones found in the previous
comparison, this comparison uses the `===`, which is a **deep** comparison i.e.
compares the values as they are instead of doing a conversion for one or the other.
Thus, this is actually comparing the string `'2'` against the integer `2`; they
are not identical and so the comparison returns false.
##### 14E
`false`; As with the `==` comparison operator, this allows one of the values to 
be converted to an integer if the other is explicitly an integer. The right hand
side has integer `2` and so `true` is converted to its integer equivalent `1`.
Comparing these two, `1` is not the same as `2` and so the comparison returns false.
##### 14F
`true`; Here we have the deep comparison operator `===`. However, we have an 
**explicit** typecast of Boolean on the integer 2. According to Javascript, any 
integer that is not 0 when typecasted to Boolean is `true`. Thus, the comparison
becomes `true === true` which is indeed `true`.

### 15
The difference between the `==` and `===` operators is that one is an explicit 
deep comparison (`===`) which compares the two values as they are without any
"automatic" conversion e.g. string -> integer. The other (`==`) compares two 
values while allowing for automatic type conversion.

### 16
[Answered in JS file](./part2-question16.js)

### 17
`[2,4,6]`

After calling `modifyArray([1,2,3], doSomething)`, a new array is created by line
2 called `newArr`. Then we enter a `for` loop that iterates through the entire
length of the input array; at each iteration, we push the value returned by the
callback function which takes an input of each element in the array to our new 
array `newArr`. On line 4, when we push some value, we enter the callback function 
`doSomething()` on line 9. This function has a parameter of `num` and since all 
the elements in our input array are integers, let's just call `num` an integer.
This function takes the input integer and returns its double by multiplying it 
by 2. This doubled value is then pushed onto the new array `newArr` and after 
doubling all the elements in the original array and pushing it to `newArr`, the
`modifyArray()` function returns `newArr`.

### 18
[Answered in JS file](./part2-question18.js)

### 19
1
4
3
2