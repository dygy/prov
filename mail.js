const sendmail = require('sendmail')();
const FileReader = require('filereader');
module.exports = (content)=> {
    sendmail({
        from: 'no-reply@provyveski.ru',
        to: 'YukimuraAllen@yandex.ru', // list of receivers
        subject: 'New Order',
        html: `<h1> Details </h1> <p>${parseJSON(content)}</p> `,
        attachments:parseFiles(content)

    }, function (err, reply) {
        console.log(err && err.stack);
        console.dir(reply);
    });
};
function parseFiles(content) {
    const arr = []
    const reader = new FileReader()
    if(content.file) {
            arr.push({
                filename: content.fileName,
                content: content.file
            })
    }
    return arr;
}
function parseJSON(content) {
    let mail = '';
    if (content.nameO){
        mail+= `Имя:${content.nameO} <br>`
    }
    if (content.phoneO){
        mail+= `Телефон:${content.phoneO} <br>`
    }
    if (content.emailO){
        mail+= `Электронная почта:${content.email0} <br>`
    }
    if (content.name){
        mail+= `Имя:${content.name} <br>`
    }
    if (content.textO){
        mail+= `Текст заказа:${content.textO} <br>`
    }

    if (content.company){
        mail+= `Компания:${content.company} <br>`
    }
    if (content.phone){
        mail+= `Телефон:${content.phone} <br>`
    }
    if (content.email){
        mail+= `Электронная почта:${content.email} <br>`
    }
    if (content.comment){
        mail+= `Комментарий:${content.comment} <br>`
    }
    if (content.height){
        mail+= `Высота:${content.height} <br>`
    }
    if (content.also){
        mail+= `Доп:${content.also}<br>`
    }
    if (content.troev){
        mail+= `Торевой цвет:${content.troev} <br>`
    }
    if (content.contur){
        mail+= `Контурный цвет:${content.contur} <br>`
    }
    if (content.osob){
        mail+= `Особенности:${content.osob} <br>`
    }
    if (content.print){
        mail+= `Печать:${content.print} <br>`
    }
    if (content.sides){
        mail+= `сторон:${content.sides} <br>`
    }
    if (content.type){
        mail+= `тип:${content.type} <br>`
    }
    if (content.oblast1){
        mail+= `Область печати:${content.oblast1}x${content.oblast2} <br>`
    }
    if (content.plenka){
        mail+= `Пленка:${content.plenka} <br>`
    }
    if (content.lam){
        mail+= `Ламинация:${content.lam} <br>`
    }
    if (content.plot){
        mail+= `Плоттерная резка:${content.plot} <br>`
    }
    if (content.tirazh){
        mail+= `Тираж:${content.tirazh} <br>`
    }
    if (content.sizeX){
        mail+= `Размер :${content.sizeX}x${content.sizeY} <br>`
    }
    if (content.material){
        mail+= `Материал:${content.material} <br>`
    }
    if (content.resol){
        mail+= `Разрешение:${content.resol} <br>`
    }
    if (content.luversi){
        mail+= `Люверсы:${content.luversi} <br>`
    }
    if (content.form){
        mail+= `Форма:${content.form} <br>`
    }
    if (content.size){
        mail+= `Размер:${content.size} <br>`
    }
    if (content.plotB){
        mail+= `Плотность бумаги:${content.plotB} <br>`
    }
    if (content.typeB){
        mail+= `Тип бумаги:${content.typeB} <br>`
    }
    if (content.formI){
        mail+= `Форма изделия:${content.formI} <br>`
    }
    if (content.cell){
        mail+= `цепочка:${content.cell} <br>`
    }
    if (content.image){
        mail+= `изобажение:${content.image} <br>`
    }
    if (content.probk){
        mail+= `пробковая панель:${content.probk} <br>`
    }
    if (content.magnit){
        mail+= `Магнит:${content.magnit} <br>`
    }
    if (content.karm){
        mail+= `Количество карманов:${content.karm} <br>`
    }
    if (content.text){
        mail+= `текст:${content.text} <br>`
    }
    if (content.font){
        mail+= `шрифт:${content.font} <br>`
    }
    if (content.color){
        mail+= `цвет:${content.color} <br>`
    }
    if (content.url){
        mail+= `С ссылки:${content.url} <br>`
    }
    return mail
}