// 1

// var userName = prompt("Enter your name")
// alert("Hi, " + userName + "\n Prevent this page from creating additional dialogs.")

// 2

// var userTable = +prompt("Enter Table Number");

// if (userTable && userTable !== null) {
//     for (let i = 1; i <= 10; i++) {
//         document.write(userTable +" x " + i + " = " + i*userTable + "<br>")
//     }
// }

// 3

// var userCity = prompt("Enter City Name");

// if (userCity === "karachi") {
//     alert("welcome to City of lights")
// }

// 4

// var userGander = prompt("Enter Your Gander");

// if (userGander === "male") {
//     alert("Good Morning Sir.")
// }else if (userGander === "female"){
//     alert("Good Morning Ma’am.")
// }else{
//     alert("Apka Gander Nahi Mila")
// }

// 5

// var userColor = prompt("Enter Color Name");

// if ( userColor && userColor != null) {
//         if (userColor === "red") {
//             alert("vehicles must stop")
//         }else if (userColor === "yellow") {
//             alert("vehicles should get ready to move")
//         }else if (userColor === "green") {
//             alert("vehicles can move now")
//         }
     
// }

// 6

// var userAge = prompt("Enter Your Age");

// if (userAge <= 18) {
//     alert("“You are welcome")
// }

// 7

// var userFuel = +prompt("Enter Your Age");

// if (userFuel <= 0.25) {
//     alert("Please refill the fuel in your car")
// }

// 8  Run this script, & check whether alert message would be displayed or not. Record the outputs.

// var a = 4;
// if (++a === 5){
//  alert("given condition for variable a is true");
// }

// // chalega

//  var b = 82;
// if (b++ === 83){
//  alert("given condition for variable b is true");
// }

// // chalega 


// var c = 12;
// if (c++ === 13){
//  alert("condition 1 is true");
// }

// // nahi chalega 


// if (c === 13){
//  alert("condition 2 is true");
// }

// // chalega 

// if (++c < 14){
//  alert("condition 3 is true");
// }

// // nahi chalega 

// if(c === 14){
//  alert("condition 4 is true");
// }

// // chalega 


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;


// if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
// }

// // chalega 

// if (true){
//  alert("True");
// }

// // chalega 

// if (false){
//  alert("False");
// }

// // nahi chalega 

// if("car" < "cat"){
//  alert("car is smaller than cat");
// }
// // chalega 

// 

// 9  Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade as
// per following table:


// var subject1 = prompt("Enter marks for Subject 1:");
// var subject2 = prompt("Enter marks for Subject 2:");
// var subject3 = prompt("Enter marks for Subject 3:");

// subject1 = parseFloat(subject1);
// subject2 = parseFloat(subject2);
// subject3 = parseFloat(subject3);

// var maxMarksPerSubject = 100; 

// var totalMarks = subject1 + subject2 + subject3;

// var percentage = (totalMarks / (maxMarksPerSubject * 3)) * 100;



// if (percentage >= 80) {
//     alert("Percentage: " + percentage.toFixed(2) + "%" + "\n Mubarak Ho A-One");
// }else if (percentage >= 70 ){
//     alert("Percentage: " + percentage.toFixed(2) + "%" + "\n A");
// }else if (percentage >= 60 ){
//     alert("Percentage: " + percentage.toFixed(2) + "%" + "\n B");
// }else if (percentage < 60 ){
//     alert("Percentage: " + percentage.toFixed(2) + "%" + "\n You Fail.");
// }


// 10

// var item1Name = prompt("Enter the name of Item 1:");
// var item2Name = prompt("Enter the name of Item 2:");
// var item1Price = parseFloat(prompt("Enter the price of Item 1 (in PKR):"));
// var item2Price = parseFloat(prompt("Enter the price of Item 2 (in PKR):"));
// var item1Quantity = parseInt(prompt("Enter the ordered quantity of Item 1:"));
// var item2Quantity = parseInt(prompt("Enter the ordered quantity of Item 2:"));
// var shippingCharges = parseFloat(prompt("Enter the shipping charges (in PKR):"));

// var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;

// if (totalCost > 2000) {
//     var discount = totalCost * 0.10; 
//     totalCost -= discount;
// }

// document.write("<h2>Receipt</h2>");
// document.write("<p><strong>Item 1:</strong> " + item1Name + " (Price: " + item1Price + " PKR, Quantity: " + item1Quantity + ")</p>");
// document.write("<p><strong>Item 2:</strong> " + item2Name + " (Price: " + item2Price + " PKR, Quantity: " + item2Quantity + ")</p>");
// document.write("<p><strong>Shipping Charges:</strong> " + shippingCharges + " PKR</p>");
// document.write("<p><strong>Total Cost:</strong> " + totalCost.toFixed(2) + " PKR</p>");




