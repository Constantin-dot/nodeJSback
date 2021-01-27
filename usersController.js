//bll
let {getUsers, addUser} = require('./repository')

exports.usersController = async (req, res) => {
    if(req.method === "POST") {
        //action
        let result = await addUser('3', 'Vlad');
        res.write(JSON.stringify({success: true}));
        res.end();
    } else {
        //action
        let users = await getUsers();
        res.write(JSON.stringify(users));
        res.end();
    }
}
