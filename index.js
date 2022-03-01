const http = require("http");
http.createServer((req, res) => {
    reqs++;
    if (reqs % 1000 == 0) {
        console.log(reqs);
    }
    res.end();
}).listen(process.env.PORT || 5000);
var reqs = 0;
