const http = require("http");
http.createServer((req, res) => {
    console.log(req.headers.host);
    res.end(req.headers.host);
}).listen(process.env.PORT || 5000);
