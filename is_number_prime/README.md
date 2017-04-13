
#   Check If the Number is Prime:

####    Function    `numIsPrime()`

Takes in a Number. Checks if the Number is Prime or Composite.

First Function checks for Numbers which are not divisible by any other Number
but are Prime Number. Function outputs `true` i.e:

1.  2 is a Prime Number
2.  3 is a Prime Number

Then Function checks for if the Number is 1 or divisible by 2 or 3. If Yes then function output the `false`

After 1, 2, 3 Checked We don't try to divide the Number with a Multiple of 2 or 3. As
if the Number could be divided by a Multiple of 2 or 3 then I could've been also divided by 2 or 3.

So, we skip multiples of 2 or 3 as `devidor` and go to next number which is 5. Now we check for `n % 5` or `n % 5+2` i.e `n % 7` because 6 is a multiple or 2 or 3. So only viable next number was next ODD Number hence `+2`.

So after 5  & checking for 7 we skipped:

####    6, 8, 9, 10


Now next viable divider was `11` which is `5 + 6`. So the Increment was set to `6`.


####    Output  True or False

If the Number is Prime output is True. If the Number is Composite output is False.
