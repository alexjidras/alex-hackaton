require('dotenv').config();
const express = require('express');
const { handler: getMessages } = require('./netlify/functions/getMessages');
const { handler: sendMessage } = require('./netlify/functions/sendMessage');
const { handler: removeMessages } = require('./netlify/functions/removeMessages');

const PORT = 8888;
const app = express();

const authMiddleware = (req, res, next) => {
    const username = req.headers['x-username'];

    if (!username) {
        return res.status(401).json({ message: 'You are not logged in'})
    }
    
    req.username = username;
    next();
}

app.use(express.json());
app.use(authMiddleware);

app.get('/getMessages', getMessages);
app.post('/sendMessage',  sendMessage);
app.delete('/removeMessages', removeMessages);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

