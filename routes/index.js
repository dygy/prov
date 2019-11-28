const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/pilon', function(req, res, next) {
    res.render('./pages/pilon', { title: 'Pilon' });
});
router.get('/viv', function(req, res, next) {
    res.render('./pages/viv', { title: 'Vivesky' });
});
router.get('/test', function(req, res, next) {
    res.render('./index', { title: 'Auth' });
});
router.get('/inputgroup', function(req, res, next) {
    res.render('./pages/inputgroup', { title: 'Auth' });
});

router.get('/stickers', function(req, res, next) {
    res.render('./pages/stickers', { title: 'Auth' });
});

router.get('/signboards', function(req, res, next) {
    res.render('./pages/signboards', { title: 'Auth' });
});

router.get('/autobrand', function(req, res, next) {
    res.render('./pages/autobrand', { title: 'Auth' });
});

router.get('/placnposts', function(req, res, next) {
    res.render('./pages/placnposts', { title: 'Auth' });
});

router.get('/setups', function(req, res, next) {
    res.render('./pages/setups', { title: 'Auth' });
});

router.get('/banners', function(req, res, next) {
    res.render('./pages/banners', { title: 'Auth' });
});

router.get('/presswall', function(req, res, next) {
    res.render('./pages/presswall', { k: 'Auth' });
});

router.get('/navs', function(req, res, next) {
    res.render('./pages/navs', { title: 'Auth' });
});

router.get('/serves', function(req, res, next) {
    res.render('./pages/serves', { title: 'Auth' });
});

router.get('/contacts', function(req, res, next) {
    res.render('./pages/contact', { title: 'Auth' });
});

router.get('/infstands', function(req, res, next) {
    res.render('./pages/infstands', { title: 'Auth' });
});

router.get('/nolight', function(req, res, next) {
    res.render('./pages/nolight', { title: 'Auth' });
});

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