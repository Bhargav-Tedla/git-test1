var http = require('http');
http.createServer(function (req, res) {
    res.write('docker file test12');
    res.end()
}).listen(8000);