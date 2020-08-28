const route = require('express').Router();
const User = require('../models/User.js');
const Role = require('../models/Role.js');

const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const fs = require('fs-extra')

const credentials = require("../config/mailCredentials.js");
const nodemailer = require('nodemailer');

const saltRounds = 12;

route.use(bodyParser.json())
route.use(bodyParser.urlencoded({extended: true}))


route.post("/login", async (req, res) => {
    const {username, password} = req.body
    try {
        const user = await User.query().select().where({username: username});

        bcrypt.compare(password, user[0].password).then((result) => {
            if (result == true){
                req.session.role = user[0].role_id
                req.session.username = user[0].username
                console.log('you are logged in ', req.session.username)
                return  res.redirect('/home') 
            } else {
                console.log('wrong password')
                res.redirect('/login?error=' + encodeURIComponent('wrong_uop'));
            }
        });
    } catch (error) {
        res.redirect('/login?error=' + encodeURIComponent('wrong_uop'));
    }
});

route.post('/resetPassword', async (req, res) => {
    //const users = await  User.query().select();
    const {password, repeatPassword, username} = req.body;
    const isPasswordTheSame = password === repeatPassword;
    console.log(password + ' ' + repeatPassword + ' ' + username + ' ' + isPasswordTheSame)
    if (username && password && isPasswordTheSame) {

        if (password.length < 8) {
            res.redirect('/resetPassword?error=' + encodeURIComponent('missing_requirements'));
        } else {
            try {
                const userFound = await User.query().select().where({ 'username': username }).limit(1);
                bcrypt.compare(password, userFound[0].password).then((result) => {
                    if (result == true) {
                        res.redirect('/resetPassword?error=' + encodeURIComponent('old_p'));
                    }
                });
                
                if (userFound != null) {
                    const hashedPassword = await bcrypt.hash(password, saltRounds);
                
                    await User.query().update({password: hashedPassword}).where('username', username);
    
                    res.redirect('/resetPassword?error=' + encodeURIComponent('password_updated'));
                } else {
                    res.redirect('/resetPassword?error=' + encodeURIComponent('no_user'));
                }
                     
            } catch (error) {
                console.log(error);
                res.redirect('/resetPassword?error=' + encodeURIComponent('datab_error'));
            }
        }
         
    } else if (password && repeatPassword && !isPasswordTheSame) {
        res.redirect('/resetPassword?error=' + encodeURIComponent('mismatch_password'));
    } else {
        res.redirect('/resetPassword?error=' + encodeURIComponent('missing_fields'));
    }
});

route.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect('/login');
    });
});

route.post('/signup', async (req, res) => {
    //const users = await  User.query().select();
    const {username, password, repeatPassword, email, role} = req.body;
    const isPasswordTheSame = password === repeatPassword;

    if (username && password && isPasswordTheSame) {

        if (password.length < 8) {
            res.redirect('/signup?status=' + encodeURIComponent('missing_requirements'));
        } else {
            try {
                const userFound = await User.query().select().where({ 'username': username }).limit(1);
                
                if (userFound.length > 0) {
                    res.redirect('/signup?status=' + encodeURIComponent('user_exists'));
                } else {
                    const hashedPassword = await bcrypt.hash(password, saltRounds);
                    await User.query().insert({username: username, password: hashedPassword,
                        role_id: role, email: email
                    });
                    sendConfirmation(username, password, email);
    
                    res.redirect('/signup?status=' + encodeURIComponent('user_created'));
                }
            } catch (error) {
                console.log(error);
                return res.status(500).send({ response: "Something went wrong with the database" });
            }
        }
        
    } else if (password && repeatPassword && !isPasswordTheSame) {
        res.redirect('/signup?status=' + encodeURIComponent('mismatch_password'));
    } else {
        res.redirect('/signup?status=' + encodeURIComponent('missing_fields'));
    }
});

route.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect('/login');
    });
});

//Nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: credentials.development.email,
      pass: credentials.development.passwordMail
    }
  });

function sendConfirmation(name, password, email){
    const mailOptions = {
      from: credentials.development.email,
      to: email,
      subject: 'Confirmation - Mandatory 2',
      text: 'Welcome ' + name + ' to Mandatory2 assignment!'
    }
  
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email has been sent.');
      }
    });
  };

module.exports = route