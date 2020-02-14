function addition(a, b) {
    return a + b;
}

// hoisting
console.log(addition(2,6));

/* a scope in javascript is inside of 
{

}
*/

function introduce() {
    console.log("nice to meet you!");
}

function whoDis() {
    console.log("Who are you?");
}

/*const whoDis = function() {
    console.log("Who are you?");
}*/
function findPerson(whatToDoAfterFindingAPerson) {
    console.log("spotted a person!")
    whatToDoAfterFindingAPerson();
}

findPerson(introduce);

// do something else... not introduce
findPerson(whoDis);

//as a lambda function
const aboutMe = (me) => {
    console.log("My hobby is", me.hobby);
}

const meAsAnObject = {
    hobby: "football"
};

aboutMe(meAsAnObject);

const anotherExample = {
    myFavoriteFunction: function() {
        console.log("this function is great! xdeee");
    }
}

anotherExample.myFavoriteFunction();

// create an arrow function that is called callingLater
// that thakes the function calling as an argument
let name = "Nikolaj"

const calling = (name) => {
    return "ring ring ring to " + name;
};

const callingLater = (calling, name) => {
    console.log(calling(name));
}

callingLater(calling, name);

function lastThing() {
    function thisIsPossibleInJavascript() => {
        console.log("A OK");
    }
    thisIsPossibleInJavascript();
}

lastThing();