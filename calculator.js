//Ricardo Colon SDI Week 2

//Part One of The Program Number of Seconds Alive


var name = prompt("What is your name?");
alert("Hello, " + name);

document.write("<h2>Find your age in seconds & the day of the week you were born (if you were born before year 2000).</h2>");


document.write(name);

var yearsAlive = prompt("What is your age in years?");

document.write("You are " + yearsAlive + " years old!");
console.log("You are " + yearsAlive+ " years old!");


var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;

var secondsAlive = yearsAlive * secondsPerMin * minsPerHour * hoursPerDay * daysPerWeek * weeksPerYear;

alert("You've been alive for more than " + secondsAlive + " seconds!");


console.log(yearsAlive * secondsPerMin * minsPerHour * hoursPerDay * daysPerWeek * weeksPerYear);
document.write("You've been alive for more than " + secondsAlive + " seconds!");

var last2Year = prompt("What are the last 2 digits of the year were you born?");
document.write("You were born in the year 19" + last2Year + "!");

var first3month = prompt("What are the first 3 letters of the month were you born?");
document.write("You were born in the month of " + first3month + "!");

var dateOFmonth = prompt("What date of the month were you born?");
document.write("You were born in the " + dateOFmonth + "  day of the month!");

//Array variable used to identify date format
var dATEfORMAT = [ "Months", "Date", "Year"]
alert("The date will be on this format " +  dATEfORMAT + ".")

alert("Your birthday is on, " + first3month + "/" + dateOFmonth + "/" + last2Year + ".");

alert(name + " , we will try to calculate the day of the week that you were born. ");

//Every alert was used to explain to the user how they can do it without this program

var step1 = last2Year * 5;
alert("First, we multiply the last 2 digits of the year you were born, " + last2Year + " by 5.");
alert(" That equals " + step1 + ".");

var step2 = step1 / 4;
alert("Then, we divide " + step1 + " by 4.");
alert(" That equals " + step2 + ".");


var step3 = Math.floor(step2)
alert("Then, we eliminate the numbers of " + step2 + "  after the decimal point.");
alert(" That equals " + step3 + ".");











