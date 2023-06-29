require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

app.get('/', (req, res) => {
    res.send('saher api');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Server Error!');
});

app.listen(port, () => {
    console.log('listen to port', port);
});