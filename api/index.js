const express = require('express');
const auth = require('basic-auth');
const md5 = require('md5');
const cors = require('cors');
const { isEmpty, get } = require('lodash');
const jwt = require('jsonwebtoken');
const db = require('./db');

const PORT = process.env.PORT || 3001;

const app = express();

const dbInstance = new db();
let responseData = {};
let refreshTokens = [];

function checkLogin(username, password) {
    responseData = dbInstance.match(username, md5(password));
    return !isEmpty(responseData) ? responseData.uid : false;
}

function generateAccessToken(user, expiresIn = '10m') {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn });
}

function getToken(request) {
    const { headers: { authorization = '' } = {} } = request;
    return get(authorization.split(' '), [1], '');
}

app.use(cors());
app.use(express.json());

function authenticateToken(request, response, next) {
    const token = getToken(request);
    if (token == null) return response.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
        if (error) return response.sendStatus(403);
        next();
    });
}

// default route for showing errors when user not specifies the path
app.get('/', (request, response) => {
    response.statusCode = 404;
    response.json({
        error: 'URL found!',
    });
});

//when user gives correct credentials login and create access and refresh tokens
app.post('/login', (request, response) => {
    const { headers: { authorization = '' } = {} } = request;
    const { name = '', pass = '' } = auth.parse(authorization) || {};
    userId = checkLogin(name, pass);
    if (userId) {
        const user = { name };
        const accessToken = generateAccessToken(user);
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
        refreshTokens.push(refreshToken);
        response.json({ accessToken: accessToken, refreshToken: refreshToken, userId });
    } else response.status(401).json({ error: 'Invalid Credentials' });
});

// default route for showing errors when user not specifies the path
app.get('/user/:id', authenticateToken, (request, response) => {
    response.json(dbInstance.data.filter(({ uid }) => uid == request.params.id));
});

app.get('/isLoggedIn', authenticateToken, (request, response) => {
    response.json({ login: true });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
