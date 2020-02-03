const express = require('express');
const router = express.Router();

router.get('/tabUk', function(req, res, next) {
    res.render('./pages/sellInfo', {
        title:" ТАБЛИЧКИ УКАЗАТЕЛИ",
        path: "ТАБЛИЧКИ",
        href: '/tables',
        calcURL: "/calc/tables"
    })
});
router.get('/tabM', function(req, res, next) {
    res.render('./tabs/tabM', {
        calcURL: "/calc/tables",
        title:" МЕТАЛЛИЧЕСКИЕ ТАБЛИЧКИ",
        path: "ТАБЛИЧКИ",
        href: '/tables'
    })
});
router.get('/tabP', function(req, res, next) {
    res.render('./tabs/tabP', {
        calcURL: "/calc/tables",
        title:" ПЛАСТИКОВЫЕ ТАБЛИЧКИ",
        path: "ТАБЛИЧКИ",
        href: '/tables'
    })
});
router.get('/tabO', function(req, res, next) {
    res.render('./pages/sellInfo', {
        calcURL: "/calc/tables",
        title:" ТАБЛИЧКИ ИЗ ОРГ. СТЕКЛА",
        path: "ТАБЛИЧКИ",
        href: '/tables'
    })
});
router.get('/tabG', function(req, res, next) {
    res.render('./pages/sellInfo', {
        calcURL: "/calc/tables",
        title:" ТАБЛИЧКИ С ГРАВИРОВКОЙ",
        path: "ТАБЛИЧКИ",
        href: '/tables'
    })
});
router.get('/tabS', function(req, res, next) {
    res.render('./pages/sellInfo', {
        calcURL: "/calc/tables",
        title:" СМЕННЫЕ ТАБЛИЧКИ",
        path: "ТАБЛИЧКИ",
        href: '/tables'
    })
});
router.get('/tabU', function(req, res, next) {
    res.render('./pages/sellInfo', {
        calcURL: "/calc/tables",
        title:" ТАБЛИЧКИ УКАЗАТЕЛИ",
        path: "ТАБЛИЧКИ",
        href: '/tables'
    })
});
module.exports = router;