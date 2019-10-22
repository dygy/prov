const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/tables', function(req, res, next) {
    res.render('./pages/tables', { title: 'Auth' });
});

router.get('/shtender', function(req, res, next) {
    res.render('./pages/shtender', { title: 'Auth' });
});

router.get('/lightpan', function(req, res, next) {
    res.render('./pages/lightpan', { title: 'Auth' });
});

router.get('/mobstand', function(req, res, next) {
    res.render('./pages/mobstand', { title: 'Auth' });
});
router.get('/kron', function(req, res, next) {
    res.render('./pages/kron', { title: 'Auth' });
});

router.get('/light', function(req, res, next) {
    res.render('./pages/light', { title: 'Auth' });
});
router.get('/fonts', function(req, res, next) {
    res.render('./pages/fonts', { title: 'Auth' });
});
router.get('/', function(req, res, next) {
    res.render('./pages/main', { title: 'Chat'});
});
module.exports = router;