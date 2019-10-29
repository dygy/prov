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
router.get('/stand', function(req, res, next) {
    res.render('./calculator', { title: 'CТЕНДЫ',id:0});
});
router.get('/tables', function(req, res, next) {
    res.render('./calculator', { title: 'ТАБЛИЧКИ',id:1});
});
router.get('/shtends', function(req, res, next) {
    res.render('./calculator', { title: "ШТЕНДЕРЫ",id:2});
});
router.get('/symbs', function(req, res, next) {
    res.render('./calculator', { title: 'БУКВЫ',id:3});
});
router.get('/light', function(req, res, next) {
    res.render('./calculator', { title: 'СВЕТОВЫЕ ПАНЕЛИ',id:4});
});
router.get('/kron', function(req, res, next) {
    res.render('./calculator', { title: 'ПАНЕЛЬ-КРОНШТЕЙН',id:5});
});
router.get('/banners', function(req, res, next) {
    res.render('./calculator', { title: 'БАННЕРЫ',id:6});
});
router.get('/mobstands', function(req, res, next) {
    res.render('./calculator', { title: 'МОБИЛЬНЫЕ СТЕНДЫ',id:7});
});
router.get('/plac\'n\'posts', function(req, res, next) {
    res.render('./calculator', { title: 'ПЛАКАТЫ И ПОСТЕРЫ',id:8});
});
router.get('/autobrand', function(req, res, next) {
    res.render('./calculator', { title: 'АВТОБРЕНДИРОВАНИЕ',id:9});
});
module.exports = router;