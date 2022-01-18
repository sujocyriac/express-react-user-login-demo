const express = require('express');
const auth = require('basic-auth');
const md5 = require('md5');
const cors = require('cors');
const { isEmpty } = require('lodash');
const db = require('./db');

const PORT = process.env.PORT || 3001;

const app = express();

const dbInstance = new db();
let responseData = {};

function checkLogin(authorization) {
    const { name = '', pass = '' } = auth.parse(authorization) || {};
    responseData = dbInstance.match(name, md5(pass));
    return !isEmpty(responseData) ? responseData : false;
}

app.use(cors());

// default route for showing errors when user not specifies the path
app.get('/', (request, response) => {
    response.statusCode = 404;
    response.json({
        error: 'URL found!',
    });
});

// default route for showing errors when user not specifies the path
app.get('/login', (request, response) => {
    const { headers: { authorization = '' } = {} } = request;
    responseData = checkLogin(authorization);
    if (responseData) response.json(responseData);
    else response.status(401).json({ error: 'incorrect username or password' });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
