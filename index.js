const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors');

connectToMongo();

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors());


// Available Routes
app.use('/api/auth', require('./routes/auth'));


app.listen(PORT, () => {
    console.log(`The App is running at http://localhost:${PORT}`);
})