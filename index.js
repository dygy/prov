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
const calcRouter = require('./routes/calc');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/font', fontRouter);
app.use('/calc', calcRouter);
app.post('/order', function(req, res, next) {
    sendEmail(req.body);
    console.log(JSON.stringify(req.body));
});
server.listen(process.env.PORT || 3000,'0.0.0.0', () => console.log('Example app listening on port 3000!'));
