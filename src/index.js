import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

import config from './config';

import order from './controller/order';


let app = express();
app.server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));

console.log(config.version);
let route = '/acme/api/'+config.version;
app.use(route, order({config}));

// app.post('/hello', function(req, res) {
//
//     console.log("hello variable: ", req.query.hello);
//     res.status(200).json({'recieved ': req.query.hello});
// });

app.server.listen(config.port);
console.log(`Started on port ${app.server.address().port}`);

export default app;
