const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const productosRouter = require('./routes/productosRouter');
const authRouter = require('./routes/authRouter');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-CodePush-Plugin-Version, X-CodePush-Plugin-Name, X-CodePush-SDK-Version, X-Request-Id',
    );
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,PATCH,DELETE,OPTIONS');
    next();
});

app.use('/health', (req, res) => {
    res.send('Ok');
});

app.use('/auth', authRouter);

app.use('/productos', productosRouter);

app.use((req, res, next) => {
    res.status(404).send(`${req.method} ${req.url} not found`);
});

app.use((err, req, res, next) => {
    if (err instanceof Error) {
        res.status(err.status).send(err.message);
        console.log(err);
    } else {
        res.status(500).send(err.message);
        console.log(err);
    }
});

module.exports = app;