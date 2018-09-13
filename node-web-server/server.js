const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

let app = express();

hbs.registerPartials(__dirname + '/views/partials') // permet d'afficher des extensions pour voir header et footer partout avec : "node server.js -e js,hbs"
app.set('view engine', 'hbs');

app.use((req, res, next) => { //next permet de dire quoi faire après avoir utiliser le middleware
    let now = new Date().toString();
    let log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => { //permet d'enregistrer ce que fait l'utilisateur
        if (err) {
            console.log('unable to append to server.log');
        }
    })
    next();
})

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });
// permet d'afficher une page de maintenance à la place de n'importe quelle page 

app.use(express.static(__dirname + "/public")); //si on tape 3000/help.html on voit la page

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
}) //permet d'envoyer getcurrentyear partout

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    // res.send('<h1>hello express !</h1>');
    // res.send({
    //     name: 'Vinz',
    //     likes: [
    //         'hockey',
    //         'food'
    //     ]
    // }) //res.send permet d'afficher du text ou du json

    res.render('home.hbs', {
        welcome: 'Welcome !',
        pageTitle: 'home page',
    })
});

app.get('/about', (req, res) => {
    // res.send('about page');
    res.render('about.hbs', {
        pageTitle: 'about page',
    }); // permet d'afficher la page hbs auquel on peux ajouter des paramètres qui seront accessible en html avec {{....}}
});


app.get('/bad', (req, res) => {
    res.send({
        errorMessage: ' unable to handle request'
    });
})

app.listen('3000', () => {
    console.log('server is up on port 3000');
}); //le port ecoute le port 3000