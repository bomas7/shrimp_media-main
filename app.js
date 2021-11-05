const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const app = express();

//middleware
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.static('./public'));

app.use(session({
    secret: 'thisiasecret',
    resave: true,
    saveUninitialized: true,
}));

app.use(express.static(__dirname + '/public/'));
//routes
app.get('/', (req, res) => {
    res.render('index', {title: 'Shrimp Media'});
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About Us'});
})

 PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('Server started on', PORT));
