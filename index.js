const path = require("path");
const fs = require("fs");
const os = require("os");
const url = require("url");
const http = require("http");

http.createServer((req, res) => {
    res.write("111");
    res.end();
}).listen(5000);
