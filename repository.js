//dal
const mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    name: String
});
let User = mongoose.model('User', userSchema);



const getUsers = (search) => {
    if(!search) {
        return User.find();
    } else {
        return User.find({ name: new RegExp(search)});
    }

}

const getUser = (id) => {
    return User.find({_id: id});
}

const addUser = async (name) => {
    let user = new User({name});
    return user.save();
}

const updateUser = async (id, name) => {
    return User.update({_id: id}, {name: name});
}

const deleteUser = (id) => {
    return User.deleteOne({_id: id})
}

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.deleteUser = deleteUser;
exports.getUser = getUser;
exports.updateUser = updateUser;