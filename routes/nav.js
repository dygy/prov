const express = require('express');
const router = express.Router();

router.get('/podUk', function(req, res, next) {
    res.render('./pages/sellInfo', {
        title:" ПОДВЕСНЫЕ УКАЗАТЕЛИ",
        path: " НАВИГАЦИОННЫЕ ТАБЛИЧКИ ",
        href: '/navs'
    })
});
router.get('/flUk', function(req, res, next) {
    res.render('./pages/sellInfo', {
        title:" ФЛАГОВЫЕ УКАЗАТЕЛИ",
        path: " НАВИГАЦИОННЫЕ ТАБЛИЧКИ ",
        href: '/navs'
    })
});
router.get('/flUk', function(req, res, next) {
    res.render('./pages/sellInfo', {
        title:" СТЕНДЫ СО СМЕННОЙ ИНФОРМАЦИЕЙ",
        path: " НАВИГАЦИОННЫЕ ТАБЛИЧКИ ",
        href: '/navs'
    })
});
router.get('/evac', function(req, res, next) {
    res.render('./pages/sellInfo', {
        title:" ЭВАКУАЦИОННЫЕ УКАЗАТЕЛИ",
        path: " НАВИГАЦИОННЫЕ ТАБЛИЧКИ ",
        href: '/navs'
    })
});
router.get('/stand', function(req, res, next) {
    res.render('./pages/sellInfo', {
        title:" СТЕНДЫ СО СМЕННОЙ ИНФОРМАЦИЕЙ",
        path: " НАВИГАЦИОННЫЕ ТАБЛИЧКИ ",
        href: '/navs'
    })
});

router.get('/stickers', function(req, res, next) {
    res.render('./pages/sellInfo', {
        title:" НАКЛЕЙКИ-СТЕНЫ/ПОЛ",
        path: " НАВИГАЦИОННЫЕ ТАБЛИЧКИ ",
        href: '/navs'
    })
});

router.get('/light', function(req, res, next) {
    res.render('./pages/sellInfo', {
        title:" СВЕТОВЫЕ ТАБЛИЧКИ",
        path: " НАВИГАЦИОННЫЕ ТАБЛИЧКИ ",
        href: '/navs'
    })
});

module.exports = router;