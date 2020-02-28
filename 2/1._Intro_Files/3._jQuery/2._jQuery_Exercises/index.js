//--------exercises 1-5--------//

//centers the webpage
$("body").css("text-align", "center");

//changing title
//# is for id
$("#title h2").text("New title");

//changes the background color of the subtitle box
$(".subtitle-box h3").css("background-color", "orange");

//hides the subtitle box h4
$(".subtitle-box h4").hide();

//adds a dashed border around reason
$(".reason").css("border-style", "dashed");

//--------exercises 6-8--------//
$("ol li").css("font-weight", "bold");

$("ol li").last().css("text-decoration", "underline");

//$("ol li:nth-child(2)").css("text-decoration", "line-through");

$("ol li:eq(1)").css("text-decoration", "line-through");

//--------exercises 9-10--------//

//changes all the elements inside of the second list to italics in one query
$(".second-list li, span").css("font-style", "italic");

//Changes the span font sizes
//  em is relative and better to use than px (pixel).. since computers and phones have different screen sizes
$(".second-list span").css("font-size", "0.5em");

//--------exercises 11-15--------//

//removes the first label element in the unused box.
$(".unused-box label").remove();

//adds a paragraph saying "Second Sentence".
$(".unused-box").append("<p>", "Second Sentence");

//adds a paragraph before the previous one.
$(".unused-box").prepend("<p>", "First Sentence");

//Changes the class name from unused-box to used-box.
$(".unused-box").attr("class", "used-box");

//changes to "used-boxed-clicked" when mouse click occurs.
$(".used-box").click(() => {
    ($(".used-box").toggleClass("used-boxed-clicked"));
});

/*$(document).ready(() => {
    $(".used-box").click(() => {
        $(".used-box").toggleClass("used-boxed-clicked");
    }
});*/

//--------exercises 16-18--------//

//adds text on the button saying "You're ready to click"
//.html() can NOT be used in XML documents.
/*
$("#submit-button").hover(
    () => {
    $("#submit-button").text("You're ready to click");
},
() => {
    $("#submit-button").text("Click");
});*/

//regular function
$("#submit-button").mouseenter(function() {
    $(this).text("You're ready to click");
});
//arrow function
$("#submit-button").mouseleave((event) => {
    $(event.currentTarget).text("Click");
});

//Adds a reason to the ordered list when the button is clicked.
let listNumber = $("#first-list li").length;

$("#submit-button").click(() => {
    listNumber++;
    $("#first-list").append("<li>" + "Reason " + listNumber);
});