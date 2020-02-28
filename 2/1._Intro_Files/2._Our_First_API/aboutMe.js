var app = require("express")();

// callback function
// callback functions are KEY in nodejs
// everything in node is based on callback functions
app.get("/", (req, res) => {
    const response = {
        name: "Nikolaj",
        age: 26
    }
    res.send(response);
});

app.listen(3000);