const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/akmet', function(req, res, next) {
    res.render('./pages/fontinfo', { title: 'Auth' });
});

module.exports = router;