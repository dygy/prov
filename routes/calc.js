const express = require('express');
const router = express.Router();

/* GET
           when 0
                include ./calcs/stands
            when 1
                include ./calcs/tables
            when 2
                include ./calcs/shtends
            when 3
                include ./calcs/symbs
            when 4
                include ./calcs/light
            when 5
                include ./calcs/kron
            when 6
                include ./calcs/banners
            when 7
                include ./calcs/mobstands
            when 8
                include ./calcs/plac'n'posts
            when 9
                include ./calcs/autobrand
*/
router.get('/korob', function(req, res, next) {
    res.render('./calculator', {
        title: ' КАЛЬКУЛЯТОР СВЕТОВЫЕ КОРОБА',
        id:10,
        path: " СВЕТОВЫЕ КОРОБА ",
        href: '/light',
    });
});

router.get('/stand', function(req, res, next) {
    res.render('./calculator', {
        title: ' КАЛЬКУЛЯТОР ИНФО-CТЕНДЫ',
        id:0,
        path: " ИНФО-CТЕНДЫ ",
        href: '/infstands',

    });
});
router.get('/tables', function(req, res, next) {
    res.render('./calculator', {
        title: ' КАЛЬКУЛЯТОР ТАБЛИЧКИ',
        id:1,
        path: " ТАБЛИЧКИ ",
        href: '/tables',
    });
});
router.get('/shtends', function(req, res, next) {
    res.render('./calculator', {
        path: " ШТЕНДЕРЫ ",
        href: '/shtender',
        title: "КАЛЬКУЛЯТОР ШТЕНДЕРЫ",
        id:2});
});
router.get('/symbs', function(req, res, next) {
    res.render('./calculator', {
        path: " БУКВЫ ",
        href: '/fonts',
        title: ' КАЛЬКУЛЯТОР БУКВЫ'
        ,id:3});
});
router.get('/light', function(req, res, next) {
    res.render('./calculator', {
        path: " СВЕТОВЫЕ ПАНЕЛИ ",
        href: '/lightpan',
        title: ' КАЛЬКУЛЯТОР СВЕТОВЫЕ ПАНЕЛИ',
        id:4});
});
router.get('/kron', function(req, res, next) {
    res.render('./calculator', {
        path: " ПАНЕЛЬ-КРОНШТЕЙН ",
        href: '/kron',
        title: 'КАЛЬКУЛЯТОР ПАНЕЛЬ-КРОНШТЕЙН',
        id:5
    });
});
router.get('/banners', function(req, res, next) {
    res.render('./calculator', {
        path: " БАННЕРЫ ",
        href: '/banners',
        title: ' КАЛЬКУЛЯТОР БАННЕРЫ',
        id:6});
});
router.get('/mobstands', function(req, res, next) {
    res.render('./calculator', {
        path: "  ROLL-UP",
        href: '/mobstand',
        title: ' КАЛЬКУЛЯТОР ROLL-UP',
        id:7});
});
router.get('/plac\'n\'posts', function(req, res, next) {
    res.render('./calculator', {
        path: " ПЛАКАТЫ / ПОСТЕРЫ ",
        href: '/placnposts',
        title: 'КАЛЬКУЛЯТОР ПЛАКАТЫ / ПОСТЕРЫ',
        id:8});
});
router.get('/autobrand', function(req, res, next) {
    res.render('./calculator', {
        path: " АВТОБРЕНДИРОВАНИЕ ",
        href: '/autobrand',
        title: ' КАЛЬКУЛЯТОР АВТОБРЕНДИРОВАНИЕ',
        id:9});
});
module.exports = router;