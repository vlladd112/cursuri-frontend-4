$(window).on("load", onHtmlLoaded);

function onHtmlLoaded() {
console.log("window loaded");
    
    var list = $("#comments-list");
    console.log(list[0]);

    var firstP = $(".comment-item p")[0];
    console.log("first paragrapg inside comment-item", firstP);

    var h1 = $("h1");     // jQ element
    console.log(h1[0]); //  HTML element
    console.log(h1.text(), h1.html());

    h1.text("LALALA");
    console.log(h1.text());

    h1.html("<em>AAAAAA</em> lalala");
    console.log(h1.html());
    
    console.log()
    list.attr("id", "comments-list-new");
    console.log("new attr of list", list.attr("id"))
    
    list.css({
        "border": "solid 1px red",
        "color": "blue"
    });
    
    // add elements
    
    var element = "<section class='comment-item'><h2>name</h2><p>content</p></section>";    //am creat element
    list.append(element);   //am lipit element
    
    $("<p>My new elment</p>").insertBefore(list);
    
    // remove element
    
    var firstComment = $(".comment-item")[0];
    console.log($(".comment-item"), firstComment);
    firstComment.remove();
    
    var button = $("#btn-submit");
    button.on("click", function(event) {
        event.preventDefault();
        console.log("clicked", event);
    });
    
}
