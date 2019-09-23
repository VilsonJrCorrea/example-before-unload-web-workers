const bodyParser = require('body-parser')
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.text());
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    console.log(req.body);
})

app.listen(8080);