// Question 01 
document.write("<h2>Question 01</h2>" + "<br>"); 
var cuurenDate = new Date ();
document.write(cuurenDate+"<br>");


//  question 02
document.write("<h2>Question 02</h2>" + "<br>"); 
var monthsName = ["january","Feburary","March","april","May","June","July","August","September","October","November","December"];
var currentMonth= new Date()
var monthIndex = currentMonth .getMonth()
var month = monthsName[monthIndex]
document.write("Current Month : "+month+"<br>");


// Question 03 
var days = ["sun","mon","tues","wed","thurs","fri","sat"];
var CurrentDay = new Date();
var dayIndex = cuurenDate .getDay();
var day = days[dayIndex];
alert(day);


// Question 04
var days = ["sun","mon","tues","wed","thurs","fri","sat"];
var CurrentDay = new Date();
var dayIndex = cuurenDate .getDay();
var day = days[dayIndex];
if(days === "sun"|| days=== "sat"){
alert("It's a fun day")
}
else{
    alert("working day")
}


// Question 05
var currentDate = new Date()
var date = currentDate.toDateString()
if(date <= 15){
alert("First fifteen days of the month")
}
else{
    alert("Last days of the month")
}





// Question 06
document.write("<h2>Question 06</h2>" + "<br>"); 
// Date object create
var startTime = new Date('1970-01-01');

// Current time
var currentTime = new Date();

// Time difference calculate
var minutesSinceMidnight = (currentTime.getTime() - startTime.getTime()) / (1000 * 60);
document.write("Elapsed miliSeconds since January , 1 1970  : "+minutesSinceMidnight+"<br>");




// Question no 07
var today = new Date();
var hours = today.getHours();

if (hours < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}



// Question no 08
document.write("<h2>Question 08</h2>" + "<br>"); 
var laterDate = new Date("thus Dec 31 2020");
document.write("later Date : "+laterDate+"<br>");




// Question no 09
document.write("<h2>Question 09</h2>" + "<br>"); 
var ramdanDate = new Date("June 18,2015");
console.log(ramdanDate);
var today = new Date()
// var todayDate = today.toDateString();
console.log(today);
var differnce = today.getTime()-ramdanDate.getTime()
console.log(differnce);
var dayPassed = differnce/(1000*60*60*24);
console.log(Math.floor(dayPassed));
document.write(Math.floor(dayPassed)+" days have passed since 1st Ramdam , 2015"+"<br>");




// Question no 10
document.write("<h2>Question 10</h2>" + "<br>"); 
// Reference date
var referenceDate = new Date('Dec 05, 2015 22:50:16 GMT+0500');

// Beginning of 2015
var startDate = new Date('Jan 01, 2015 00:00:00 GMT+0500');

// Time difference calculate
var secondsElapsed = (referenceDate.getTime() - startDate.getTime()) / 1000;
document.write(secondsElapsed+"seconds had passed since beginning of 2015"+"<br>");



// Question 11
document.write("<h2>Question 11</h2>" + "<br>"); 
// Current time
var currentTime = new Date();
// 1 hour ago
var anHourAgo = new Date(currentTime.getTime() - 60 * 60 * 1000);
document.write("Current Time: ", currentTime+"<br>");
document.write("1 hour ago: ", anHourAgo+"<br>");


// Question 14
var customerName = "ABC Customer";
var month = "Februry";
var numOfUnit = 410;
var chargesPerUnit = 16;

var netAmountPayable = numOfUnit * chargesPerUnit;

console.log("Customer Name: " + customerName);
console.log("Month: " + month);
console.log("Number of Units: " + numOfUnit);
console.log("Charges Per Unit: $" + chargesPerUnit);
console.log("Net Amount Payable: $" + netAmountPayable);

var latePaymentCharges = 350;
console.log("Late payment charges is:"+latePaymentCharges);
var  GrossAmountPayable=netAmountPayable + latePaymentCharges;
console.log("Gross Amount payable  is:"+ GrossAmountPayable);
 // 12 13 14 pending