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

// Mary Anne | f | bmi: 30 | obese

for (var i = 0; i < persons.length; i++) {
    
    var currentPerson = persons[i];
    
    var bmi = currentPerson.weight / (currentPerson.height * currentPerson.height);
    
    if (bmi < 18.5) {
    console.log(currentPerson.name, "|", currentPerson.gender, "| BMI:", bmi, "underweight");
}
    else if (bmi < 25) {
    console.log(currentPerson.name, "|", currentPerson.gender, "| BMI:", bmi, "normal weight");
}
    else if (bmi < 30) {
    console.log(currentPerson.name, "|", currentPerson.gender, "| BMI:", bmi, "overweight");
}
    else {
    console.log(currentPerson.name, "|", currentPerson.gender, "| BMI:", bmi, "obese");
}
}