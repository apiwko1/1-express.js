const path = require('path');

const express = require('express');
const app = express();

const hbs = require('express-handlebars');
const req = require('express/lib/request');

app.use(express.static('public'));
app.engine('hbs', hbs.engine({
    defaultLayout: 'main', 
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './views'));

const User = require('./app/models/User');
const user = require('./app/controllers/user.controller');

app.get('/', (req, res)=>{
    user.list((err, users)=>{
        console.log(users);
        res.render( 'home', {users});
    })
    
});

app.listen(8080, () => {
    console.log('serwer działa po zmianie2');
})