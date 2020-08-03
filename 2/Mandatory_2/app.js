const express = require('express');
const fs = require('fs-extra');
const app = express();

app.use(express.json());

app.use(express.static('frontend'));

const session = require('express-session');
app.use(session({
    secret: require('./config/sessionCredentials.js').development.session, //sessionSecret?
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
// Using readFileSync blocks the app from going on, before the file is read
const headerPage = fs.readFileSync(__dirname + "/frontend/header/header.html", "utf8");
const footerPage = fs.readFileSync(__dirname + "/frontend/footer/footer.html", "utf8");

//Home pages
const adminPage = fs.readFileSync(__dirname + "/frontend/frontpages/homeAdmin.html", "utf8");
const userPage = fs.readFileSync(__dirname + "/frontend/frontpages/homeUser.html", "utf8");

//Content pages
const noAccess = fs.readFileSync(__dirname + "/frontend/contentPages/noacces.html", "utf8");
const secretPage = fs.readFileSync(__dirname + "/frontend/contentPages/secret.html", "utf8");

// Add routes
const authRoute = require('./routes/auth.js');
const usersRoute = require('./routes/users.js');

app.use(authRoute);
app.use(usersRoute);

app.use((req, res, next) => {
    console.log(new Date());
    next();
})

app.get("/", (req, res) => {
    return  res.sendFile(__dirname+'/frontend/login.html')
});

app.get("/login", (req, res) => {
    return  res.sendFile(__dirname+'/frontend/login.html')
});

app.get("/signup", (req, res) => {
    return  res.sendFile(__dirname+'/frontend/signup.html')
});

app.get("/resetPassword", (req, res) => {
    return  res.sendFile(__dirname+'/frontend/reset.html')
});

//The home page route
app.get("/home", (req, res) => {
    if (req.session.role == 2) {
        return  res.send(headerPage + userPage + footerPage)

    } else if (req.session.role == 1){
        return  res.send(headerPage + adminPage + footerPage)

    } else if (req.session.role == 3){
        return  res.send(headerPage + anonymousPage + footerPage)

    }else {
        res.redirect('/login?error=' + encodeURIComponent('unauthorized'));
    }
    
});

app.get("/secret", (req, res) => {
    if (req.session.role == 2) {
        return  res.send(headerPage + secretPage + footerPage)

    } else if (req.session.role == 1){
        return  res.send(headerPage + secretPage + footerPage)

    } else if (req.session.role == 3){
        return  res.send(headerPage + noAccess + footerPage)

    }else {
        res.redirect('/login?error=' + encodeURIComponent('unauthorized'));
    }
});

// Start server
const PORT = 3000;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", PORT);
});
