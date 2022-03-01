const http = require("http");
http.createServer((req, res) => {
    console.log(JSON.stringify(req));
    res.end(req.headers.host);
}).listen(process.env.PORT || 5000);
