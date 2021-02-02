//bll
const express = require('express');
const router = express.Router();
let {getUsers, getUser, addUser, updateUser, deleteUser} = require('./repository');

router.get('/', async (req, res) => {
    let users = await getUsers(req.query.search);
    res.send(users);
});

router.get('/:id', async (req, res) => {
    let userId = req.params.id;
    let user = await getUser(userId);

    if(user) {
        res.send(user);
    } else {
        res.send(404);
    }
});

router.post('/', async (req, res) => {
    let name = req.body.name;
    await addUser(name);
    res.send({success: true});
});

router.put('/', async (req, res) => {
    let name = req.body.name;
    let id = req.body.id;
    await updateUser(id, name);
    res.send({success: true});
});

router.delete('/:id', async (req, res) => {
    let userId = req.params.id;
    await deleteUser(userId);
    res.send(204);
});

module.exports = router;