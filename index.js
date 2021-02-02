//ui
const express = require('express');
const app = express();
const users = require('./usersRouter');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    //we're connected!
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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