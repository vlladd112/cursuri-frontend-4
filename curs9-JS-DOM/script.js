var commentsList = document.getElementById("comments-list");
console.log(commentsList);  //null -  nu e incarcat inca, de aia apare null in consola

window.addEventListener("load", onHtmlLoaded);

function onHtmlLoaded() {
    // FNDING ELEMENTS IN HTML
    var commentsList = document.getElementById("comments-list");
    console.log(commentsList); // the element
    
console.log("comments items",
           document.getElementsByClassName("comment-item"));
console.log("comments items by tag",
           document.getElementsByTagName("section"));
var commentItems = document.getElementsByTagName("section");
    
console.log("first comment items", commentItems[0]);
console.log("second comment items", commentItems[1]);

console.log("first paragraph inside section", 
           document.querySelector("section.comment-item > p"));
console.log("all paragraph inside section", 
           document.querySelectorAll("section.comment-item > p"));

// dfdfdf
var h1Array = document.getElementsByTagName("h1");  //returns array
console.log(h1Array[0]);    //returns first element
    
    var h1 = document.querySelector("h1");  //returns first elemnt
    console.log(h1);
    console.log(h1Array.innerHTML); //  undefined
    console.log(h1Array[0].innerHTML);      //actual element
    console.log(h1.innerHTML);  //actual element
    h1.innerHTML = "JS DOM manipulation modified";
    
    //  GET and Set attributes
    var list = document.getElementById("comments-list");
    console.log("Element ID", list.id, list.getAttribute("id"));
    
    list.id = "comments-list-new-id";
    list.setAttribute("id", "comments-list-new");       //  asa se poate modifica orice atribut
    
    list.style.border = "solid 1px red";
    list.style.padding = "10px";
    
    //      Creating an elemnt
    
    var comment = document.createElement("section");    //  create a new secrion element
    comment.className = "comment-item"  //  set the class on this element var 1
    var commentClassList = comment.classList;
    commentClassList.add("second-comment-item");    // set the class on this element var 2
    comment.innerHTML = "<h2>Vlad</h2><p>Comment from Vlad</p>";
    
    //      Add elemnet on page
    
    list.appendChild(comment);
    
    var aaa = document.getElementsByClassName("comment-item");
    console.log(aaa[0]);
    
    var anaComment = document.querySelector(".comment-item");
    list.removeChild(anaComment);
    
    console.log(comment.children);
    console.log(comment.querySelector("p"));
    
    // EVENTS
    
    var submitButton = document.getElementById("btn-submit");
    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // stops the default execution(refresh page) and executes the follow lines
        console.log(event.target);  //the element that was clicked
    });
    
    }