const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));

// parse application/json
app.use(express.json());

app.use(express.static('public'));
app.use(express.static('videos'));

// SSR - Server side rendering

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/player/:videoid", (req, res) => {
    return res.sendFile(__dirname + "/public/player/player.html");
});

const port = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error running the server!")
    }
    console.log("Server is running on port", server.address().port);
});