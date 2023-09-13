const express = require('express');
const path = require('path');

const mainRoute = require('./routes/main');
const orderRoute = require('./routes/orders');
const profileRoute = require ('./routes/profiles');
const { connect } = require('./models');

const app = express();
const porta = 3000;

//configure ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use('/order', orderRoute);
app.use('/profile', profileRoute);
app.use('/', mainRoute);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(porta, ()=> {
        connect();
        console.log('Server up');

});
