const express = require('express');
const app = express();

app.use('./ps3/index.js');

app.get('/', (req, res) => {
    app.sendStatus(200);
    app.send({ "message": "Hi BU Student!" });
})

app.listen(3000);