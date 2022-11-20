let express = require('express');
let bodyparser = require('body-parser');
let app = express();
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', './views');

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

module.exports = app;
