const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/akmet', function(req, res, next) {
    res.render('./pages/fontinfo', {
        title: 'ОБЪЕМНЫЙ БУКВЫ ИЗ АКРИЛА И ПВХ' ,
        calcURL:"../calc/symb",
        imgURL:'../img/fonttitle/1.png' ,
        ul:["Срок службы — до 5 лет",
            "Яркость — средняя",
            "Оптимальная высота буквы — до 100 см",
            "Максимальная высота буквы — 3м",
            "Минимальная высота — 5см",
            "Минимальная толщина ножки буквы — 15мм",
            "Глубина буквы — 50-150 мм"
        ],
        inside1:`Более дорогостоящий и презентабельный вид, чем буквы c корпусом из пластика или ALS. На лицевой части 
        буквы часто необходим не световой кант от 5мм по периметру, поэтому не удобен для
        сложных элементов с лицевой подсветкой. Нержавеющая сталь может быть серебристой, золотистой, 
        глянцевой как зеркало, матовой или шлифованной.`,
        inside2:`Нержавеющая сталь толщиной 0.3-2мм вырезается на лазере, лицевая и боковая части свариваются точечной сваркой. 
        Светорассеивающий акрил устанавливается изнутри на кантик 5-10мм из нержавеющей стали на лицевой стороне. 
        Задняя часть со светодиодами устанавливается на саморезы.`
    });
});
router.get('/ak', function(req, res, next) {
    res.render('./pages/fontinfo', {
        title: 'ОБЪЕМНЫЙ БУКВЫ ИЗ АКРИЛА' ,
        calcURL:"../calc/symb",
        imgURL:'../img/fonttitle/2.png' ,
        ul:["Срок службы — до 10 лет",
            "Яркость — высокая",
            "Оптимальная высота буквы — до 100 см",
            "Максимальная высота буквы — 3м",
            "Минимальная высота — 5см",
            "Минимальная толщина ножки буквы — 15мм",
            "Глубина буквы — 50-150 мм"
        ],
        inside1:`Наиболее популярный вид объемных букв, поскольку сочетает в себе опрятный вид и соотношение
цена/качество. Возможно изготовление очень мелких элементов и сложных логотипов. `,
        inside2:`Лицевая часть фрезеруется из Акрила и склеивается с боковой частью. Внутрь объемной буквы устанавливаются светодиоды для подсветки. Светорассеивающий Акрил может быть цветным, либо
белого цвета с оклейкой цветной светорассеивающей пленкой Oracal 8500. Акрил не боится воды
и УФ-излучения. Не смотря на то, что корпус склеен, её можно разбирать и обслуживать. `
    });
});
router.get('/akpvk', function(req, res, next) {
    res.render('./pages/fontinfo', {
        title: 'ОБЪЕМНЫЙ БУКВЫ ИЗ АКРИЛА И ПВХ С КОНТРАЖУРОМ' ,
        imgURL:'../img/fonttitle/3.png' ,
        calcURL:"../calc/symb",
        ul:["Срок службы — до 5 лет",
            "Яркость —  средняя",
            "Оптимальная высота буквы — до 100 см",
            "Максимальная высота буквы — 3м",
            "Минимальная высота — 5см",
            "Минимальная толщина ножки буквы — 15мм",
            "Глубина буквы — 50-150 мм"
        ],
        inside1:`Лицевая часть не светится, но свет изнутри буквы падает на подложку и подсвечивает букву сзади.
Подложка буквы должна быть ровной, иначе подсветка может падать не равномерно.`,
        inside2:`Лицевая часть фрезеруется из Акрила и склеивается с боковой частью из ПВХ. Внутрь объемной
буквы устанавливаются светодиоды для подсветки. У буквы нет задней части — светодиоды располагаются на обратной стороне лицевой стороны. Обслуживать не удобно, зато существенно дешевле в изготовлении.`
    });
});
router.get('/metk', function(req, res, next) {
    res.render('./pages/fontinfo', {
        title: 'ОБЪЕМНЫЙ БУКВЫ ИЗ МЕТАЛЛА С КОНТРАЖУРОМ' ,
        calcURL:"../calc/symb",
        imgURL:'../img/fonttitle/4.png' ,
        ul:["Срок службы — до 10 лет",
            "Яркость —  средняя",
            "Оптимальная высота буквы — до 100 см",
            "Максимальная высота буквы — 2м",
            "Минимальная высота — 5см",
            "Минимальная толщина ножки буквы — 15мм",
            "Глубина буквы — 50-150 мм"
        ],
        inside1:`Более дпрезентабельный вид, чем буквы c корпусом из пластика. Лицевая часть не светится, но
свет изнутри буквы падает на подложку и подсвечивает букву сзади. Нержавеющая сталь может
быть серебристой или золотистой, глянцевой как зеркало, матовой или шлифованной.`,
        inside2:`Нержавеющая сталь толщиной 0.3-2мм вырезается на лазере, после чего лицевая и боковая части
свариваются методом точечной сварки. Задняя часть из прозрачного акрила устанавливается на
специальные «усики» из нержавеющей стали. Буква отступает от подложки на 10-30мм благодаря
дистанционным держателям. Свет изнутри буквы падает на подложку.`
    });
});
router.get('/akpv', function(req, res, next) {
    res.render('./pages/fontinfo', {
        title: 'ОБЪЕМНЫЙ БУКВЫ ИЗ АКРИЛА И ПВХ' ,
        calcURL:"../calc/symb",
        imgURL:'../img/fonttitle/5.png' ,
        ul:["Срок службы — до 5 лет",
            "Яркость —  средняя",
            "Оптимальная высота буквы — до 100 см",
            "Максимальная высота буквы — 3м",
            "Минимальная высота — 5см",
            "Минимальная толщина ножки буквы — 15мм",
            "Глубина буквы — 50-150 мм"
        ],
        inside1:`Недорогой, но в то же время стильный вид букв из пластика. Лицевая часть не светится, но свет
изнутри буквы падает на подложку и подсвечивает букву  сзади. Подложка буквы должна быть
ровной, иначе подсветка может падать не равномерно.`,
        inside2:`Лицевая часть фрезеруется из ПВХ и склеивается с боковой частью из такого же ПВХ, который
        нагревается для того, чтобы его можно было согнуть по форме буквы. Внутрь объемной буквы устанавливаются светодиоды для подсветки. У буквы нет задней части — светодиоды располагаются на
        обратной стороне лицевой стороны. `
    });
});
router.get('/pvk', function(req, res, next) {
    res.render('./pages/fontinfo', {
        title: 'ОБЪЕМНЫЙ БУКВЫ ИЗ АКРИЛА И ПВХ' ,
        calcURL:"../calc/symb",
        imgURL:'../img/fonttitle/6.png' ,
        ul:["Срок службы — до 10 лет",
            "Яркость —  средняя",
            "Оптимальная высота буквы — до 100 см",
            "Максимальная высота буквы — 3м",
            "Минимальная высота — 5см",
            "Минимальная толщина ножки буквы — 15мм",
            "Глубина буквы — 50-150 мм"
        ],
        inside1:`Недорогой, но в то же время стильный вид букв из пластика. Лицевая часть не светится, но свет
        изнутри буквы падает на подложку и подсвечивает букву сзади. Подложка буквы должна быть
        ровной, иначе подсветка может падать не равномерно.`,
        inside2:`Лицевая часть фрезеруется из ПВХ и склеивается с боковой частью из такого же ПВХ, который
        нагревается для того, чтобы его можно было согнуть по форме буквы. Внутрь буквы устанавливаются светодиоды для подсветки. У буквы нет задней части — светодиоды располагаются на обратной стороне лицевой стороны.`
    });
});
router.get('/neon', function(req, res, next) {
    res.render('./pages/fontinfo', {
        title: 'ОБЪЕМНЫЙ БУКВЫ С ОТКРЫТЫМ НЕОНОМ' ,
        calcURL:"../calc/symb",
        imgURL:'../img/fonttitle/7.png' ,
        ul:["Срок службы — до 10 лет",
            "Яркость —  высокая",
            "Оптимальная высота буквы — до 100 см",
            "Максимальная высота буквы — 2м",
            "Минимальная высота — 5см",
            "Минимальная толщина ножки буквы — 15мм",
            "Глубина буквы — 50-150 мм"
        ],
        inside1:`Существует много вариантов цветов неоновых трубок, которые располагают к созданию неповторимого и запоминающегося образа вашего заведения. Трубки можно использовать как смостоятельную букву, а можно сделать основу из металла или ПВХ и уже внуть нее установить неоновые
        трубки. Однако использование неона должно быть крайне осторожным и ответственным. Для его
        изготовления используется ртуть, а для работы вывески нужно высоковольное напряжение.`,
        inside2:`Неоновые трубки устанавливаются на поверхность вывески. В качестве основы могут быть использованы: композитная панель, оргстекло, ПВХ, стена здания и пр. ровные поверхности. Трубки устанавливаются непосредственно на напечатанное изображение или буквы, повторяя их контур.
        Трубки никак не защищены от механического воздействия извне. В выключенном состоянии их
        практически не видно, поэтому крайне важно не отключать такую вывеску даже в дневное время.`
    });
});
router.get('/svetod', function(req, res, next) {
    res.render('./pages/fontinfo', {
        title: 'ОБЪЕМНЫЙ БУКВЫ С ОТКРЫТЫМИ СВЕТОДИОДАМИ' ,
        calcURL:"../calc/symb",
        imgURL:'../img/fonttitle/8.png' ,
        ul:["Срок службы — до 10 лет",
            "Яркость —  высокая",
            "Оптимальная высота буквы — до 100 см",
            "Максимальная высота буквы — 2м",
            "Минимальная высота — 5см",
            "Минимальная толщина ножки буквы — 15мм",
            "Глубина буквы — 50-150 мм"
        ],
        inside1:`Главное отличие конструкции от стандартных объемных букв заключается в том, что светодиодные
        кластеры размещаются не в нутрии буквы, а на ее лицевой поверхности. 
        Объемные буквы с открытыми светодиодами отлично подойдут для рекламы заведений развлекательного типа, таких как
        ночные клубы, кафе-бары, рестораны, и т.д. Возможно программирование различных режимов
        работы, которые придадут рекламной конструкции светодинамику: изменение цвета, постепенное
        нарастание или затухание и еще много различных световых эффектов.`,
        inside2:`Обычно тыльная часть и боковые стороны изготавливаются из ПВХ, которая затем оклеивается
        пленкой Oracal. Лицевая сторона отсутствует, а диоды размещаются внутри корпуса. 
        Дополнительно можно прикрепить блок управления, который будет управлять динамическими эффектами.
        Для перелива цветов устанавливают RGB-светодиоды.`
    });
});


module.exports = router;