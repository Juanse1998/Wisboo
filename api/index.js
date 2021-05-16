const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const imagesRouter = require('./src/routes/images');


const server = express();
server.use(express.json());
server.use(bodyParser.json())


server.name = 'API';

server.use(cookieParser());
console.log('%s listening at 8000');


// server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
//     const status = err.status || 500;
//     const message = err.message || err;
//     console.error(err);
//     res.status(status).send(message);
// });

server.use(imagesRouter);
// server.use(categoryRouter);
// server.use(videoGamRouter);


server.listen(8000)

