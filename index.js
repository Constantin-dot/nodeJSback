//ui
const express = require('express');
const app = express();
const users = require('./usersRouter');
const cors = require('cors');

app.use(cors());

app.use('/users', users);

app.use( (req, res) => {
    res.send(404)
})

app.get('/tasks', async (req, res) => {
    res.send('TASKS');
});

app.listen(7542, function () {
    console.log('Example app listening on port 7542!');
});