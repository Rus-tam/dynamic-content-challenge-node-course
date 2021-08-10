const express = require('express');
const indexRoutes = require('../routes/index');

const router = express.Router();

router.get('/users', (req, res, next) => {
    const users = indexRoutes.users;
    res.render('users', {
        pageTitle: 'Users',
        users,
        hasUsers: users.length > 0
    })
})

module.exports = router;