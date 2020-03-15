$("#box-type-coercion-before").one('click', () => {
    $("#box-type-coercion p").prepend("Type coercion can, sometimes, come in handy when you are working with different values.<br>");
    $("#box-type-coercion-before").hide();
});

$("#box-type-coercion-after").one('click', () => {
    $("#box-type-coercion p").append("<br>Type coercion lets us do things like: 123 + ' age' and '3' * '4' where in the latter case, JavaScript handles the Strings as Numbers.");
    $("#box-type-coercion-after").hide();
});

$("#box-asi h3").click(() => {
    $("#box-asi h3").css("font-size", "1.0em");
    $("#box-asi h3").html("Automatic Semicolon Insertion");
    $("#box-asi p").css("font-size", "1.0em");
});

$("#box-arrow-functions button").hover(() => {
    $("#box-arrow-functions p").css("display", "block");
}, () => {
    $("#box-arrow-functions p").css("display", "none");
});

// side navigation

// set the width of the side navigation to 250px
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  };
  
// set the width of the side navigation to 0
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  };