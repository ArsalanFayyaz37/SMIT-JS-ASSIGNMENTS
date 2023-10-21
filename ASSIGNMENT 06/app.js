//----------------------------- CHAPTER 35 to 38 ------------------------------------
//----------------------------------FUNCTIONS ---------------------------------------

// Q1. Write a function that displays current date & time in your 
// browser.

// function tellMeDate(){
//     var date = new Date();
//     document.write(date)
// }
// tellMeDate();

// Q2. Write a function that takes first & last name and then it 
// greets the user using his full name.

// function greets(){
//     document.write("AsalamoAlikum " + firstName + " " + lastName);
// }
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// greets();

//Q3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.

// function sum(num1,num2){
//     var add = num1 + num2;
//     document.write(add)
//     return sum;
// }
// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// sum(num1,num2);

// Q4. Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.

// function calculator(num1,operator,num2){
//     if(operator === "+"){
//         return num1 + num2;
//     }
//     else if(operator === "-"){
//         return num1 - num2;
//     }
//     else if(operator === "*"){
//         return num1 * num2;
//     }
//     else if(operator === "/"){
//         return num1 / num2;
//     }
// }
// var num1 = +prompt("Enter first number");
// var operator = prompt("Enter your operator");
// var num2 = +prompt("Enter second number");
// var result= document.write(calculator(num1,operator,num2));

//Q5. Write a function that squares its argument.

// function square(num){
//     return num*num;
// }
// var num = + prompt("Enter any number and i will give you square of it");
// document.write(square(num));

//Q6. Write a function that computes factorial of a number.

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }
//     else if(n > 1){
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }
//     else{
//       return "number has to be positive."
//     }  
//   }
//   var n = +prompt("Enter a number to calculate factorial of it.");
//   answer = factorial(n)
//   document.write("Factorial of " + n + " : " + answer);

// Q7. Write a function that take start and end number as inputs
// & display counting in your browser.

// function counting(start,end){
//     for(var i=start;i<=end;i++){
//         document.write(i + "<br>");
//     }
// }
// var start = +prompt("Enter start number");
// var end = +prompt("Enter end number");
// counting(start,end);

// Q8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function calcHypotenuse(base,per){
//     function calcSquares(number){
//         return number*number;
//     }
//     var baseSquare = calcSquares(base);
//     var perSquare = calcSquares(per);
//     var sumOfSquares = baseSquare + perSquare;
//     var hypotenuse = Math.sqrt(sumOfSquares);
//     return hypotenuse;
// }
// var base = +prompt("Enter value of base");
// var per = +prompt("Enter value of perpendicular");
// document.write("The hypotenuse is: " + calcHypotenuse(base,per));

