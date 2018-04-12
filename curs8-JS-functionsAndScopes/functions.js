function printMessage() {
    console.log("my first function");
}
printMessage();

function print(message) {
    console.log(message);
}

print();  // undefined

print("My first function with parameters");

// ====================================

function printUser(name, gender, weight, height) {
    
    var bmi = weight / (height * height);
    
    if (bmi < 18.5) {
    console.log(name, "|", gender, "| BMI:", bmi, "underweight");
}
    else if (bmi < 25) {
    console.log(name, "|", gender, "| BMI:", bmi, "normal weight");
}
    else if (bmi < 30) {
    console.log(name, "|", gender, "| BMI:", bmi, "overweight");
}
    else {
    console.log(name, "|", gender, "| BMI:", bmi, "obese");
}
}
printUser("Ana", "F", 60, 1.6);
printUser("Vlad", "M", 76, 1.8);

var persons = [
  {
    name: "Ana",
    gender: "F",
    height: 1.6,
    weight: 60
  },
  {
    name: "Ion",
    gender: "M",
    height: 1.8,
    weight: 180
  }
];

for (var i = 0; i < persons.length; i++) {
    printUser(persons[i].name, persons[i].gender, persons[i].weight, persons[i].height)
}


//  ================================================


function computeSum (a, b) {
    console.log("suma este:", a+b);
    a = "Un numar special";
    console.log(a);
}
computeSum(2, 3);   // sum 5, numar special

var a = 2;
var b = 3;
computeSum(a, b);   //// sum 5, numar special
console.log(a);
// even if "a" is  modified inside the function, his value is not changed outside
// a is sent through value

//  ================================================


function computeFN(name) {
    console.log(name.first, name.last);
    name.last = "batman";
    console.log(name.last);
}

var nameObject = {
    first: "Bruce",
    last: "Wayne"
};
computeFN(nameObject);
console.log(nameObject.last);

//  =========================== curs 10 ================

