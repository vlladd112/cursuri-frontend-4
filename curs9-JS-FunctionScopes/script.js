var a = 2;
function diplayVariables() {
    var b = 3;
    
    c = 4;  //  <<=== variabila globala (pt ce e declarata fara "var" in fata)
    
    console.log("'a' inside function:", a); //2
    console.log("'b' inside function:", b); //3
    console.log("'c' inside function:", c); //4
}
diplayVariables();

console.log("'a' outside function:", a); //2
console.log("'b' outside function:", typeof b); //Uncaught ReferenceError: b is not defined at script.js:14 - dar am pus typeof inainte si apare undefined in colsole.log in loc de eroare
console.log("'c' outside function:", c); //4

//  ================================================


var x = 1; //global
function firstFunction() {
    var y = 2; //  variabila locala pt FirstFunction
    function secondFunction() {
        var z = 3;
        console.log("second x = ", x);  //1
        console.log("second y = ", y);  //2
        console.log("second z = ", z);  //3

        function thirdFunction(z) {
            z = 5;  // aici "z" e parametru, nu variabila globala!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            console.log("third x = ", x);   //1
            console.log("third y = ", y);   //2
            console.log("third z = ", z);   //5
        }
        thirdFunction(z);
} 
    secondFunction();
    
    console.log("first x = ", x);   //1
    console.log("first y = ", y);   //2
    console.log("first z = ", typeof z);   //undefined, fara typeof ne da eroare
}
firstFunction();

//  ===================================================

(function demoHoisting() {
    var a = 1000;
    console.log(a + " " + b);
    var b = 2000;
})(); // IIFE - functie care se autoapeleaza!!!!!!!!!!

// this is identical with:
(function demoHoisting() {
    var a = 1000;
    var b;
    console.log(a + " " + b);
    b = function xxx() {
        console.log("CEVA!");
    }
    console.log(b());
})();

// Ambele functii sunt acelasi lucru.


//TEMA DE GANDIRE: care este diferenta intre function declaration si function expresion cand vine vorba de HOISTING (in contextul de hoisting).