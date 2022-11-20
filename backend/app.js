let express = require('express');
let app = express();

let bodyparser = require('body-parser');
const session = require('express-session');

const api = require('./api');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(require("./middlewares/logger"));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use('/publics', express.static("./publics"));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.get( '/', (req, res) => {
    res.render('index');
})
app.use('/api', api);

module.exports = app;
