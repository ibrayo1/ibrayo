require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());

// body parser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// connect to mongo
mongoose
    .connect(process.env.db,  { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// bring in routes
app.use('/', require('./routes/index'));
app.use('/api/projects', require('./routes/api/projects'));

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
})