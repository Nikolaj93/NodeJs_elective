const express = require('express');
const fs = require('fs-extra');
const app = express();

app.use(express.json());

app.use(express.static('frontend'));

const session = require('express-session');
app.use(session({
    secret: require('./config/mysqlCredentials.js').development.session, //sessionSecret?
    resave: false,
    saveUninitialized: true
}));

const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 8
});
app.use("/login", limiter);
app.use("/signup", limiter);


// Setup Objection + Knex

const { Model } = require('objection');
const Knex = require('knex');
const knexFile = require('./knexfile.js');
const knex = Knex(knexFile.development);
Model.knex(knex);

// Pages

const headerPage = fs.readFileSync(__dirname + "/frontend/header/header.html", "utf8");
const footerPage = fs.readFileSync(__dirname + "/frontend/footer/footer.html", "utf8");

//Home pages

const adminPage = fs.readFileSync(__dirname + "/frontend/frontpages/homeAdmin.html", "utf8");
const userPage = fs.readFileSync(__dirname + "/frontend/frontpages/homeUser.html", "utf8");

//Content pages

const noAccess = fs.readFileSync(__dirname + "/frontend/contentPages/noAcces.html", "utf8");
const secretPage = fs.readFileSync(__dirname + "/frontend/contentPages/secret.html", "utf8");

// Add routes

const authRoute = require('./routes/auth.js');
const usersRoute = require('./routes/users.js');

app.use(authRoute);
app.use(usersRoute);

// Start server

const PORT = 3000;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", PORT);
});
