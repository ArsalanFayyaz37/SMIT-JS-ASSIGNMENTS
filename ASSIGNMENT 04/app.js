//--------------------- CHAPTER 17 to 20 ---------------------
//--------------------- ARRAYS AND LOOP ----------------------

// Q1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var multidimensional = [[],[]];

// Q2. Declare and initialize a multidimensional array 
// representing the following matrix:

// var matrix = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]

// Q3. Write a program to print numeric counting from 1 to 10.

// for (var i=1;i<=10;i++){
//     document.write(i + "<br>");
// }

// Q4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.

// var tableNumber = +prompt("Enter table number you want to generate");
// var tableLength = +prompt("Enter the length of your table");
// for(var i=1;i<=tableLength;i++){
//     document.write(tableNumber + "X" + i + "=" + tableNumber*i + "<br>");
// }

// Q5. Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]

// var fruits = ["apple","banana","mango","orange","strawberry"];
// for (i=0;i<fruits.length;i++){
//     document.write(fruits[i] + "<br>")
// }
// document.write("<br>")
// for (i=0;i<fruits.length;i++){
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>")
// }

// Q6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//a
// document.write("<b> counting: </b> " + "<br>" + "<br>")
// for (var i=1;i<=15;i++){
//     document.write(i + ", ")
// }
// document.write("<br>" + "<br>")

//b
// document.write("<b> Reverse counting: </b>" + "<br>" + "<br>")
// for (var i=10;i>=1;i--){
//     document.write(i + ", ")
// }
// document.write("<br>" + "<br>")

//c
// document.write("<b> Even: </b>" + "<br>" + "<br>")
// for(var i=0;i<=20;i+=2){
//     document.write(i + ", ")
// }
// document.write("<br>" + "<br>")

//d
// document.write("<b> Odd: </b>" + "<br>" + "<br>")
// for(var i=1;i<20;i+=2){
//     document.write(i + ", ")
// }
// document.write("<br>" + "<br>")

//e
// document.write("<b> Series: </b>" + "<br>" + "<br>")
// for(var i=2;i<=20;i+=2){
//     document.write(i + "K, ")
// }
// document.write("<br>" + "<br>")

// Q7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


// var myArray = ["cake", "apple pie", "cookie", "chips", "patties"];
// var itemToSearch = prompt("Welcome to ABC Bakery.What do you want to order sir/maam?");
// var found = false;
// for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] === itemToSearch) {
//         found = true;
//         document.write(itemToSearch +" is available at index " + i + " in our bakery");
//         break;
//     }
// }
// if (!found) {
//     document.write("We are sorry " + itemToSearch + " is not availabe in our bakery" )
// }

//Q8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12]

// var num = [24, 53, 78, 91, 12];
// var largestNum = num[0];
// for(var i = 1;i<num.length;i++){
//     if(num[i] > largestNum){
//         largestNum = num[i];
//     }
// }
// document.write("The largest number is " + largestNum);

//Q9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12]

// var num1 = [24, 53, 78, 91, 12,];
// var smallestNum = num1[0];
// for ( var j=1;j<num1.length;j++){
//      if(num1[j]<smallestNum){
//         smallestNum = num1[j];
//      }
// }
// document.write("The smallest number is " + smallestNum);

//Q10. Write a program to print multiples of 5 ranging 1 to 100

// for (var i=5;i<=100;i++){
//     if(i%5 === 0){
//         document.write(i+",");
//     }
// }

//--------------------- CHAPTER 21 to 25 ---------------------
//--------------------- STRING METHODS -----------------------

// Q1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.

// var firstName  = prompt("Enter your first name");
// var lastName  = prompt("Enter your last name");
// var fullName = (firstName + " " + lastName)
// alert("Hello, " + fullName + "! Welcome!");

// Q2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser.

// var userinput = prompt("Enter your favourite mobile model name");
// userinput = userinput.toLowerCase();
// var length = userinput.length;
// document.write("My favourite phone is: " + userinput + "<br>");
// document.write("Length of string: "+ length);

//Q3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser.

// var user = Pakistani;
// var xyz = user.indexof("n")
// document.write("The index of 'n' in the word '" + user + "' is: " + xyz);


// var word = "Pakistani";
// var ans = word.indexOf("n")
// document.write("string: " + word + "<br>");
// document.write("index of 'n' is :  " + ans )

// Q4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.

// var greet = "hello world";
// var ans1 = greet.lastIndexOf("l");
// document.write("string: " + greet + "<br>");
// document.write("index of 'l' is :  " + ans1 );

//Q5. Write a program to find the character at 3rd index in the 
//word “Pakistani” and display the result in your browser.

// var word1 = "Pakistani";
// var ans2 = word1.charAt(3)
// document.write("string: " + word1 + "<br>");
// document.write("character at the 3rd index is : " + ans2);

//Q6. Repeat Q1 using string concat() method.

// var firstName  = prompt("Enter your first name");
// var lastName  = prompt("Enter your last name");
// var fullName = firstName.concat(lastName);
// document.write("Hello, " + fullName + "! Welcome!");

// Q7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.

// var name1 = "Hyderabad";
// var replaceWord = name1.replace("Hyder","Islam");
// document.write("City: " + name1 + "<br>");
// document.write("After replacement: " + replaceWord );

// Q8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replaceMessage = message.replace("and","&");
// document.write("Message: " + message + "<br>");
// document.write("Message after replacement: " + replaceMessage);

// Q9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.

// var str = "472";
// document.write("value: " + str + "<br>");
// document.write("Type: " + typeof(str) + "<br>");
// var num = parseInt(str);
// document.write("value: " + str + "<br>");
// document.write("Type: " + typeof(num));

// Q10. Write a program that takes user input. Convert and 
// show the input in capital letters.

// var userInput = prompt("Enter any message to covert in capital letters");
// document.write("User input: " + userInput + "<br>");
// userInput = userInput.toUpperCase();
// document.write("Upper case: " + userInput);

// Q11. Write a program that takes user input. Convert and 
// show the input in title case.



// Q12. Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var numString = num.toString();
// document.write("Number: " + numString + "<br>");
// var result = numString.replace(".","");
// document.write("Result: " + result);




