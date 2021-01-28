//bll
const express = require('express');
const router = express.Router();
let {getUsers, addUser} = require('./repository');

router.get('/', async (req, res) => {
    let users = await getUsers();
    res.send(users);
});

router.get('/:id', async (req, res) => {
    let userId = req.params.id;
    let users = await getUsers();
    let user = users.find(u => u.id === userId)
    if(user) {
        res.send(user);
    } else {
        res.send(404);
    }
});

router.post('/', async (req, res) => {
    let result = await addUser('3', 'Vlad');
    res.send({success: true});
});

module.exports = router;