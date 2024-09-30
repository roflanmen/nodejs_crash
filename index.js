const http = require("http");
http.createServer((req, res) => {
    reqs++;
    res.write("Hello World! You are visitor number " + reqs);
    res.end();
}).listen(process.env.PORT || 80);
var reqs = 0;
