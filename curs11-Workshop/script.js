window.onload = onHtmlLoaded;
function onHtmlLoaded() {
    //safe DOM manipulation
    
    var nameElement = document.querySelector("input[name='name']");
    
    var contentElement = document.querySelector("[name='content']");
    
    var form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        addComm(nameElement.value, contentElement.value);
    });
    
}

function addComm(name, content) {
    console.log(name, content);
    
    var section = document.createElement("section");
    section.classList.add("comment-item");
    
    var h2 = document.createElement("h2");
    h2.innerText = name;
    section.appendChild(h2);
    
    var p = document.createElement("p");
    p.innerText = content;
    section.appendChild(p);
    
    //<button name="remove">x</button>
    
    var button = document.createElement("button");
    button.setAttribute("name", "remove");
    button.innerText = "x";
    section.appendChild(button);
    
    //add event listener
    button.addEventListener("click", function(event) {
        console.log(event.target);
        
        var kill = event.target.parentElement;
        list.removeChild(kill);
    });
    
    var list = document.getElementById("comments-list");
    list.appendChild(section);
    
    
}