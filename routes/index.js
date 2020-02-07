const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/portfolio', function(req, res, next) {
    res.render('./pages/portfolio', { title: ' Портфолио' });
});

router.get('/dost', function(req, res, next) {
    res.render('./serves/dost', { title: ' ДОСТАВКА' });
});

router.get('/sign', function(req, res, next) {
    res.render('./serves/sign', { title: ' РЕГЕСТРАЦИЯ ВЫВЕСКИ' });
});

router.get('/mont', function(req, res, next) {
    res.render('./serves/mont', { title: ' МОНТАЖ' });
});

router.get('/frez', function(req, res, next) {
    res.render('./serves/frez', { title: ' ФРЕЗЕРНАЯ РЕЗКА' });
});

router.get('/design', function(req, res, next) {
    res.render('./serves/design', { title: ' ДИЗАЙН' });
});

router.get('/vist', function(req, res, next) {
    res.render('./pages/vist', { title: ' Выставочные Стенды' });
});

router.get('/zones', function(req, res, next) {
    res.render('./pages/sellInfo', {
        title: ' Фотозоны',
        imgURL:['/img/zones/zone5.png','/img/zones/zone5.png','/img/zones/zone5.png'],

    });
});

router.get('/stands', function(req, res, next) {
    res.render('./pages/stands', { title: ' Стенды' });
});

router.get('/pilon', function(req, res, next) {
    res.render('./pages/pilon', { title: ' РЕКЛАМНЫЕ ПИЛОНЫ' });
});
router.get('/viv', function(req, res, next) {
    res.render('./pages/viv', { title: ' Вывески' });
});
router.get('/test', function(req, res, next) {
    res.render('./index', { title: ' Тестовая страница' });
});
router.get('/inputgroup', function(req, res, next) {
    res.render('./pages/sellInfo', { title: ' Входные группы' });
});

router.get('/stickers', function(req, res, next) {
    res.render('./pages/stickers', { title: ' Наклейки' });
});

router.get('/signboards', function(req, res, next) {
    res.render('./pages/signboards', { title: ' Интерьерные Вывески' });
});

router.get('/autobrand', function(req, res, next) {
    res.render('./pages/sellInfo', { title: ' Автобрендирование' });
});

router.get('/placnposts', function(req, res, next) {
    res.render('./pages/placnposts', { title: ' Плакаты и постеры' });
});

router.get('/setups', function(req, res, next) {
    res.render('./pages/setups', { title: ' Крышные Установки' });
});

router.get('/banners', function(req, res, next) {
    res.render('./pages/banners', { title: ' Баннеры' });
});

router.get('/presswall', function(req, res, next) {
    res.render('./pages/presswall', { title: ' Пресс-воллы' });
});

router.get('/navs', function(req, res, next) {
    res.render('./pages/navs', { title: ' НАВИГАЦИОННЫЕ ТАБЛИЧКИ' });
});

router.get('/serves', function(req, res, next) {
    res.render('./pages/serves', { title: ' Услуги' });
});

router.get('/contacts', function(req, res, next) {
    res.render('./pages/contact', { title: ' Контакты' });
});

router.get('/infstands', function(req, res, next) {
    res.render('./pages/infstands', { title: ' Инфо-стенды' });
});

router.get('/nolight', function(req, res, next) {
    res.render('./pages/nolight', { title: ' Несветовые вывески' });
});

router.get('/tables', function(req, res, next) {
    res.render('./pages/tables', { title: ' Таблички' });
});

router.get('/shtender', function(req, res, next) {
    res.render('./pages/sellInfo', { title: ' Штендеры', calcURL:"/calc/shtends" });
});

router.get('/lightpan', function(req, res, next) {
    res.render('./pages/lightpan', { title: ' Световые панели' });
});

router.get('/mobstand', function(req, res, next) {
    res.render('./pages/mobstand', { title: 'ROLL-UP' });
});
router.get('/kron', function(req, res, next) {
    res.render('./pages/kron', { title: ' Панель-кронштейн' });
});

router.get('/light', function(req, res, next) {
    res.render('./pages/light', { title: ' Световые короба' });
});
router.get('/fonts', function(req, res, next) {
    res.render('./pages/fonts', { title: ' Светящиеся буквы' });
});
router.get('/', function(req, res, next) {
    res.render('./pages/main', { title: ' PRO вывески'});
});
module.exports = router;