require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

app.use(cors());

// body parser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// connect to mongodb
mongoose
    .connect(process.env.db,  { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// bring in routes
app.use('/', require('./routes/api/index'));
app.use('/api', require('./routes/api/projects'));

// Serve static assets in production
if(process.env.NODE_ENV == 'production'){
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
})