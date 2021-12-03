const http = require("http");
http.createServer((req, res) => {
    res.end("pososi");
}).listen(process.env.PORT);
