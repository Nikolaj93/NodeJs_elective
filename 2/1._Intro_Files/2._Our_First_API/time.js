var app = require("express")();

//  callback function
//  callback functions are KEY in nodejs
//  everything in node is based on callback functions
//          res.send is a return statement

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
app.get("/time", (req, res) => {
    const date = new Date();
    res.send({
        unformatedTime: date,
        time: date.toString(),
        day: date.getDay(),
        weekDay: days[date.getDay()]
    });
});

app.listen(3000, error => {
    if (error) {
        console.log("Error running the server", error);
    }
    console.log("Server is running on port", 3000);
});