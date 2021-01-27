//ui
let {usersController} = require('./usersController');
let http = require('http');

process.on('unhandledRejection', function (reason, p) {
    console.log(reason, p);
})

let cors = (res, req) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if(req.method === 'OPTIONS'){
        res.writeHead(200);
        res.end();
        return true;
    }
    return false;
}

const server = http.createServer( (req, res) => {

    if(cors(res, req)) return;

    switch(req.url) {
        case '/users':
            usersController(req, res);
            break;
        case '/lessons':
            res.write('tasks');
            break;
        default:
            res.write('Page not found')
    }
});

server.listen(7542);
