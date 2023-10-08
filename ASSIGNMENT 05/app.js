//---------------------------- CHAPTER 26 - 30 -------------------------------
//------------------------------ MATH METHODS --------------------------------

// Q1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var positiveInteger = +prompt("Enter any positive number");
// document.write("Number: " + positiveInteger + "<br>" );
// document.write("Round off value: " + Math.round(positiveInteger)+ "<br>");
// document.write("Floor value: " + Math.floor(positiveInteger)+ "<br>");
// document.write("ceil value: " + Math.ceil(positiveInteger)+ "<br>");

// Q2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var negInteger = +prompt("Enter any negative number");
// document.write("Number: " + negInteger + "<br>" );
// document.write("Round off value: " + Math.round(negInteger)+ "<br>");
// document.write("Floor value: " + Math.floor(negInteger)+ "<br>");
// document.write("ceil value: " + Math.ceil(negInteger)+ "<br>");

// Q3. Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var absoluteNum = +prompt("enter number to cheak it's absolute value");
// document.write("The absolute value of " + absoluteNum + " is " + Math.abs(absoluteNum));

// Q4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.:

// var rollDice = Math.floor(Math.random()*6)+1;
// document.write("Random dice value: " + rollDice);

// Q5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var toss = Math.floor(Math.random()*2)+1;
// document.write(toss + "<br>");
// if(toss === 1){
//     document.write("random coin value: Heads");
// }
// else{
//     document.write("random coin value: Tails");
// }

// Q6. Write a program that shows a random number between 1 
// and 100 in your browser.

// var randomNum = Math.floor(Math.random()*100)+1;
// document.write("Random number between 1 and 100 is: " + randomNum);

// Q7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms



// Q8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.

// var guessNum = +prompt("guess the number between 1 and 10 ");
// var randomNum = Math.floor(Math.random()*10)+1;
// if(randomNum === guessNum){
//     alert("Congratulations you guess correctly");
// }
// else{
//     alert("Try again!");
// }

//---------------------------- CHAPTER 31 - 34 -------------------------------
//------------------------------ Date METHODS --------------------------------

// Q1. Write a program that displays current date and time in 
// your browser.

//var date = new Date();
// document.write(date)

// Q2. Write a program that alerts the current month in words. 
// For example December.

// var date = new Date();
// var month = date.getMonth();

// var arr = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// document.write("Current month: " + arr[month]);

// Q3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show 
// Sun.

// var date = new Date();
// var day = date.getDay();
// var dayArr = [
//     "sun",
//     "Mon",
//     "Tue",
//     "wed",
//     "Thu",
//     "Fri",
//     "sat",
// ];
// document.write("Today is " + dayArr[day]);

//Q4. Write a program that displays a message “It’s Fun day” if 
//its Saturday or Sunday today.

// var date = new Date();
// var day = date.getDay();
// var array = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// if((array[day]) === "sunday" || "saturday"){
//     document.write("Yup " + (array[day]) + " It's Fun Day")
// }
// else{
//     document.write("Ahhhh " + (array[day]) + " It's a working day")
// }

// Q5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.

// var date = new Date();
// var day = date.getDate();
// if(day <= 15){
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last days of the month");
// }

// Q6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.

// var currentDate = new Date();
// var minutesSince = Math.floor(currentDate.getTime() / (1000 * 60));
// document.write("Minutes since midnight, Jan. 1, 1970 are: " + minutesSince);

// Q7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.

// var date = new Date();
// var hour = date.getHours();
// if(hour < 12){
//     document.write("It's AM")
// }
// else{
//     document.write("It's PM");
// }

// Q8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate.

// var laterDate = new Date("31 december 2020");
// document.write("Later Date: " + laterDate);

// Q9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var ramadanStartDate = new Date("18 june 2015"); 
// var currentDate = new Date();

// var timeDifference = currentDate - ramadanStartDate;
// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// alert("Number of days passed since 1st Ramadan 2015: " + daysPassed);

// Q10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.

// var referenceDate = new Date("9 october 2023"); 
// var beginningOf2023 = new Date("1 january 2023");
// var timeDifference = referenceDate - beginningOf2023;
// var secondsElapsed = Math.floor(timeDifference / 1000);

// document.write("on reference date " + referenceDate + ", " + secondsElapsed + " seconds had passed since beginning of 2023");

// Q11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser.

// var currentDate = new Date();
// document.write("Current Date: " + currentDate + "<br>");
// var currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// document.write("1 hours ago, it was " + currentDate);

// Q12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?

// var currentDate = new Date();
// document.write("Current Date: " + currentDate + "<br>");
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// document.write("100 year back, it was " + currentDate);

// Q13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.

// var age = +prompt("Enter your age to cheak your birth year");
// var date = new Date();
// var currentyear = date.getFullYear(); 
// var birthYear = currentyear - age;
// document.write("Your birth year is: " + birthYear);

// Q14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)

