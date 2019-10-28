const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/stand', function(req, res, next) {
    res.render('./calculator', { title: 'Auth' });
});

module.exports = router;