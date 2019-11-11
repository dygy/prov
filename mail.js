const sendmail = require('sendmail')();

sendmail({
    from: 'no-reply@provyveski.ru',
    to: 'YukimuraAllen@yandex.ru', // list of receivers
    subject: 'Order №3 ',
    html: '<h1> Details </h1> ',
}, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});