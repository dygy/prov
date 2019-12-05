const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/zones', function(req, res, next) {
    res.render('./pages/zones', { title: 'Фотозоны' });
});

router.get('/stands', function(req, res, next) {
    res.render('./pages/stands', { title: 'Стенды' });
});

router.get('/pilon', function(req, res, next) {
    res.render('./pages/pilon', { title: 'Инфо-Пилоны' });
});
router.get('/viv', function(req, res, next) {
    res.render('./pages/viv', { title: 'Вывеск' });
});
router.get('/test', function(req, res, next) {
    res.render('./index', { title: 'Тестовая страница' });
});
router.get('/inputgroup', function(req, res, next) {
    res.render('./pages/inputgroup', { title: 'Входные группы' });
});

router.get('/stickers', function(req, res, next) {
    res.render('./pages/stickers', { title: 'Наклейки' });
});

router.get('/signboards', function(req, res, next) {
    res.render('./pages/signboards', { title: 'Интерьерные Вывески' });
});

router.get('/autobrand', function(req, res, next) {
    res.render('./pages/autobrand', { title: 'Автобрендирование' });
});

router.get('/placnposts', function(req, res, next) {
    res.render('./pages/placnposts', { title: 'Плакаты и постеры' });
});

router.get('/setups', function(req, res, next) {
    res.render('./pages/setups', { title: 'Крышные Установки' });
});

router.get('/banners', function(req, res, next) {
    res.render('./pages/banners', { title: 'Баннеры' });
});

router.get('/presswall', function(req, res, next) {
    res.render('./pages/presswall', { k: 'Пресс-воллы' });
});

router.get('/navs', function(req, res, next) {
    res.render('./pages/navs', { title: 'Навигаторы' });
});

router.get('/serves', function(req, res, next) {
    res.render('./pages/serves', { title: 'Услуги' });
});

router.get('/contacts', function(req, res, next) {
    res.render('./pages/contact', { title: 'Контакты' });
});

router.get('/infstands', function(req, res, next) {
    res.render('./pages/infstands', { title: 'Инфо-стенды' });
});

router.get('/nolight', function(req, res, next) {
    res.render('./pages/nolight', { title: 'Не световые вывески' });
});

router.get('/tables', function(req, res, next) {
    res.render('./pages/tables', { title: 'Таблички' });
});

router.get('/shtender', function(req, res, next) {
    res.render('./pages/shtender', { title: 'Штендеры' });
});

router.get('/lightpan', function(req, res, next) {
    res.render('./pages/lightpan', { title: 'Световые панели' });
});

router.get('/mobstand', function(req, res, next) {
    res.render('./pages/mobstand', { title: 'Мобильниые стенды' });
});
router.get('/kron', function(req, res, next) {
    res.render('./pages/kron', { title: 'Панель-кронштейн' });
});

router.get('/light', function(req, res, next) {
    res.render('./pages/light', { title: 'Световые короба' });
});
router.get('/fonts', function(req, res, next) {
    res.render('./pages/fonts', { title: 'Светящиеся буквы' });
});
router.get('/', function(req, res, next) {
    res.render('./pages/main', { title: 'PRO вывески'});
});
module.exports = router;