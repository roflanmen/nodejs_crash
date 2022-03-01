const http = require("http");
http.createServer((req, res) => {
    console.log(JSON.stringify(req.headers["x-forwarded-for"]));
    res.end();
}).listen(process.env.PORT || 5000);
