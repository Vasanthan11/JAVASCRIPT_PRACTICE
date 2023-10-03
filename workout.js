//Object:
var employeeOne = {
    employeeName: "Arun",
    employeeId: "AS1234",
    contactNo: 1345432156,
    bloodGroup: "O+",
    address: "4/23 A Arumugam Street, Sundarapuram, Coimbatore-641024",
    mailId: "arun@123.gmail.com"
}
console.log('The Name of the Employee is : ' + employeeOne.employeeName);
console.log("Employee ID Number is : " + employeeOne.employeeId);
console.log('Contact Number : ' + employeeOne.contactNo);
console.log('Blood Group of Employee ID AS1234 is : ' + employeeOne.bloodGroup);
console.log('Address : ' + employeeOne.address);
console.log('E-Mail Id of Employee AS1234 is : ' + employeeOne.mailId);

//Array:
var employee = ["Arun", "AS1234", 1345432156, "O+", "4/23 A Arumugam Street, Sundarapuram, Coimbatore-641024", "arun@123.gmail.com"];

console.log('The Name of the Employee is : ' + employee[0]);
console.log("Employee ID Number is : " + employee[1]);
console.log('Contact Number : ' + employee[2]);
console.log('Blood Group of Employee ID AS1234 is : ' + employee[3]);
console.log('Address : ' + employee[4]);
console.log('E-Mail Id of Employee AS1234 is : ' + employee[5]);

//functions
var employeeTwo = {
    employeeName: "Thara",
    employeeId: "AS1034",
    contactNo: 1222432156,
    bloodGroup: "O+",
    address: "4/22 A Mana Street, Sundarapuram, Coimbatore-641024",
    mailId: "Thara@123.gmail.com"
}
function employeeDetails(employeeName, employeeId, contactNo, bloodGroup, address, mailId) {
    console.log('The Name of the Employee is : ' + employeeName);
    console.log("Employee ID Number is : " + employeeId);
    console.log('Contact Number : ' + contactNo);
    console.log('Blood Group of Employee ID AS1234 is : ' + bloodGroup);
    console.log('Address : ' + address);
    console.log('E-Mail Id of Employee AS1234 is : ' + mailId);
}

//Operstors
var a = 12;
var b = 22;
console.log(a < 10 && b > 2);
console.log(a == 12 || b == 22);
console.log(a > 10 && b > 12);
console.log(a == b);

//Comparison Operators Concept
//== === >= <= !=
var x = 3;
var y = 4;
console.log(x == y);
console.log(x === y);
console.log(x >= y);
console.log(x <= 3);
console.log(x != 7);

//Increment or Decrement Operators concept
//a++ ++a a-- --a
var a = 12;
var b = 11;
console.log(++a);
console.log(a--); console.log(a);

//Logical Operators 
//and && 
//or  ||
//not !
var a = 12;
var b = 22;
//and && 
console.log(a < 10 && b > 2);
console.log(a > 10 && b > 12);
//or  ||
console.log(a == 12 || b == 22);
//not !
console.log(!(a == b));

//if   
var age = 12;
if (age >= 12) { console.log("You are a minor person") };

//if, else
let climate = "Raining";
if (climate === "Raining") { console.log("Don't forget to take Umbrella"); }
else { console.log("Enjoy the day!") };

//if, else if, else
let time = Date();
if (time >= 0 && time <= 13) { console.log("Good Morning"); }
else if (time >= 13 && time <= 17) { console.log("Good Afternoon"); }
else { console.log("Good Evening"); };

//some more examples
// let userName="Vasanth"  or let userName=prompt("enter your user name");   This is about to get a value from User.
let userName = prompt("enter your Username", "Username");
let password = prompt("enter your Password", "Password");
if (userName === "Vasanthan") {
    if (password === "Vasa@123") {
        console.log("Welcome back Vasanthan, Your are signed in successfully");
    }
    else {
        console.log("Please Check your password it is incorrect");
    }
}
else {
    console.log("Username is invalid, Please sign up for an account");
}

//Switch
let colour = prompt("Enter the Colour", "Enter the Colour");
switch (colour) {
    case "Red":
        console.log("Red colour resembles the health and courage");
        break;
    case "Yellow":
        console.log("Yellow colour resembles the happiness and warmth");
        break;
    case "Blue":
        console.log("Blue colour resembles the stability and wisdom");
        break;
    case "Green":
        console.log("Green colour resembles the beginning and growth");
        break;
    case "pink":
        console.log("Pink colour resembles the love and romance ");
        break;
    default:
        console.log("The colour enter does not exist in library");
}

//Ternary Operators
let day = prompt("Enter the day", "Number From 1 to 7");
let result1 = (day == 1) ? "Today is Monday" : (day == 2) ? "Today is Tuesday" : (day == 3) ? "Today is Wednesday" : (day == 4) ? "Today is Thursday" : (day == 5) ?
    "Today is Friday" : (day == 6) ? "Today is Saturday" : "Today is Sunday";
console.log(result1);

//For Loop
let i;
for (i = 0; i < 10; i++) {
    console.log("The Number is " + i)
};

//While
let q = 10;
while (q >= 0) {
    console.log("The Number is " + q);
    q--;
}

//Forof
let myArray = ["Vasanth", "Arun", "kalai", "123@", "backing"];
for (let x of myArray) {
    console.log(x);
}

//Forin
let myObject = {
    userName: "Venom",
    mailId: "Venom@123gmail.com",
    number: 123456789,
    gender: "Male"
}
for (let x in myObject) {
    console.log(x + " = " + myObject[x]);
}

//Switch Case example-2 with true of false value
let creditScore = "82";

switch (true) {
    case (creditScore > 90):
        console.log("Your Credit Score is more than 90 so loan option is available");
        break;
    case (creditScore > 80):
        console.log("Your Credit Score is between 80 to 90 so loan option is available");
        break;
    case (creditScore > 70):
        console.log("Your Credit Score is between 70 to 80 so loan option is available");
        break;
    case (creditScore > 60):
        console.log("Your Credit Score is between 60 to 70 so loan option is unavailable");
        break;
    case (creditScore > 50):
        console.log("Your Credit Score is between 50 to 60 so loan option is available");
        break;
    case (creditScore > 40):
        console.log("Your Credit Score is between 40 to 50 so loan option is available");
        break;
    default:
        console.log("Your Credit Score is less than 40 so loan option is unavailable");
}

//function script for bank card using nested if
let employee = function () {
    let username = prompt("NAME OF ACCOUNT HOLDER", "Enter Your Name");
    let password = prompt("ENTER YOUR SIX DIGIT PIN", "******");
    let amount = prompt("ENTER THE AMOUNT", "IN RUPEES");

    if (username === "Vasanthan") {
        if (password === "111111") {
            if (amount <= 25000) {
                console.log("An amount of " + amount + " Withdrawn successfully. Please remove your card. ");
            }
            else {
                console.log("Amount Exceeds the limit");
            }
        }
        else {
            console.log("Password is incorrect");
        }
    }
    else {
        console.log("Username is Invalid");
    }
}
let result = employee();

let account = venom();

//Types Of methods inside Function
let myText = ["Arun", "Aravind", "Abirami", "Vasanth", "Venom", "Dharun", "Deepika"];

console.log(myText.push("Manoj"));
//  - .Push()

console.log(myText.pop());
// - .Pop()

console.log(myText.shift());
//  - .Shift()

console.log(myText.unshift("Batman"));
//  - .Unshift()

console.log(myText.concat("velu"));
//  - .Concat()

console.log(myText.join(", "));
//  - .join()

console.log(myText.slice(2));
// - This means of slices the text in the given index number it starts from index value 1 not 0.

console.log(myText.indexOf("Vasanth"));
//  - .IndexOf()

console.log(myText.includes("Aravind"));
//  - .Includes() - function

console.log(myText.find((studentName) => studentName === "Arun"));
//  - .Find() - function

console.log(myText.findIndex((studentName) => studentName === "Venom"));
//  - .FindIndex() - function

console.log(myText.map((studentName) => "Name Of The Student is " + studentName));
//  - .Map() - function

console.log(myText.filter((studentName) => studentName === "Venom"));
// - .Filter() - function

console.log(myText.reduce((text, combine) => text + combine));
// - .Reduce() - function

console.log(myText.reverse());
// - .Reverse()

console.log(myText.at(-4));
// at means it is negative count starts from last

console.log(myText);

//button click function
let btn = document.getElementsByTagName("button")[0];
let changeImg = document.getElementById("animateCard");

btn.onclick = () => {
    changeImg.style.backgroundImage = "url(Images/desktop-wallpaper-best-beautiful-nature-fantastic-nature-thumbnail.jpg)"
    btn.style.backgroundColor = "#1FB3A9"
}

//Appending to the parent the selected in the html
let manageData = document.getElementById("studentData");
// console.log(studentData);
data.forEach((information) => {
    let row = document.createElement('tr');

    let idData = document.createElement('td');
    let idName = document.createElement('td');

    idData.textContent = information.no;
    idName.textContent = information.name;

    row.appendChild(idData);
    row.appendChild(idName);

    studentData.appendChild(row);
})

//inner text in the html
document.getElementById('nameOne').innerText = ""

//math 
let res = Math.floor(12.99);
let res1 = Math.ceil(12.1);
let res2 = Math.floor(Math.random() * 6 + 1);
console.log(res);

//lowercase convert
let lowerCase = inputData.value.toLowerCase();

//mouse events
let btn = document.getElementById('btn');
let para = document.getElementById('para');

btn.addEventListener('mouseover', () => {
    para.innerHTML += `<p>clicked </p>`
})
btn.addEventListener('mouseup', () => {
    para.innerHTML += `<p>clicked </p>`
})
btn.addEventListener('mouseenter', () => {
    para.innerHTML += `<p>clicked </p>`
})
btn.addEventListener('mouseleave', () => {
    para.innerHTML += `<p>clicked </p>`
})
btn.addEventListener('mousemove', () => {
    para.innerHTML += `<p>clicked </p>`
})
btn.addEventListener('mousemove', () => {
    para.innerHTML += `<p>clicked </p>`
})
btn.addEventListener('dblclick', () => {
    para.innerHTML += `<p>clicked </p>`
})

//reg expression
let passRegx = /^(?=.*[A-z0-9])(?=.*[!@#$%^&*])(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[a-zA-z0-9\d-!@#$%^&*]{8,}$/;
let emailRegx = /^[a-zA-Z0-9_.-]+@[A-z]+\.[a-z]{2,4} $/;
let mobReg = /^[+][9][1]+[0-9]{10}$/;

var msg = "This is my para aaaaaa b 1 2  #";
var msg = "123445";
//reg expression
var regExp = /A/ig;
var regExp = /[ABC]/ig;
var regExp = /[1|2]/ig;
var regExp = /[0-9]/ig;
var regExp = /[A-Z]/ig;
var regExp = /[A-z]/g;
var regExp = /[A-z 0-9]/g;
var regExp = /[\d]/ig;
var regExp = /[\W]/g
var regExp = /[\S]/g
var regExp = /[^ABC]/ig;

//clock function
function digitalClock() {
    let clock = new Date();
    let day = weekDays[clock.getDay()];
    let date = clock.getDate().toString().padStart(2, 0);
    let month = fullMonth[clock.getMonth()];
    let dayorNight = "";
    let year = clock.getFullYear().toString().padStart(4, 0);
    let seconds = clock.getSeconds().toString().padStart(2, 0);
    let minutes = clock.getMinutes().toString().padStart(2, 0);
    let hours = clock.getHours().toString().padStart(2, 0);
}

//windows event
let para1 = document.getElementById('para')
let body = document.getElementById('body')
function resize() {
    para1.textContent += "Resized"
}
function loadevent() {
    para1.textContent += "load event"
}
window.addEventListener('resize', () => {
    console.log("resized")
    if (window.innerWidth < 500) {
        console.log("your screen size is less than 500px ")
    }
})
window.addEventListener('beforeunload', () => {
    if (window.innerWidth > 502) {
        console.log("   Onload event ")
    }
})
window.addEventListener('load', () => {
    if (window.innerWidth > 502) {
        console.log("your screen size is less than 500px ")
    }
})
window.addEventListener('online', () => {
    para1.textContent += "you are online"
})

//key events
let input = document.getElementById('input');
input.addEventListener('keyup', (event) => {
    let res = `${event.keyCode} ${event.key}`

    console.log(res)
})

//try $ catch
let inputBox = document.getElementById('inputBox');
function display(num) {
    inputBox.value += num

}
function clr() {
    inputBox.value = ' '
    console.log("called")
}
function del() {
    inputBox.value = inputBox.value.slice(0, -1)
    console.log("called")
}
function calc() {
    try {
        inputBox.value = eval(inputBox.value)
    }
    catch (error) {
        alert("invalid")
    }
}

//toggle
let menu = document.querySelector(".menu");
let clicked = true;
const menuList = document.querySelector("nav ul");
menu.addEventListener("click", () => {
    menuList.classList.toggle("showMenu");
    clicked = !clicked;
})
