const express = require('express');
const app = express();
/*apply middleware*/
app.use( (req, res) => {
    const path = req.path;
    if (path === '/') {
        res.send(`
            <html>
                <head><title>Home</title></head>
                <body>
                    <h1>Welcome to the Home Page</h1>
                    <p>This is a simple Node.js server.</p>
                </body>
            </html>
            `);
    } else if (path === '/about') {
        res.send(`About us: at CADT, we love express.js`);
    } else if (path === '/contact-us') {
        res.send(`You can reach us via email`);
    } else if (path === '/products') {
        res.send(`Buy one get one...`);
    } else if (path === '/projects') {
        res.send(`Here are our awesome projects`);
    } else {
        res.status(404).send(`Page Not Found`);
    }
});

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});

// const express = require('express');
// const app = express();
// console.log(`Recieved ${method} reqest from ${url}`);

// app.get('/', (req, res)=>{
    
// });

// app.use((req, res)=>{
//     switch (req.url){
//         case '/':
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             return res.end(
//                 `<html>
//                     <head><title>Home</title></head>
//                     <body>
//                         <h1>Welcome to the Home Page</h1>
//                         <p>This is a simple Node.js server.</p>
//                     </body>
//                 </html>`
//             );
//         case '/about':
//             res.writeHead(200, {'Content-Type': 'text/plain'});
//             res.end('About us: at CDATASection, we love Node.js!');
//             break;
//         case '/contact-us':
//                 res.writeHead(200, {'Content-Type': 'Text/plain'});
//                 res.end ('You can reach us via email!');
//             break;
//         case '/products':
//             res.writeHead(200, {'Content-Type': 'text/plain'});
//             res.end('Buy one get one');
//             break;
//         case '/projects':
//             res.writeHead(200, {'Content-Type': 'text/plain'});
//             res.end('Here are our awesome projects');
//             break;
//         default:
//             res.writeHead(404, {'Content-Type': 'text/plain'});
//             res.end('Page not found');
//     }

// });
// app.listen(3000, ()=>{
//     console.log('Server is running on port 3000');
// });