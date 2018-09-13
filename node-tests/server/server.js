const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // res.send('hello express !');

    res.status(404).send({
        error: 'page not found',
        name: 'Todo App v1.0'
    })

});

app.get('/users', (req, res) => {
    res.send([{
        name: 'Vinz',
        age: 37
    }, {
        name: 'Yoda',
        age: 1000
    }]);

})

app.listen(3000, () => {
    console.log('listen port 3000');
});

module.exports.app = app;