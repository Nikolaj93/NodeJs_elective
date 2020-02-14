/* var express = require("express");
var app = express();
*/

//same as the above but 1 line less...
var app = require("express")();

// callback function
// callback functions are KEY in nodejs
// everything in node is based on callback functions
app.get("/", (req, res) => {
    const response = {
        message: "hello there"
    }
    res.send(response);
});

app.listen(3000);