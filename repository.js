//dal
const {readJSONFromFile, writeJSONFromFile} = require('./fs-utils');

const getUsers = () => {
    return readJSONFromFile('users.json');
}

const addUser = async (id, name) => {
    let users = await getUsers();
    users.push({id: id, name: name});
    return writeJSONFromFile('users.json', users)
}

exports.getUsers = getUsers;
exports.addUser = addUser;