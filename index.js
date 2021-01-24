
let http = require('http');

const server = http.createServer( (req, res) => {
    console.log('some request');

    res.write('Hello world!');
    res.end();
});

server.listen(7542);
