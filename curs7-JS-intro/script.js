//alert("My first JavaScript alert!");
//alert("My first alert from a different file");
var x = 2;
console.log(x);
var age = 29;
console.log("My age is", age);
var price = 99.99;
console.log("The price is", price, "$");
var fullName = "Vlad Andriev";
console.log("My name is", fullName);
var paragraph = "para \ngraf"
console.log(paragraph);
var backslash = "variable with \"";
console.log(backslash);
var quotes = "\"quotes\"";
console.log(quotes);
var differentquotes = "'alte \'\" quotes'";
console.log(differentquotes);
var isTrue = true;
var isFalse = false;
console.log(isTrue, isFalse);
var nullValue = null;
console.log("Null value", nullValue);
var undefVal;
console.log("Undefined value", undefVal);
var x = 2;
console.log(x);
x = undefined;
console.log(x);
console.log(43%10); //afiseaza resul impartirii
console.log(2=="2");
console.log(2==="2"); //verifica ata valoarea cat si tipul variabilei
console.log(2===2);
console.log(typeof 10); //number
console.log(typeof "text"); //string
console.log(typeof true); //boolean
console.log(typeof myVar); //undefined
console.log(typeof nullValue); //object
var n = 1;
var isPositive = n > 0 ? true : false;
console.log("is positive", isPositive);
var isPositive = n > 0 ? 1 : 0;
console.log("value is", isPositive);

//curs 2 JS =====================

var p = 1 + 1;
var q = p * 2;
console.log(p,q);

var firstName = "Chuck";
var lastName = "Norris";

var fullName = firstName + " " + lastName;
console.log("Full name:", fullName);

var names = ["Lidia", "Vlad", "Gabi", "David", "Adi", "Ema"];
console.log(names[4]);
console.log(names.sort());
console.log("length", names.length);

var robot = {
  model: "TRX1000",
  color: "red",
  "full name": "Robot's name",
  walk: function() {
  console.log("Robot is walking");
  }
};
console.log(robot.color);
console.log(robot["full name"]);
robot.walk();

var color = "red";
if (color === "red") {
  console.log("red color")
} else {
  console.log("not red")
}
var email = "vlladd112@gmailcom";
console.log(email.indexOf("@")); //  <<====== afla pozitia din string.
if (email.indexOf("@") > -1) {  //  <<======== afli daca exista "@" in stringul din var email.
  console.log("email correct")
} else {
  console.log("email incorrect")
}

var weather = "xxx";
switch (weather) {
  case "rainy":
  console.log("Vez' ca ploua!")
  break;
  case "sunny":
  console.log("Treaba buna, meri afar'!") //      <<<========= astea se folosesc in loc de else if
  break;
  case "cloudy":
  console.log("Plm... is nori...")
  break;
  default:
  console.log("URAGAN!");
  break;
}
var i = 1;
while (i < 10) {
  console.log("Nr.", i)
  i++;
}
console.log("Gata");

var j = 15;
do {
  console.log("j", j)
  j++
} while (j < 10);

var numbers = [4, 6, 8, -2, 5];
for (var k = 0; k < numbers.length; k++) {
  console.log("pozitia lui K in string e ", k);
  console.log("element at position K", numbers[k]);
}