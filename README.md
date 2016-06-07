# LuckyNumber
Code to find whether given number contains recurring digits or not.
Language: JavaScript
If a number contains no recurring digits, it is considered lucky and else otherwise.
Algorithm
1. extract a digit from given number
2. check if it already occured
3. if yes return false
4. shift number to left by dividing it with 10
4. if number is not zero, go to step 1
5. return true
