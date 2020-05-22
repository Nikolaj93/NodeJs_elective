const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));

// parse application/json
app.use(express.json());

app.use(express.static('public'));
app.use(express.static('videos'));

// SSR - Server side rendering
// here: load the navbar and console.log it
// note: 'fs' mean 'filesystem'
const fs = require('fs');

const navbarPage = fs.readFileSync("public/navbar/navbar.html", "utf8");
const footerPage = fs.readFileSync("public/footer/footer.html", "utf8");

const frontpagePage = fs.readFileSync("public/frontpage/frontpage.html", "utf8");
const playerPage = fs.readFileSync("public/player/player.html", "utf8");

app.get("/", (req, res) => {
    return res.send(navbarPage + frontpagePage + footerPage);
});

app.get("/player/:videoid", (req, res) => {
    return res.send(navbarPage + playerPage + footerPage);
});


const port = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error running the server!")
    }
    console.log("Server is running on port", server.address().port);
});