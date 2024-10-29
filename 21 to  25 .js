

var firstName = prompt("Enter first name");// Q1
var lastName = prompt("Enter last name");
alert(firstName + "" + lastName + "Welcome to my page");


var userPhone = prompt("What is your favourite phone?");// Q2
for (var i = 0; i < userPhone.length; i++) {
   if (userPhone === i){
      userPhone = userPhone.slice(0, i)
   }
}
document.write("My favourite phone is:" + " " + userPhone + "<br>");
document.write("Length of string: " + userPhone.length + "<br>");



document.write("<h2>Question 03</h2>" + "<br>"); //Q3
var str = "pakistani";
document.write("String:" + str + "<br>");
str = str.indexOf("n");
document.write("Index Of 'n':" + str);




document.write("<h2>Question 04</h2>" + "<br>"); // Q4
var str2 = "Hello World";
document.write("String:" + str2 + "<br>");
str2 = str2.lastIndexOf("l");
document.write("Last indexOf 'l': " + str2 + "<br>");




document.write("<h2>Question 05</h2>" + "<br>");// Q5
var str = "Pakistani";
document.write("String :" + str + "<br>");
str = str.charAt(3);
document.write("CharacterAt index '3': " + str + "<br>");



var firstName = "Aneesa"; // Q6
var lastName = "Idrees";
alert(firstName.concat(" " + lastName));



document.write("<h2>Question 07</h2>" + "<br>");
var originalStr = "Hyderabad";  // Q# 7
var newStr = originalStr.replace(/Hyder/, "Islam");
document.write(newStr);


document.write("<h2>Question 08</h2>" + "<br>"); //Q# 8
var msg = "Ali and Sami are best friends.They are play circket and football together.";
msg = msg.replace(/and/ , "&");
document.write(msg)



document.write("<h2>Question 09</h2>" + "<br>"); //Q# 9
var str = "472";
document.write("Value : "+str+"<br>");
document.write("Type : "+typeof str +"<br>");
var value = 472;
document.write("Value : "+value+"<br>");
document.write("Type : "+typeof value+"<br>");



document.write("<h2>Question 10</h2>" + "<br>"); //Q# 10
var userInput = prompt("Enter a dry fruits name;");
document.write("user input : "+userInput+"<br>");
userInput = userInput.toUpperCase();
document.write("Upper case : "+userInput+"<br>");



document.write("<h2>Question 11</h2>" + "<br>"); //Q# 11
var userInput = prompt("Enter a string");
document.write("user input : "+userInput+"<br>");
userInput = userInput.charAt(0).toUpperCase()+userInput.slice(1).toLowerCase();
document.write("title case : "+userInput);



document.write("<h2>Question 12</h2>" + "<br>"); //Q# 12
var num = 23.45;
document.write("Number : "+ num +"<br>");
num = num.toString().replace("." , "");
document.write("Result : "+ num+"<br>");



// Question 14


var A = ["cake","apple pie","cookie","chips","patties"];
var user = prompt("Enter a bakery name ");
user = user.toLowerCase()
for(var i = 0 ; i<A.length; i++){
if(user === A[i].toLowerCase()){
alert("Item is found");
document.write(user + "is Available at index no " +i+"<br>")
break;
}
}
if(user !== A[i]){
   alert("Item is not found")
   document.write("Sorry! "+user +" is not Available in our bakery "+"<br>");
}




// Question 16 

var uni = "University of Karachi".split("");
for(var i =0; i<uni.length;i++){
   document.write(uni[i]+"<br>")
}

// Question no 17 
document.write("<h2>Question 17 </h2>" + "<br>"); 
var userLastchr = prompt("enter a country name");
document.write("user input : "+ userLastchr+"<br>");
for(var i = 0 ; i<userLastchr.length;i++){

}
var lastChar = userLastchr.charAt(userLastchr.length-1)
document.write("last character : "+ lastChar+"<br>");


// Question 18 
document.write("<h2>Question 18 </h2>" + "<br>"); 
var string  = "The quick brown fox jumps over the lazy dog.";
document.write("Text : "+ string+"<br>");

var count =( string.match(/The/gi )|| []).length;
document.write("There are " + count + " occurences of word 'the' " +"<br>");


// // ///////////////// done