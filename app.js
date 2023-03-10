const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/secrets', (req, res) => {
    res.render('secrets');
});







app.listen(7000, () => {
    console.log('listening on port 7000');
});
