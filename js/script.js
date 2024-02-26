// document.getElementById('html').innerHTML = 'IRFAN';

// document.getElementById('html').innerHTML = 50.56;

// Vaiable
/*var x = 20;
var y = 5;

z = x+y;

document.getElementById('html').innerHTML = z;*/

// camel notetion = firstName
// 'let' more then usable from 'var'
/*let firstName = 'Irfan';
let age = 28;
document.getElementById('html').innerHTML = age;*/

// document.getElementById('html').innerHTML = 5+8

/*let irAge = 28;
let suAge = 17;

// Showing on Webpage
document.getElementById('html').innerHTML = irAge;

// Showing in page inspact
console.log(suAge);*/

/*let NameA = 'Irfan Mahmud';

document.getElementById('html').innerHTML = NameA.toUpperCase();*/

/*let NameB = 'Irfan Mahmud';

document.getElementById('html').innerHTML = NameB.toLowerCase();*/

/*let NameC = 'Irfan Mahmud';

document.getElementById('html').innerHTML = NameC.length;*/

/*let NameD = 'Irfan Mahmud';

document.getElementById('html').innerHTML = NameD.substring(0, 3);*/

/*let NameE = 'Irfan Mahmud';

document.getElementById('html').innerHTML = NameE.split('');*/

/*let firstName = 'Irfan';
let lastName = prompt('What is your last name?');

document.getElementById('html').innerHTML = firstName + ' ' + lastName;

console.log(firstName + ' ' + lastName);*/

/*let phone = ['Samsung' , 'Apple' , 'Nokia'];

document.getElementById('html').innerHTML = phone[0];
console.log(phone);*/

// Replace
/*let phone = ['Samsung' , 'Apple' , 'Nokia'];
phone[2] = 'OnePlus';

document.getElementById('html').innerHTML = phone;
console.log(phone);*/

// Add
/*let phone = ['Samsung' , 'Apple' , 'Nokia'];
phone[3] = 'OnePlus';

document.getElementById('html').innerHTML = phone;
console.log(phone);*/

/*let phone = {
    Model: 'Iphone',
    Storage: '128GB',
    Color: 'Black',
}

document.getElementById('html').innerHTML = phone.Storage;
console.log(phone);*/

// Changing
/*let phone = {
    Model: 'Iphone',
    Storage: '128GB',
    Color: 'Black',
}
phone.Storage = '256GB';

document.getElementById('html').innerHTML = phone.Storage;
console.log(phone);*/

// () {} [] / * - + =
/*let now = 2024;
let irfanAge = 1995;
let fulAge = 21;

let isFullAge = now - irfanAge >= fulAge;

document.getElementById('html').innerHTML = isFullAge;
console.log(phone);*/

/*let now = 2024;
let irfanAge = 29;
let fulAge = 21;
let mahmudAge = 30;

let isFullAge = now - irfanAge >= fulAge;
let average = (irfanAge + mahmudAge) / 2;

document.getElementById('html').innerHTML = average;
console.log(phone);*/

// function
/*function Name(firstName, lastName){
    console.log('Hello ' + firstName + ' ' + lastName);
}

Name('irfan' , 'mahmud');*/

/*function math(nmbr, nmbr2){
    return nmbr + nmbr2;
}
console.log(math(10, 5));*/

/*function hello(){
    document.write('Hellow World');
}

hello();*/

// Add Button
/*function hello(){
    document.write('Hellow World');
}*/

// math Function
/*console.log(Math.PI);
console.log(Math.round(3.49));
console.log(Math.round(3.50));
console.log(Math.pow(8,2));
console.log(Math.sqrt(64));
console.log(Math.abs(-5));
console.log(Math.ceil(8.000000001));
console.log(Math.floor(8.99999999));
console.log(Math.sin(90 * Math.PI/180));
console.log(Math.max(5, 85, 6, 54, 84));
console.log(Math.min(5, 85, 6, 54, 84));
console.log(Math.random());
console.log(Math.floor(Math.random()));
console.log(Math.ceil(Math.random()));
console.log(Math.random().toFixed(2));
console.log(Math.random().toFixed(4));
console.log(Math.random().toFixed(2) * 10);*/

// random value for "Ludo" game
/*let upperValue = 6;
let lowerValue = 0;

let resultValue = Math.floor(Math.random() * (upperValue - lowerValue) + 1);

console.log(resultValue);*/

// Javascript boolean [True, False]
/*let numOne = 8;

console.log(Boolean(numOne));*/

// 24hrs formate greetings App
// 6am to 12pm "Good Mornning"
// 12pm to 18pm "Good Afternoon"
// otherwise "Good Evening"
/*let time = new Date().getHours(); //new Date().getHours(); [Live time function]

if(time >=6 && time < 12){
    console.log('Good Morning');
}
else if(time >= 12 && time < 18){
    console.log('Good Afternoon');
}
else {
    console.log('Good Evening');
}*/
// another
/*let time = 19;

if(time >=6 && time < 12){
    console.log('Good Morning');
}
else if(time >= 12 && time < 18){
    console.log('Good Afternoon');
}
else {
    console.log('Good Evening');
}*/

/*let x = 1;
switch(x){
    case 0:
        x = "Off";
    break;
    case 1:
        x = "On";    
}

console.log(x);*/

/*let day = 5;
switch(day){
    case 0:
        day = "Sunday";
    break;
    case 1:
        day = "Monday";
    break;
    case 2:
        day = "Tuesday";
    break;
    case 3:
        day = "Wensday";
    break;
    case 4:
        day = "Thursday"; 
    break;
    case 5:
        day = "Friday"; 
    break;
    case 6:
        day = "Saturday";   
}

console.log(day);*/

/*let day = 5;
switch(day){
    case 0:
        day = "It's Weekend";
    break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        day = "It's Office Day";
    break;
    default:
        day = "Not found";
}

console.log(day);*/

// (new Date().getDay()) [Live day function]
/*let day;
switch(new Date().getDay()){
    case 0:
        day = "It's Weekend";
    break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        day = "It's Office Day";
    break;
    default:
        day = "Not found";
}

console.log(day);*/

// for loop
/*for (let i=0; i<6; i++)
    console.log('hello World', i);

for (let i=6; i>0; i--)
    console.log('hello World', i);

for (let i=6; i>0; i--){
    console.log('hello World', i);
    if (i===4) break;
}*/

/*const cars = ['Toyota', 'Hunday', 'BMW', 'Scania', 'Volvo', 'Honda']
for (let i=0; i<cars.length; i++){
    console.log(cars[i]);
}*/

/*const cars = ['Toyota', 'Hunday', 'BMW', 'Scania', 'Volvo', 'Honda']
for (car of cars)
    console.log(car)*/

// while Loop
/*let num = 1;

while (num <=10){
    console.log('This is While Loop', num)
    num++
}*/

let num = 1;

while (num <=10){
    console.log('This is While Loop', num)
    num++
}
document.write('your loop works fine')