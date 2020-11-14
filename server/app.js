// Express
const express = require('express');
// App Express
const app = express();
// DB MongoDB, mongoose
const mongoose = require('mongoose');
// Parser
const bodyParser = require('body-parser');
// CORS
const cors = require('cors');
// Dotenv
require('dotenv/config');

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import routes
const getsRoute = require('./routes/gets');

app.use('/recipes', getsRoute);

app.get('/', (req, res) => {
    res.send('Home page');
});


// Connexion à la BDD
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('connected to DB')
);

app.listen(3000);