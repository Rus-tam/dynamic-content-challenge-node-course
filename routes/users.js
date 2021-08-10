const express = require('express');

const router = express.Router();

router.get('/users', (req, res, next) => {
    res.send('<h1>This is users.html page</h1>');
})

module.exports = router;