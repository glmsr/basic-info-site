var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', function (err, data) {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end;
        })
    }
    else if (req.url === '/about-me') {
        fs.readFile('about.html', function (err, data) {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end;
        });
    }
    else if (req.url === '/contact-me') {
        fs.readFile('contact.html', function (err, data) {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end;
        })
    }
    else {
        fs.readFile('404.html', function (err, data) {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end;
        });
    }
}).listen(3000, () => {
    console.log("Running on port 3000...")
});