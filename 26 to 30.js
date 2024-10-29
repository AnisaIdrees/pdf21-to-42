// Question no 01
document.write("<h2>Question 01</h2>" + "<br>");
var userNm = +prompt("enter a positive integer");
// a
document.write("number : " + userNm + "<br>");
// b
document.write("round off : " + Math.round(userNm) + "<br>");
// c
document.write("ceil value : " + Math.ceil(userNm) + "<br>");
// d
document.write("floor value : " + Math.floor(userNm) + "<br>");



// Question no 2
document.write("<h2>Question 02</h2>" + "<br>");
var userNegNum = +prompt("enter a negative number");
// a 
document.write("Number : " + userNegNum + "<br>");
// b
document.write("Round off : " + Math.round(userNegNum) + "<br>");
// c
document.write("Floor value : " + Math.floor(userNegNum) + "<br>");
// d 
document.write("Ceil value : " + Math.ceil(userNegNum) + "<br>");


// Question no 03
var num = -4;
var absoluteValue = Math.abs(num);
document.write("Absolute value of " + num + " is " + absoluteValue+"<br>");


// Question no 04
document.write("<h2>Question 04</h2>" + "<br>");
var diceRandom = Math.random()*2
var round = Math.round(diceRandom);
document.write(round);


// Question no 05
document.write("<h2>Question 05</h2>" + "<br>");
var randomNum = Math.random()*3
var randomCoin = Math.floor(randomNum)
if(randomCoin===2){
document.write(randomCoin+"<br>");
document.write("Random Coin value Head"+"<br>");
}
else if(randomCoin===1){
    document.write(randomCoin+"<br>");
    document.write("Random Coin value Tail"+"<br>");
}
else{
    document.write("try again"+"<br>");

}



// Question no 06 
var ranDom = Math.random()*100
var reRandom = Math.floor(ranDom)+1
document.write("random number between 1 to 100 : "+reRandom+"<br>");


// Question no 7 pending 
document.write("<h2>Question 07</h2>" + "<br>");
var userWg = prompt("Enter your weight in Kilograms");
document.write(userWg+"<br>"); //a
document.write(userWg+"kgs"+"<br>"); //b
if(userWg === parseInt(userWg)){
document.write(userWg+"kgs"+"<br>") // c d
}
else{
    var weight = parseFloat(userWg);
document.write("your wieght is "+weight+"kilograms"+"<br>")

}



// Question no 08
var sercretNum = Math.random()*10 +1
sercretNum = Math.round(sercretNum);
var userNumber = +prompt("Enter a Number between 1 to 10");
if(userNumber === sercretNum){
alert("Congratulations")
}
else{
alert("Try Again")
}


// ////////////////////////////// DONE 