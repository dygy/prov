const sendEmail = require('./mail');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const express = require('express');
const path = require("path");
const app = express();
const http = require('http');
const server = http.createServer(app);
const indexRouter = require('./routes/index');
const fontRouter = require('./routes/font');
const vivRouter = require('./routes/viv');
const calcRouter = require('./routes/calc');
const lightRouter = require('./routes/light');
const tableRouter = require('./routes/table');
const navRouter = require('./routes/nav');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({ extended: false, limit:'50mb'}));
app.use(cookieParser());
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/viv', vivRouter);
app.use('/font', fontRouter);
app.use('/calc', calcRouter);
app.use('/lights', lightRouter);
app.use('/tables', tableRouter);
app.use('/nav', navRouter);

app.post('/feedback', function(req, res, next) {
    sendEmail(req.body);
    console.log(JSON.stringify(req.body));
});

app.post('/order', function(req, res, next) {
    sendEmail(req.body);
    console.log(JSON.stringify(req.body));
});
server.listen(process.env.PORT || 3000,'0.0.0.0', () => console.log('Example app listening on port 3000!'));
