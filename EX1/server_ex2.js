// server.js
const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Welcome to the Home Page');
});

app.get('/contact', (req, res) => {
    res.type('html');
    res.send(`
        <form method="POST" action="/contact">
            <input type="text" name="name" placeholder="Your name" />
            <button type="submit">Submit</button>
        </form>
    `);
}
);
app.post('/contact', (req, res) => {
    const name = req.body.name;
    const submission = `Name: ${name}\n`;
    fs.appendFile('submissions.txt', submission, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send(`Thank you for your submission, ${name}!`);
        }
    });
});
app.use((req, res) => {
    res.status(404).type('text/plain');
    res.send('404 Not Found');
});
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
// const http = reuire('http');



/*const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);

    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('Welcome to the Home Page');
    }

    if (url === '/contact' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
          <form method="POST" action="/contact">
            <input type="text" name="name" placeholder="Your name" />
            <button type="submit">Submit</button>
          </form>
        `);
        return;
    }

    if (url === '/contact' && method === 'POST') {
        // Implement form submission handling
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
*/