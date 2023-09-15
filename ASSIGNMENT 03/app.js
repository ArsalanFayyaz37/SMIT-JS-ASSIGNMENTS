//--------------------- chapter 12 to 13 -------------------------
//------------------ IF…ELSE & ELSE IF STATEMENT,-----------------
//------------------- TESTING SET OF CONDITIONS ------------------

// Q1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var char = prompt("enter the charcter");

if (char >= 'a' && char <= 'z') {
    alert(char + " = this is a small letter");
} else if (char >= 'A' && char <= 'Z') {
    alert(char + " = this is capatile letter");
} else {
    alert("this is number not a small and capatile letter");
}

// Q2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var num1 = prompt("please enter first number");
var num2 = prompt("please enter second number");

if (num1 > num2) {
    document.write(num1 + " number is graeter than..." + num2);
} else if (num1 < num2) {
    document.write(num2 + " number is greater than..." + num1);
} else if (num1 = num2) {
    document.write(num1 + num2 + "  boths numbers are equals..");
}

// Q3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var num1 = prompt("plaese enter the number");


if (num1 < 0) {
    alert("the number is negative");
} else if (num1 > 0) {
    alert("the number is positive");
} else {
    alert("the given number is zero");
}

// Q4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

var vowels = prompt("please enter alphabets");
if (vowels === "a" || vowels === "e" || vowels === "i" || vowels === "o" || vowels === "u" || vowels === "A" || vowels === "E" || vowels === "I" || vowels === "O" || vowels === "U") {
    alert("this is vowel = " + vowels);
} else {
    alert("please enter a single charcter");
}

// Q5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.


var password = prompt("enter your password");

if (password === "ArsalanFayyaz") {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("this is not correct password");
}

// Q6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }


var greeting;
var hour = 24;
if (hour <= 8) {
    greeting = "good day";
} else if (hour >= 12) {
    greeting = "good afternoon"
} else if (hour >= 19) {
    greeting = "good evening"
}
alert(greeting);

//  Q7. Write a program that takes time as input from user in 24
//  hours clock format like: 1900 = 7pm. Implement the
//  following case using if, else & else if statements

var time = prompt("enter the time like = 1700 is 5:pm");

if (time >= 0 && time < 499) {
    alert("good night");
} else if (time >= 500 && time < 1299) {
    alert("good morning");
} else if (time >= 1300 && time < 1699) {
    alert("goodafter noon");
} else if (time >= 1700 && time < 1999) {
    alert("good evening");
} else if (time >= 2399) {
    alert("good night");
}

//--------------------- chapter 14 to 16 -------------------------
//--------------------------- ARRAYS -----------------------------

// Q1. Declare an empty array using JS literal notation to store
// student names in future.

var studentNames = [];

// Q2. Declare an empty array using JS object notation to store
// student names in future.



// Q3. Declare and initialize a strings array.

var stringArray = ["red", "green", "orange", "blue"];

// Q4. Declare and initialize a numbers array.

var numberArray = [1, 2, 3, 4, 5];

// Q5. Declare and initialize a boolean array.

var booleanArray = [true, false, true, false, true];

// Q6. Declare and initialize a mixed array.

var mixedArray = ["apple", 42, true, "banana", false, 7];

//Q7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like:

var eduArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PHIL", "PHD"];
document.write("Qualification" + "</br>" + "</br>" + "1)" + eduArray[0] + "</br>" + "2)" + eduArray[1] + "</br>" + "3)" + eduArray[2] + "</br>" + "4)" + eduArray[3] + "</br>" + "5)" + eduArray[4] + "</br>" + "6)" + eduArray[5] + "</br>" + "7)" + eduArray[6] + "</br>");

// Q8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:

var students = [];
var score = [];

for (var i = 1; i <=3; i++){
    var studentsName = prompt("enter the students name");
    var marks = +prompt ("enter the marks of students");

    students.shift(studentsName);
    score.shift(marks);

    document.write( "the score of " + studentsName + " is " + marks + "." +  "Percentage = " + (marks / 500) * 100  + "% ." + "</br>");
}

// Q9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var colors = ["red","green","blue","yellow","purple"];

colors.pop();
colors.push("sky");
colors.shift();
colors.unshift("grey");
colors.splice(1,2,"dark blue");
colors.slice(0,2);

console.log(colors);

// Q10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.

var studentsScore = [98,1,45,57,90];
studentsScore.sort((a,b) => a-b);
document.write("this is the ascending order = " + studentsScore);

// Q11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.

var cities = ["karachi", "peshawar", "quetta", "islamabad", "Multan"];
var selectedCities = [];

for (var i = 0; i < 3; i++) {
  if (cities[i] !== undefined) {
    selectedCities.push(cities[i]);
  }
}
document.write(cities); 
document.write(selectedCities); 

// Q12. Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["this","is","my","cat."];

var singlestring = arr.join("");

document.write(singlestring);

//Q13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)

var fifo = ["keybord","mouse","printer","moniter"];

fifo.push("keyboard");
fifo.push("mouse");
fifo.push("printer");
fifo.push("moniter");

var firstvalue = fifo.shift()
var secondvalue = fifo.shift()
var thirdvalue = fifo.shift()
var fourthvalue = fifo.shift()

console.log(fifo);

console.log(firstvalue);
console.log(secondvalue);
console.log(thirdvalue);
console.log(fourthvalue);

// Q14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-First Out)

var lifo = ["keybord","mouse","printer","moniter"];


lifo.push("keyboard");
lifo.push("mouse");
lifo.push("printer");
lifo.push("moniter");

var lastValue = lifo.pop()
var secondlastvalue = lifo.pop()
var thirdlastvalue = lifo.pop()
var fourthlastvalue = lifo.pop()

console.log(lifo);

console.log(lastValue);
console.log(secondlastvalue);
console.log(thirdlastvalue);
console.log(fourthlastvalue);


// Q15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//     Display the following dropdown/select menu in your 
//     browser using document.write() method:

var mobiles = ["apple","samsung","motorola","nokia","sony","haier"];

document.write("<select>" + "<option>" + "nokia" + "</option>"  + "<option>" + "apple" + "</option>" + + "<option>" + "samsung" + "</option>" + "<option>" + "motorola" + "</option>" + "<option>" + "sony" + "</option>" + "<option>" + "haier" + "</option>" + "</select>");
