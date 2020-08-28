const router = require('express').Router();

const User = require('../models/User.js');

router.get('/users', async (req, res) => {
    if (req.session.role == 1 || req.session.role == 2){
        const users = await User.query().select('username');
        return res.send(users);
    } else {
        return res.send({response: 'Unauthorized data request'})
    }
});

router.get('/currentUser', async (req, res) => {
    const user = req.session.username
    return res.send(user);
});

module.exports = router;