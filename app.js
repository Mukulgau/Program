1.  // C Program to Check Whether a Character is a Vowel or Consonant.

// const vow = 'a'; 
// if(vow == 'a' || vow == 'e' || vow == 'i' || vow == 'o' || vow == 'u'){
//   console.log("Character is a Vowel");
// } else {
//   console.log("Character is not a Vowel")
// }


2.  // C Program to Find the Largest Number Among Three Numbers
// let num1 = 10, num2 = 5, num3 = 8;
// if(num1 >= num2 && num1 >= num3) {
//     console.log(`${num1} is Largest`)
// } else if(num2 >= num1 && num2 >= num3) {
//     console.log(`${num2} is Largest`);
// } else {
//     console.log(`${num3} is Largest`);
// }


3. // C Program to Find the Roots of a Quadratic Equation.
// let a = prompt("Enter a First Number");
// let b = prompt("Enter a Second Number");
// let c = prompt("Enter a Third Number");

// let root1, root2;

// let discriminant = b * b - 4 * a * c;
// console.log(discriminant);

// if(discriminant > 0){
//   root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//   root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

//   console.log(`The roots of the quadratic equation are ${root1} and ${root2}`);
// } else if(discriminant == 0) {
//   root1 = -b / (2 * a);
//   root1 = -b / (2 * a);

//   console.log(`The roots of the quadratic equation are ${root1} and ${root2}`);
// } else {
//   let realPart = (-b / (2 * a)).toFixed(2);
//   let imagPart = (Math.sqrt(discriminant) / (2 * a)).toFixed(2);
  
//   console.log(`The roots of the quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
// }

4. // C Program to Check Leap Year
// let year = prompt("Enter the year");

// if(year % 400 == 0) {
//   console.log(`${year} is Leap Year`);
// } else if(year % 100 == 0) {
//   console.log(`${year} is not leap year`);
// } else if(year % 4 == 0) {
//   console.log(`${year} is leap year`);
// } else {
//   console.log(`${year} is not leap year`);
// }

5. // C Program to Check Whether a Number is Positive or Negative
// let num = prompt("Enter a Number");
// if(num < 0){
//   console.log(`${num} is negative`);
// } else if(num == 0) {
//   console.log(`You enter a ${num}`);
// } else {
//   console.log(`${num} is positive`);
// }

6. // C Program to Check Whether a Character is an Alphabet or not
// let char = prompt("Enter a Character");

// if((char >= 'A') && (char <= 'Z') || (char >= 'a') && (char <= 'z')) {
//   console.log(`${char} is an Alphabet`);
// } else {
//   console.log(`${char} is not an Alphabet`);
// }

7. // C Program to Calculate the Sum of Natural Numbers
// let i, sum = 0;
// let n = prompt("Number");
// for(i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

8. // C Program to Find Factorial of a Number
// let num = prompt("ENter a Number");
// let i, mul = 1;
// if(num == 0) {
//   console.log(1);
// }
// for(i = num; i >= 1; i--) {
//   mul *= i;
//   console.log(mul);
// }

9. // C Program to Generate Multiplication Table
// let num = prompt("Enter a Number");
// let i;
// for(i = 1; i <= 10; i++) {
//   console.log(`${num} * ${i} = ${num * i}`);
// }

10. // C Program to Display Fibonacci Sequence
// let num = parseInt(prompt("Enter a Number"));
// let nextTerm, n1 = 0, n2 = 1;

// console.log("Fibonacci Sequence");

// for(let i = 1; i <= num; i++) {
//   console.log(n1);
//   nextTerm = n1 + n2;
//   n1 = n2;
//   n2 = nextTerm;
// }

11. // C Program to Find GCD of two Numbers

12. // C Program to Find LCM of two Number

13. // C Program to Display Characters from A to Z Using loop
// for(let i = 0; i < 26; i++){
//   console.log(String.fromCharCode(i + 65));
// }

14. // C Program to Count Number of Digits in an Integer
// let num = prompt("Enter a Number");
// let count = 0;

// do {
//   num = Math.floor(num / 10);
//   ++count;
// } while(num != 0)
// console.log(count);

15. // C Program to Reverse a Number
// let num = prompt("Enter a Number");
// let rev = 0;

// while(num > 0) {
//     let rem = num % 10;
//     rev = rev * 10 + rem;
//     num = Math.floor(num / 10);
// }
// console.log(rev);

16. // C Program to Calculate the Power of a Number
// let num = prompt("Enter a Number");
// let pow = prompt("Enter a power");
// let count = 1;
// for(let i = 1; i <= pow; i++) {
//   count *= num;
// }
// console.log(count);

17. // C Program to Check Whether a Number is Palindrome or Not
// let num = prompt("Enter a Number");
// let rem, rev = 0, original = num;
// while(num > 0){
//   rem = num % 10;
//   rev = rev * 10 + rem;
//   num = Math.floor(num / 10);
// }
// if(rev == original){
//   console.log("Number is Palindrome")
// } else {
//   console.log("Number is not a Palindrome")
// }

18. // C Program to Check Whether a Number is Prime or not
// let num = 12;
// let isPrime = true;

// if(num === 1){
//     console.log(`${num} is neither prime or composite number`);
// } else if(num > 1){
//     for(let i = 2; i < num; i++){
//         if(num % i == 0){
//             isPrime = false;
//             break;
//         }
//     }

//     if(isPrime == true){
//         console.log(`${num} is Prime number`);
//     } else {
//         console.log(`${num} is not Prime number`);
//     }
// } else {
//     console.log(`The num is not prime number`);
// }


19. // C Program to Display Prime Numbers Between Two Intervals

20. // C Program to Check Armstrong Number
// let num = prompt("Enter a Number");
// let count = 0, rev = 1, no = num, original = num, sum = 0;

// while(original > 0){
//     original = Math.floor(original / 10);
//     count++;
// }
// while(no > 0){
//     let rem = no % 10;
//     for(let i = 1; i <= count; i++){
//         rev = rev * rem;
//     }
//     sum += rev;
//     no = Math.floor(no / 10);
//     rev = 1;
// }

// if(sum == num) {
//     console.log("Number is ArmStrong");
// } else {
//     console.log("Number is not Armstrong");
// }

21. // C Program to Display Armstrong Number Between Two Intervals

22. // C Program to Display Factors of a Number
// let num = prompt("Enter a Number");
// for(let i = 1; i <= num; i++){
//   if(num % i == 0){
//     console.log(`${i}`);
//   }
// }

23. // C Program to Make a Simple Calculator Using switch...case
// let num1 = prompt("Enter First Number");,
//     num2 = prompt("Enter Second Number");
// let op = "*";

// switch(op) {
//     case "+" :
//         console.log(num1 + num2);
//         break;
//     case "-" :
//         console.log(num1 - num2);
//         break;
//     case "*" :
//         console.log(num1 * num2);
//         break;
//     case "/" :
//         console.log(num1 / num2);
//         break;
//     default :
//         console.log("Error! Operator is not found");
// }

24. // C Program to Display Prime Numbers Between Intervals Using Function

25. // C Program to Check Prime or Armstrong Number Using User-defined Function

26. // C Program to Check Whether a Number can be Expressed as Sum of Two Prime Numbers

27. // C Program to Find the Sum of Natural Numbers using Recursion

28. // C Program to Find Factorial of a Number Using Recursion
// let num = prompt("Enter Number");
// function fact(n) {
//     if(n == 0){
//         return 1;
//     } else if(n == 1){
//         return 1;
//     } else {
//         return n * fact(n -1);
//     }
// }

// console.log(fact(num));

29. // C Program to Find G.C.D Using Recursion

30. // C Program to Convert Binary Number to Decimal and vice-versa

31. // C Program to Convert Octal Number to Decimal and vice-versa

32. // C Program to Convert Binary Number to Octal and vice-versa

33. // C Program to Reverse a Sentence Using Recursion

34. // C Program to Calculate the power using recursion

35. // C Program to Calculate Average Using Arrays
// let nums = [];
// let sum = 0, avg;
// let N = prompt("Enter a number of array");
// N = parseInt(N);
// for(let i = 0; i < N; i++) {
//   nums[i] = parseInt(prompt("Enter a Number"));
//   sum += nums[i];
// }
// avg = sum / N;
// console.log(avg);

36. // C Program to Find Largest Element in an Array
// let nums = [];
// let N = parseInt(prompt("Enter a number of array"));
// for(let i = 0; i < N; i++){
//   nums[i] = parseInt(prompt("Enter a Number"));
//   if(nums[0] < nums[i]){
//     nums[0] = nums[i];
//   }
// }
// console.log(nums[0]);

37. // C Program to Calculate Standard Deviation
// let arr = [2, 4, 4, 4, 5, 5, 7, 9];
// let sum = 0, avg, mean, SD = 0, dev = 1;
// let len = arr.length;

// for(let i = 0; i < len ; i++) {
//     sum += arr[i];
// }
// avg = sum / len;

// for(let j = 0; j < len; j++){
//     arr[j] = arr[j] - avg;
//     for(let k = 1; k <= 2; k++){
//         dev = dev * arr[j];
//     }
//         SD += dev;
//         dev = 1;
//     // SD += ((arr[j] - avg) ** 2);
// }
// mean = SD / len;

// console.log(Math.sqrt(mean));

38. // C Program to Add Two Matrices Using Multidimensional Arrays

39. // C Program to Multiply Two Matrices Using Multi-dimensional Arrays

40. // C Program to Find Transpose of a Matrix

41. // C Program to Multiply two Matrices by Passing Matrix to a Function

42. // C Program to Access Array Elements Using Pointer

43. // C Program Swap Numbers in Cyclic Order Using Call by Reference

44. // C Program to Find Largest Number Using Dynamic Memory Allocation

45. // C Program to Find the Frequency of Characters in a String
// let str = "asfghjkakgjdkjgadafhjdhafhkd";
// let obj = {};
// let len = str.length;

// for(let i = 0; i < len; i++){
//     if(obj[str[i]] == undefined){
//         obj[str[i]] = 1;
//     } else {
//         obj[str[i]] += 1;
//     }
// }
// console.log(obj)

46. // C Program to Count the Number of Vowels, Consonants and so on
// let str = "Love Me as You Love You";
// let vowel = 0, consonants = 0, extra = 0, digits = 0;
// let len = str.length;

// for(let i = 0; i < len; i++){
//     if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
//         vowel++;
//     } else if(str[i] >= 'a' && str[i] <= 'z'){
//         consonants++;
//     } else if(str[i] >= 'A' && str[i] <= 'Z') {
//         consonants++;
//     } else if(str[i] >= '0' && str[i] <= '9'){
//         digits++;
//     } else {
//         extra++;
//     }
// }
// console.log(`Vowel : ${vowel}`);
// console.log(`Consonants : ${consonants}`);
// console.log(`Digits : ${digits}`);
// console.log(`Extra : ${extra}`);

47. // C Program to Remove all Characters in a String Except Alphabets
// let str = "ghdjf454tjjkfglkjfdsg";
// let len = str.length;
// let str1 = "";

// for(let i = 0; i < len; i++){
//     if(str[i] >= "A" && str[i] <= "Z" || str[i] >= "a" && str[i] <= "z"){
//         str1 += str[i];
//     }
// }
// console.log(str1);

48. // C Program to Find the Length of a Strings
// function len(str) {
//   let count = 0;
//   for(let i = 0; str[i] !== undefined; i++) {
//       count++;
//   }
//   return count;
// }

// console.log(len("FUCK YOU"));

49. // C Program to Concatenate Two Strings

50. // C Program to Copy String Without Using strcpy()

51. // C Program to Sort Elements in Lexicographical Order(Dictonary Order)

52. // C Program to Store Information of a Student Using Structure

53. // C Program to Add Two Distances (in inch-feet system) using Structure

54. // C Program to Add Two Complex Numbers by Passing Structure to a Function

55. // C Program to Calculate Difference Between Two Time Periods

56. // C Program to Store Information of Students Using Structure

57. // C Program to Store Data in Structures Dynamically

58. // C Program to Write a Sentence to a File

59. // C Program to Read the First Line From a File

60. // C Program to Display its own Source Code as Output








// JAVASCRIPT

1. // JavaScript Program To Print Hello World
// let a = prompt("Enter the String");
// console.log(a);

2. // JavaScript Program to Add Two Numbers
// let a = prompt("Enter First Number");
// let b = prompt("Enter Second Number");
// console.log(a + b);

3. // JavaScript Program to Find the Square Root
// let  a = prompt("Enter the Number");
// console.log(Math.sqrt(a));

4. // JavaScript Program to Calculate the Area of a Triangle
// let base = prompt("Enter the Base");
// let height = prompt("Enter the Height");

// let area = (1 / 2) * base * height;
// console.log(area);

5. // JavaScript Program to Swap Two Variables
// let a = prompt("Enter First Number"); 
// let b = prompt("Enter Second Number");
// let c;

// c = a;
// a = b;
// b = c;
// console.log(`${a} ${b}`)

6. // Javascript Program to Solve Quadratic Equation
// let a = prompt("Enter First Number"),
//  b = prompt("Enter Second Number"),
//  c = prompt("Enter Third Number");
// let discriminant = b * b - 4 * a * c;
// let root1, root2;
// if(discriminant > 0){
//     root1 = (-b + Math.sqrt(discrimiant)) / 2 * a;
//     root2 = (-b - Math.sqrt(discriminant)) / 2 * a;
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// } else if(discriminant == 0){
//     root1 = -b / (2 * a);
//     root2 = -b / (2 * a);
//     console.log(`The roots of the quadratic equation are ${root1} and ${root2}`);
// } else {
//     let realPart = (-b / (2 * a)).toFixed(2);
//     let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
//     console.log(`The root of the quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
// }

7. // JavaScript Program to Convert Kilometers to Miles
// let kilometers = prompt("Enter the number of kilometers");
// let factor = 0.621371;
// const miles = kilometers * factor;
// console.log(miles);

8. // Javascript Program to Convert Celsius to Fahrenheit
// let celsius = prompt("Enter the Celsius");
// const fahrenheit = celsius * 1.8 + 32;
// console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit`);

9. // Javascript Program to Generate a Random Number
// const a = Math.random();
// console.log(`Random Number is ${a}`);

10. // Javascript Program to Check if a number is Positive, Negative, or Zero
// const num = prompt("Enter a Number");
// if(num > 0) {
//     console.log(`Number is Positive`);
// } else if(num = 0) {
//     console.log(`Number is Zero`);
// } else {
//     console.log(`Number is Negative`);
// }

11. // Javascript Program to Check if a Number is Odd or Even
// let num = prompt("Enter a Number");
// if(num % 2 == 0) {
//     console.log(`${num} is Even`);
// } else {
//     console.log(`${num} is Odd`);
// }

12. // JavaScript Program to Find the Largest Among Three Numbers
// let num1 = 10, num2 = 5, num3 = 8;
// if(num1 >= num2 && num1 >= num3) {
//     console.log(`${num1} is Largest`)
// } else if(num2 >= num1 && num2 >= num3) {
//     console.log(`${num2} is Largest`);
// } else {
//     console.log(`${num3} is Largest`);
// }

13. // JavaScript Program to Check Prime Number
// let num = 12;
// let isPrime = true;

// if(num === 1){
//     console.log(`${num} is neither prime or composite number`);
// } else if(num > 1){
//     for(let i = 2; i < num; i++){
//         if(num % i == 0){
//             isPrime = false;
//             break;
//         }
//     }

//     if(isPrime == true){
//         console.log(`${num} is Prime number`);
//     } else {
//         console.log(`${num} is not Prime number`);
//     }
// } else {
//     console.log(`The num is not prime number`);
// }

14. // JavaScript Program to Print All Prime Numbers in an Interval

15. // JavaScript Program to Find the Factorial of a Number
// let num = prompt("Enter a Number");
// let count = 1;
// for(let i = 1; i <= num; i++){
//     count *= i;
// }
// console.log(`Factorial of ${num} is ${count}`);

16. // JavaScript Program to Display the Multiplication Table
// let num = 3;
// for(let i = 1; i <= 10; i++){
//     console.log(`${num} * ${i} = ${num * i}`);
// }

17. // JavaScript Program to Print the Fibonacci Sequence
// let num = prompt("Enter Number");
// let n1 = 0, n2 = 1, nextTerm;

// for(let i = 1; i <= num; i++){
//     nextTerm = n1 + n2;
//     n2 = n1;
//     n1 = nextTerm;
//     console.log(n2)
// }

18. // JavaScript Program to Check Armstrong Number
// let num = prompt("Enter a Number");
// let original  = num, no = num, count = 0, sum = 0, rem, rev = 1;

// while(no > 0) {
//     no = Math.floor(no / 10);
//     count++;
// }
// while(num > 0) {
//     rem = num % 10;
//     for(let i = 1; i <= count; i++){
//         rev = rev * rem;
//     }
//     sum += rev;
//     num = Math.floor(num / 10);
//     rev = 1;
// }
// if(sum == original){
//     console.log(`${original} is Armstrong Number`);
// } else {
//     console.log(`${original} is not Armstrong Number`);
// }

19. // JavaScript Program to Find Armstrong Number in an Interval

20. // JavaScript Program to Make a Simple Calculator
// let a = prompt("Enter First Number"),
//  b = promt("Enter Second Number");
// let op = prompt("Enter a Operator");

// switch(op){
//     case "+":
//         console.log(`${a + b}`);
//         break;
//     case "-":
//         console.log(`${a - b}`);
//         break;
//     case "*":
//         console.log(`${a * b}`);
//         break;
//     case "/":
//         console.log(`${a / b}`);
//         break;
//     default :
//         console.log(`Operator is wrong`);
// }

21. // JavaScript Program to Find the Sum of Natural Numbers
// let num = 10;
// let sum = 0;
// for(let i = 1; i <= num; i++){
//     sum += i;
// }
// console.log(sum);

22. // JavaScript Program to Check if the Numbers Have Same Last Digit
// let num1 = 123;
// let num2 = 453;
// let num3 = 783;

// const result1 = num1 % 10;
// const result2 = num2 % 10;
// const result3 = num3 % 10;

// if(result1 == result2 && result2 == result3){
//     console.log(`Numbers has same last digit`);
// } else {
//     console.log(`Numbers does not have same last digit`);
// }

23. // JavaScript Program to Find HCF or GCD
// let num1 = 60, num2 = 75;
// let hcf;

// for(let i = 1; i <= num1 && i <= num2; i++){
//     if(num1 % i == 0 && num2 % i == 0){
//         hcf = i;
//     }
// }
// console.log(`${hcf}`)

24. // JavaScript Program to Find LCM
// let num1 = 16, num2 = 20;
// let min = (num1 > num2) ? num1 : num2;
// while(true){
//     if(min % num1 == 0 && min % num2 == 0){
//         console.log(min);
//         break;
//     }
//     min++;
// }

25. // JavaScript Program to Find the Factors of a Number
// let num = 100;
// for(let i = 1; i <= num; i++){
//     if(num % i == 0){
//         console.log(i)
//     }
// }

26. // JavaScript Program to Find Sum of Natural Numbers Using Recursion
// function sum(num){
//   let result;
//   if(num > 0) {
//       result = num + sum(num -1);
//       console.log(result);
//   }
//   console.log(num)
// }
// sum(5);
// INCOMPLETE

27. // JavaScript Program to Guess a Random Number
// let num = prompt("Enter a random number");
// let random = Math.floor((Math.random() * 10) + 1);

// while(num != random){
//   num = parseInt(prompt("Enter a number again"));
// }
// if(num == random){
//   console.log("You Guessed the Correct Number");
// } else {
//   console.log("You Guessed the Wrong Number")
// }

28. // JavaScript Program to Shuffle Deck of Cards

29. // JavaScript Program to Display Fibonacci Sequence Using Recursion

30. // JavaScript Program to Find Factorial of Number Using Recursion
// function fact(num){
//   if(num == 0) {
//       return 1;
//   } else if(num == 1) {
//       return 1;
//   } else {
//       return num * fact(num -1);
//   }
// }

// console.log(fact(5));

31. // JavaScript Program to Convert Decimal to Binary

32. // JavaScript Program to Find ASCII Value of Character
// let str = 'z';
// let ascii = str.charCodeAt(0);
// console.log(ascii);

33. // JavaScript Program to Check Whether a String is Palindrome or Not
// let str = prompt("Enter a String");
// let len = str.length;
// let string = "";

// for(let i = len -1; i >= 0; i--){
//     string += str[i];
// }
// if(string == str){
//     console.log("String is Palindrome");
// } else {
//     console.log("String is not Palindrome");
// }

34. // JavaScript Program to Sort Words in Alphabetical Order

35. // JavaScript Program to Replace Characters of a String

36. // JavaScript Program to Reverse a String
// let str = "Fuck YOu";
// let len = str.length;
// let string = "";

// for(let i = len - 1; i >= 0; i--){
//     string += str[i];
// }
// console.log(string);

37. // JavaScript Program to Create Objects in Different Ways
// const person = { 
//   name: 'John',
//   age: 20,
//   hobbies: ['reading', 'games', 'coding'],
//   greet: function() {
//       console.log(`Hello everyone ${this.name}`);
//   },
//   score: {
//       maths: 90,
//       science: 80
//   }
// };
// console.log(typeof person);
// console.log(person.name);
// console.log(person.hobbies[0]);
// person.greet();
// console.log(person.score.maths);

38. // JavaScript Program to Check the Number of Occurrences of a Character in the String
// let str = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzhfdhsh";
// let obj ={};
// let len = str.length;

// for(let i = 0; i < len; i++){
//     if(obj[str[i]] == undefined){
//         obj[str[i]] = 1;
//     } else {
//         obj[str[i]] += 1;
//     }
// }
// console.log(obj);

39. // JavaScript Program to Convert the First Letter of a String into UpperCase

40. // JavaScript Program to Count the Number of Vowels in a String
// let str = "my name is mukul";
// let len = str.length, count = 0;
// for(let i = 0; i < len; i++){
//     if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
//         count++;
//     }
// }
// console.log(count);

41. // JavaScript Program to Remove a Property from an Object
// const person = {
//   firstName: 'Mukul',
//   lastName: 'Gautam',
//   age: 24,
//   Blood: 'B+',
// }

// delete person['age'];

// console.log(person);

42. // JavaScript Program to Check Whether a String Starts and Ends With Certain Characters

43. // JavaScript Program to Check if a Key Exists in an Object
// const person = {
//   name: 'mukul',
//   age: 24,
// }
// if(person.hasOwnProperty('lastName')){
//   console.log(`Key exists in the person object`);
// } else {
//   console.log(`Key is not exist in the person object`);
// }

44. // JavaScript Program to Clone a JS Object
// const person = {
//   name: 'mukul',
//   age: 24,
// }
// Spread Operation used to not change name of person object
// const clone = {...person};

// clone.name = "John";

// console.log(clone);
// console.log(person);

45. // JavaScript Program to Loop Through an Object
// const obj = {
//   firstName:'Mukul',
//   lastName: 'Gautam',
//   age: 24
// }
// for(let x in obj){
//   console.log(`${x} - ${obj[x]}`)
// }

46. // JavaScript Program to Merge Property of Two Objects
// const person = {
//   name: 'mukul',
//   age: 24,
// }
// const student = {
//   gender: 'male',
// }
// const newObj = {...person, ...student};
// console.log(newObj);

47. // JavaScript Program to Count the Number of Keys/Properties in an Object
// const person = {
//   name: 'mukul',
//   age: 24,
//   gender: 'male',
//   last: 'gautam',
// }
// let count = 0;

// for(let x in person){
//   count++;
// }
// console.log(count);

48. // JavaScript Program to Add Key/Value Pair to an Object
// const person = {
//   name: 'mukul',
//   age: 24,
//   gender: 'male',
//   last: 'gautam',
// }
// person.height = 5.4;
// console.log(person);

49. // JavaScript Program to Replace All Occurrences of a String

50. // JavaScript Program to Create Multiline Strings
// const sentence = 'JSON stands for JavaScript Object Notation.\n It is a format for structuring data.\n This format is used by different web applications to communicate with each other.\n It is the replacement of the XML data exchange format. It is easy to struct the data compare to XML.\n It supports data structures like arrays and objects and the JSON documents that are rapidly executed on the server.';
// console.log(sentence);

51. // JavaScript Program to Format Numbers as Currency Strings
// const format = (2500).toLocaleString('en-US', {
//     style: 'currency',
//     currency: 'USD'
// });
// console.log(format);

// const format = 1223.2323;
// const result = '$' + format.toFixed(2);
// console.log(result);

52. // JavaScript Program to Generate Random String
// const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// function generateString(length){
//     let result = ' ';
//     const characterLength = character.length;
//     for(let i = 1; i <= length; i++){
//         result += character[Math.floor(Math.random() * characterLength)];
//     }
//     return result;
// }

// console.log(generateString(6));

53. // JavaScript Program to Check if a String Starts With Another String
// const string = 'hello world';
// const str = 'ha';
// const len = str.length;
// let mat;

// for(let i = 0; i < len; i++){
//     if(string[i] == str[i]){
//         mat = 1;
//     } else {
//         mat = 0;
//         break;
//     }
// }
// if(mat == 1){
//     console.log("The String Matched");
// } else {
//     console.log("The String is not Matched");
// }

54. // JavaScript Program to Trim a String
// let str = '      Mukul       ';
// let len = str.length;
// let string = '';
// for(let i = 0; i < len; i++){
//     if(str[i] != undefined){
//         string += str[i];
//     }
// }
// console.log(string);

55. // JavaScript Program to Convert Objects to String
// const person = {
//   name: 'mukul',
//   age: 24,
// }
// const result = JSON.stringify(person);
// console.log(result);
// console.log(typeof result);

// 2 Method
// const str1 = String(person);
// const str2 = String(person['name']);
// console.log(str1);
// console.log(str2);
// console.log(typeof str1);

56. // JavaScript Program to Check Whether a String Contains a Substring

57. // JavaScript Program to Compare Two Strings
// let str1 = 'mukuhgl';
// let str2 = 'mukul';

// if(str1 === str2){
//     console.log("string is matched");
// } else {
//     console.log("string are not matched");
// }

58. // JavaScript Program to Encode a String to Base64

59. // JavaScript Program to Replace all Instances of a Character in a String

60. // JavaScript Program to Replace All Line Breaks with

61. // JavaScript Program to Display Date and Time
// let date = new Date();
// let n = date.toDateString();
// let time = date.toLocaleTimeString();

// console.log(n);
// console.log(time);

62. // JavaScript Program to Check Leap Year
// function checkLeapYear(year){
//   if((year % 400 == 0) || (year % 4 == 0) && (year % 100 != 0)){
//       console.log(`${year} is Leap Year`);
//   } else {
//       console.log(`${year} is not Leap Year`);
//   }
// }

// let year = 2000;

// checkLeapYear(year);
 
63. // JavaScript Program to Format the Date
// const date = new Date();

// let day = date.getDate();

// let month = date.getMonth() + 1;

// let year = date.getFullYear();

// if(day < 10){
//     day = '0' + day;
// }

// if(month < 10){
//     month = '0' + month;
// }

// const format1 = `${day}/${month}/${year}`;
// console.log(format1);

// const format2 = `${day}-${month}-${year}`;
// console.log(format2);

// const format3 = `${month}/${day}/${year}`;
// console.log(format3);

// const format4 = `${month}-${day}-${year}`;
// console.log(format4);

64. // Javascript Program to Display Current Date
// const date = new Date();

// const n = date.toDateString();
// const time = date.toLocaleTimeString();

// console.log(n);
// console.log(time);

65. // JavaScript Program to Compare The Value of Two Dates
// const d1 = new Date();
// const d2 = new Date();

// const compare1 = d1 < d2;
// console.log(compare1);

// const compare2 = d1 > d2;
// console.log(compare2);

// const compare3 = d1 <= d2;
// console.log(compare3);

// const compare4 = d1 >= d2;
// console.log(compare4);

// const compare5 = d1.getTime() === d2.getTime();
// console.log(compare5);

// const compare6 = d1.getTime() !== d2.getTime();
// console.log(compare6);

66. // JavaScript Program to Create Countdown Timer

67. // JavaScript Program to Remove Specific Item From an Array
// function removedItemFromArray(arr, num){
//   let len = arr.length;
//   let array = [];
//   for(let i =0; i < len; i++){
//       if(arr[i] != num){
//           array.push(arr[i]);
//       }
//   }
//   console.log(array);
// }

// removedItemFromArray([1, 2, 3, 4, 5, 6], 3);

68. // JavaScript Program to Check if An Array Contains a Specified Value
// function hasValue(array, value){
//   let len = arr.length;
//   for(let i = 0; i < len; i++){
//       if(array[i] == value){
//           console.log(`${value} is in Array`);
//       }
//   }
// }

// let arr = ['you', 'will', 'learn', 'javascript'];
// hasValue(arr, 'learn');
 
69. // JavaScript Program to Insert Item in an Array
// const arr = [1, 2, 3];
// function insertItem(num){
// arr[arr.length] = num; 
// console.log(arr);
// }
// insertItem(8);
// INCOMPLETE

70. // JavaScript Program to Append an Object to An Array
// const arr = [1, 2, 3];
// function insertItem(obj){
//     arr[arr.length] = obj;
//     console.log(arr);
// }
// insertItem({name:"mukul"});
//INCOMPLETE

71. // JavaScript Program to Check if An Object is An Array
// const arr = "[1, 2, 4, 3, 5]";

// if(Array.isArray(arr)) {
//     console.log("this is a array");
// } else {
//     console.log("this is not an array");
// }
 
72. // JavaScript Program to Empty an Array
// const arr = [1, 2, 3, 4];
// for(arr.length; arr.length != 0; arr.length--){
// }
// console.log(arr);

73. // JavaScript Program to Add Element to Start of an Array
// const arr = [1, 2, 3, 4];
// let len = arr.length;
// for(let i = len; i > 0; i--){
//     arr[i] = arr[i - 1];
// }
// arr[0] = 0;

// console.log(arr);
 
74. // JavaScript Program to Remove Duplicates From Array
// const arr = [1,4,3 ,1, 3, 4, 3, 4,5, 0];
// let len = arr.length;
// let flag=0;
// const arr1 = [];
// for(let i = 0; i < len ; i++){
//     for(let j = 0; j < arr1.length; j++){
//         if(arr1[j] == arr[i]){
//             flag = 1;
//             break;
//         }
//     }
//     if(flag == 0){
//         arr1.push(arr[i]);
//     }
//     flag = 0;
// }
// console.log(arr1);


75. // JavaScript Program to Merge Two Arrays and Remove Duplicate Items
// const arr = [1,4,3 ,1, 3, 4, 3, 4,5, 0];
// const arr2 = [1,5,6,7,8,9, ...arr];
// let len = arr2.length;
// let flag=0;
// const arr1 = [];
// for(let i = 0; i < len ; i++){
//     for(let j = 0; j < arr1.length; j++){
//         if(arr1[j] == arr2[i]){
//             flag = 1;
//             break;
//         }
//     }
//     if(flag == 0){
//         arr1.push(arr2[i]);
//     }
//     flag = 0;
// }
// console.log(arr2);
// console.log(arr1);

76. // JavaScript Program to Sort Array of Objects by Property Values

77. // JavaScript Program to Create Two Dimensional Array
// const arr = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
// console.log(arr);

78. // JavaScript Program to Extract Given Property Values from Objects as Array
// const arr = [{a: 1, b: 2}, {a: 3, b: 4}, {a: 5, b: 6}];
// let len = arr.length;
// const arr1 = [];
// for(let i = 0; i < len; i++) {
//     arr1.push(arr[i]['a']);
// }
// console.log(arr1);

// const arr = [{a: 1, b: 2}, {a: 3, b: 4}, {a: 5, b: 6}];
// let len = arr.length;
// const arr1 = [];
// arr.forEach((key) => {
//     console.log(key["a"])
// });
 
79. // JavaScript Program to Compare Elements of Two Arrays

80. // JavaScript Program to Get Random Item From an Array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function randomNumber(arra){
//     let len = arra.length;
//     let random = Math.ceil((Math.random() * len));
//     console.log(random)
//     console.log(arra[random]);
// }

// randomNumber(arr);

81. // JavaScript Program To Perform Intersection Between Two Arrays
 
82. // JavaScript Program to Split Array into Smaller Chunks

83. // JavaScript Program to Include a JS file in Another JS file

84. // JavaScript Program to Get File Extension

85. // JavaScript Program To Check If A Variable Is undefined or null
// function checkVariable(variable){
//   if(variable == null){
//       console.log(`Variable is Undefined or null`);
//   } else {
//       console.log(`Variable is neither undefined nor null`);
//   }
// }

// checkVariable(4);
// checkVariable(null);
// checkVariable('hello');
// checkVariable();

86. // JavaScript Program to Set a Default Parameter Value For a Function

87. // JavaScript Program to Illustrate Different Set Operations

88. // Javascript Program to Generate a Random Number Between Two Numbers
// let random = Math.floor((Math.random() * (20 - 4)) + 4);

// console.log(random);

89. // JavaScript Program To Get The Current URL

90. // JavaScript Program to Validate An Email Address

91. // JavaScript Program to Check If a Variable is of Function Type
// function testVariable(varia){
//   if(varia instanceof Function){
//       console.log(`The variable is of a Function`);
//   } else {
//       console.log(`The variable is not of a Function`);
//   }
// }
// const x = function(){
//   console.log("Hello");

// testVariable(4);
// testVariable(true);
// testVariable(x);

92. // JavaScript Program To Work With Constants
 
93. // JavaScript Program to Pass Parameter to a setTimeout() Function
// setTimeout(myFunction, 3000);

// function myFunction(){
//     console.log("ENjoy")
// }

// setTimeout(myFunction, 3000);

// function myFunction(){
//     console.log("ENjoy")
// }

94. // JavaScript Program to Generate a Range of Numbers and Characters

95. // JavaScript Program to Perform Function Overloading

96. // JavaScript Program to Implement a Stack

97. // JavaScript Program to Implement a Queue
 
98. // JavaScript Program to Check if a Number is Float or Integer

99. // JavaScript Program to Pass a Function as Parameter
// function greeting(func, name){
//   const message = func();
//   console.log(`${message} ${name}`);
// }

// function name(){
//   return 'Hello';
// }

// greeting(name, 'Mukul');

100. // JavaScript Program to Get the Dimensions of an Image

101. // JavaScript Program to Remove All Whitespaces From a Text
// let str = "     my name is mukul";
// let len = str.length;
// let string = "";

// for(let i = 0; i< len; i++){
//     if(str[i] != ' '){
//         string += str[i];
//     }
// }
// console.log(string);

102. // JavaScript Program to Write to Console

103. // JavaScript Program to Convert Date to Number
// let date = new Date();
// let result = date.getTime();
// let num = Number(date);
// console.log(date);
// console.log(result);
// console.log(num);