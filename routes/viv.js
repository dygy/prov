const express = require('express');
const router = express.Router();

router.get('/woodF', function(req, res, next) {
    res.render('./pages/sellInfo', {
        title: 'ОБЪЕМНЫЙ БУКВЫ ИЗ ДЕРЕВА' ,
        path: " ИНТЕРЬЕРНЫЕ ВЫВЕСКИ ",
        href: '/signboards',
        price: "от 125 руб/см",
        calcURL:"/calc/symbs",
        imgURL:['/img/fonttitle/akmet1.png','/img/fonttitle/akmet2.png','/img/fonttitle/akmet3.png' ],
        ul:["Срок службы — более 10 лет",
            "Оптимальная высота буквы — до 100 см",
            "Максимальная высота буквы — 2 м",
            "Минимальная высота — 10 см",
            "Минимальная толщина ножки буквы — 20 мм",
            "Глубина буквы — 50-150 мм"
        ],
    });
});
router.get('/neon', function(req, res, next) {
    res.render('./pages/sellInfo', {
        title: 'ОБЪЕМНЫЙ БУКВЫ ИЗ НЕОНА' ,
        path: " ИНТЕРЬЕРНЫЕ ВЫВЕСКИ ",
        href: '/signboards',
        price: "от 135 руб/см",
        calcURL:"/calc/symbs",
        imgURL:['/img/fonttitle/akmet1.png','/img/fonttitle/akmet2.png','/img/fonttitle/akmet3.png' ],
        ul:["Срок службы — до 10 лет",
            "Яркость — высокая",
            "Оптимальная высота буквы — до 100 см",
            "Максимальная высота буквы — 3 м",
            "Минимальная высота — 5 см",
            "Минимальная толщина ножки буквы — 15 мм",
            "Глубина буквы — 50-150 мм"
        ],
    });
});
router.get('/met', function(req, res, next) {
    res.render('./pages/sellInfo', {
        title: 'ОБЪЕМНЫЙ БУКВЫ ИЗ МЕТАЛЛА' ,
        path: " ИНТЕРЬЕРНЫЕ ВЫВЕСКИ ",
        href: '/signboards',
        price: "от 100 руб/см",
        calcURL:"/calc/symbs",
        imgURL:['/img/fonttitle/akmet1.png','/img/fonttitle/akmet2.png','/img/fonttitle/akmet3.png' ],
        ul:["Срок службы — до 10 лет",
            "Оптимальная высота буквы — до 100 см",
            "Максимальная высота буквы — 3 м",
            "Минимальная высота — 5 см",
            "Минимальная толщина ножки буквы — 15 мм",
            "Глубина буквы — 50-150 мм",
            "Нержавеющая сталь может быть серебристой или золотистой, глянцевой как зеркало, матовой или шлифованной."
        ],
    });
});
router.get('/pen', function(req, res, next) {
    res.render('./pages/sellInfo', {
        title: 'ОБЪЕМНЫЙ БУКВЫ ИЗ ПЕНОПЛАСТА' ,
        path: " ИНТЕРЬЕРНЫЕ ВЫВЕСКИ ",
        href: '/signboards',
        price: "от 80 руб/см",
        calcURL:"/calc/symbs",
        imgURL:['/img/fonttitle/akmet1.png','/img/fonttitle/akmet2.png','/img/fonttitle/akmet3.png' ],
        ul:["Срок службы — до 1 года",
            "Оптимальная высота буквы — до 100 см",
            "Максимальная высота буквы — 2 м",
            "Минимальная высота — 5 см",
            "Минимальная толщина ножки буквы — 15 мм",
            "Глубина буквы — 50-150 мм"
        ],
    });
});
router.get('/pv', function(req, res, next) {
    res.render('./pages/sellInfo', {
        title: 'ВЫВЕСКИ ИЗ ПВХ' ,
        path: " ИНТЕРЬЕРНЫЕ ВЫВЕСКИ ",
        href: '/signboards',
        calcURL:"/calc/symbs",
        imgURL:['/img/fonttitle/akmet1.png','/img/fonttitle/akmet2.png','/img/fonttitle/akmet3.png' ],
        ul:["Срок службы — до 5 года",
            "Яркость — средняя",
            "Оптимальная высота буквы — до 100 см",
            "Максимальная высота буквы — 2 м",
            "Минимальная высота — 5 см",
            "Минимальная толщина ножки буквы — 15 мм",
            "Глубина буквы — 50-150 мм",
            "Стойкость к низким температурам, водостойкость"
        ],
    });
});
router.get('/aklight', function(req, res, next) {
    res.render('./pages/sellInfo', {
        title: 'АКРИЛАЙТ' ,
        path: " ИНТЕРЬЕРНЫЕ ВЫВЕСКИ ",
        href: '/signboards',
        price: "от 800 руб",
        calcURL:"/calc/symbs",
        imgURL:['/img/fonttitle/akmet1.png','/img/fonttitle/akmet2.png','/img/fonttitle/akmet3.png' ],
        p:"Изготовление акрилайтов – многоступенчатый про-цесс, требующий мастерства и опыта. Не каждая ре-кламная студия сможет создать «с нуля», а потом и ре-ализовать такой проект. Наша же компания обладает значительными производственными ресурсами и без помощи подрядчиков создаёт акрилайты любой слож-ности и масштаба. Мы гарантируем низкую стоимость наших услуг, безупречное качество и исполнение заказа в оговоренный договором срок. "
    });
});
router.get('/wood', function(req, res, next) {
    res.render('./pages/sellInfo', {
        title: 'ВЫВЕСКИ ИЗ ДЕРЕВА' ,
        path: " ИНТЕРЬЕРНЫЕ ВЫВЕСКИ ",
        href: '/signboards',
        price: "от 80 руб/см",
        calcURL:"/calc/symbs",
        imgURL:['/img/fonttitle/akmet1.png','/img/fonttitle/akmet2.png','/img/fonttitle/akmet3.png' ],
        p:"В эпоху изобилия синтетических материалов, нату-ральное дерево смотрится очень дорого и интерес-но. Вывески из дерева или фанеры привлекают вни-мание прохожих и вызывают восторг от увиденного. Деревянные конструкции чаще всего используют для украшения баров, кафе и ресторанов. Особая текстура этого материала создает ощущение уюта, именно по этой причине дерево используют для из-готовления фасадных и интерьерных вывесок.Нату-ральные материалы ассоциируются в сознании че-ловека с ручным трудом и высоким качеством. Поэ-тому если Вы желаете вызвать доверие клиентов за-казывайте именно деревянные вывески. "
    });
});
module.exports = router;