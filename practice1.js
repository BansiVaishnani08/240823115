// // console.log("Hello World")
// // const name="Bansi Vaishnani";
// // console.log(name);





// 1. Check Even or Odd
// Definition: Determine if a number is even or odd.
// Input: 7
// Output: Odd

// const num = 7
// if(num%2==0)
// {
//     console.log(num + " Number is EVEN")
// }
// else
// {
//     console.log(num + " Number is ODD")
// }
// ===========================================================================================


// 2. Find the Maximum of Two Numbers
// Definition: Given two numbers, print the larger one.
// Input: 5 9
// Output: 9

// const num1 = 5
// const num2 = 9

// if(num1>num2)
// {
//     console.log("Max number is : "+num1)
// }
// else 
// {
//     console.log("Max number is : "+num2)
// }
// ===========================================================================================

// 3. Check Leap Year
// Definition: Check if a given year is a leap year.
// Input: 2020
// Output: Leap Year

// const year=2020
// if(year%4==0)
// {
//     console.log(year + " is Leap Year")
// }
// else
// {
//     console.log(year + " is not Leap Year")
// }
// ===========================================================================================


// 4. Sum of Natural Numbers
// Definition: Calculate the sum of the first n natural numbers.
// Input: 5
// Output: 15

// var num=5
// var sum=0
// for(var i=1;i<=num4;i++)
// {
//     sum+=i
// }
// console.log("Sum of the no. 1 to "+num+ " : " + sum)
// ===========================================================================================

// 5. Factorial of a Number
// Definition: Calculate factorial of a number.
// Input: 4
// Output: 24

// var num=4
// var fact=1
// for(var i=1;i<=num;i++)
// {
//     fact*=i
// }
// console.log("Factorial of "+num+ " : " + fact)
// ===========================================================================================

// 6. Print Multiplication Table
// Definition: Display multiplication table of a number up to 10.
// Input: 3
// Output: 3 x 1 = 3
// ...
// 3 x 10 = 30

// var num=3
// for(var i=1;i<=10;i++)
// {
//     console.log(num + " x " + i + " = " + num*i)
// }
// ===========================================================================================

// 7. Reverse a Number
// Definition: Reverse the digits of a number.
// Input: 1234
// Output: 4321

// var num=1234
// var rev=0
// while(num!==0)
// {
//     var remainder = num%10;
//     rev=rev*10+remainder;
//     num=Math.floor(num/10);
// }
// console.log("Revered Number : "+rev);

// ===========================================================================================

// 8. Palindrome Check (Number)
// Definition: Check if a number reads the same backward.
// Input: 121
// Output: Palindrome

// var no=121
// var num=no
// var rev=0
// while(num!==0)
// {
//     var remainder = num%10;
//     rev=rev*10+remainder;
//     num=Math.floor(num/10);
// }
// if(rev===no)
// {
//     console.log("Palindrome");
// }
// else
// {
//     console.log("Not Palindrome");
// }

// ===========================================================================================

// 9. Check Prime Number
// Definition: Check whether the input number is prime.
// Input: 11
// Output: Prime

// var num=11
// var isPrime = true;
// if(num<=1)
// {
//     isPrime=false;
// }
// else
// {
//     for(var i=2;i<num;i++)
//     {
//         if(num%i==0 )
//         {
//             isPrime=false;
//             break;
//         }
//     }
// }
// if(isPrime)
// {
//     console.log(num + " is Prime Number");
// }
// else
// {
//     console.log(num + " is Not Prime Number");
// }

// ===========================================================================================

// 10. Count Digits in a Number
// Definition: Count how many digits a number contains.
// Input: 5023
// Output: 4

// var num =5023;
// var count=0;
// while(num!==0)
// {
//     num=Math.floor(num/10);
//     count++
// }
// console.log("Total number of digits : "+count);

// ===========================================================================================

// 11. Sum of Digits
// Definition: Calculate the sum of all digits in a number.
// Input: 123
// Output: 6

// var num =123;
// var sum=0;
// while(num!==0)
// {
//     var remainder = num%10;
//     sum+=remainder;
//     num=Math.floor(num/10);
// }
// console.log("Sum of digits : "+sum);

// ===========================================================================================

// 12. Check Armstrong Number
// Definition: Check if the number is equal to the sum of its digits 
// each raised to the power of the number of digits.
// Input: 153
// Output: Armstrong

// var num=152
// var rev=0
// var total=0

// var len=num.toString().length

// while(num!==0)
// {
//     var rem=num%10
//     rev=rev*10+rem
//     num=Math.floor(num/10)
//     total+=Math.pow(rem,len)
// }

// if(total===num)
// {
//     console.log(num+ " is an Armstrong");
// }
// else
// {
//     console.log(num+ " is not an Armstrong");
// }

//===========================================================================================

// 13. Generate Fibonacci Series
// Definition: Generate the first n Fibonacci numbers.
// Input: 5
// Output: 0 1 1 2 3

// var num=5
// var a=0
// var b=1
// var c=0
// for(var i=0;i<=num;i++)
// {
//     console.log(a)
//     var c=a+b
//     a=b
//     b=c
// }

//===========================================================================================

// 14. Check Vowel or Consonant
// Definition: Determine if a given character is a vowel.
// Input: a
// Output: Vowel

// var char = 'a';
// if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
//    char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
//     console.log(char + " is a Vowel");
// }
// else
// {
//     console.log(char + " is a Consonant");
// }

//===========================================================================================

// 15. Simple Calculator
// Definition: Perform +, -, *, / between two numbers.
// Input: 4 + 2
// Output: 6

// var num1 = 4;
// var num2 = 2;        
// var operator = '+';
// var result;
// switch(operator) {
//     case '+':
//         result = num1 + num2;
//         break;
//     case '-':
//         result = num1 - num2;
//         break;
//     case '*':
//         result = num1 * num2;
//         break;
//     case '/':
//         result = num1 / num2;
//         break;
//     default:
//         console.log("Invalid operator");
//         break;
// }
// console.log("Result: " + result);

//===========================================================================================

// 16. Find GCD (HCF)
// Definition: Calculate the greatest common divisor of two numbers.
// Input: 20 28
// Output: 4

// var num1=20
// var num2=28
// var div,num=0

// if(num1>num2)
// {
//     num=num2
// }
// else
// {
//     num=num1
// }

// for(var i=2;i<=num;i++)
// {
//     if(num1%i==0 && num2%i==0)
//     {
//         div=i
//     }
// }
// console.log(div +" is a greatest common divisor of "+num1 + " and "+num2 )

//===========================================================================================

// 17. Check Perfect Number
// Definition: A number whose sum of divisors equals itself.
// Input: 28
// Output: Perfect

// var num=24
// var div,sum=0
// for(var i=1;i<num;i++)
// {
//     if(num%i==0)
//     {
//         div=i
//         sum+=div
//     }
// }
// if(num==sum)
// {
//     console.log(num + " is a Perfect number")
// }
// else
// {
//     console.log(num + " is not a Perfect number")
// }

//===========================================================================================

// 18. Print All Divisors
// Definition: Display all positive divisors of a number.
// Input: 10
// Output: 1 2 5 10

// var num=10
// for(var i=1;i<=num;i++)
// {
//     if(num%i==0)
//     {
//         div=i
//         console.log(div)
//     }
// }

//===========================================================================================

// 19. Number is Positive, Negative or Zero
// Definition: Check if number is +ve, -ve, or zero.
// Input: -5
// Output: Negative

// var num = -5;
// if(num > 0) {
//     console.log(num + " is Positive");
// }
// else if(num < 0) {
//     console.log(num + " is Negative");
// }
// else {
//     console.log("Number is Zero");
// }

//===========================================================================================

// 20. Find Power (Exponentiation)
// Definition: Compute a raised to the power b (a^b).
// Input: 2 3
// Output: 8

// var b=2;
// var p=3;
// console.log("Power of (2,3) : "+Math.pow(b,p));

hello