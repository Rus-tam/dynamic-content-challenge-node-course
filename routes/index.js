const express = require('express');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
    res.render('index', {
        pageTitle: 'Form page'
    });
});

router.post('/users', (req, res) => {
    users.push({user_name: req.body.user_name});
    res.redirect('/users');
})

exports.routes = router;
exports.users = users;