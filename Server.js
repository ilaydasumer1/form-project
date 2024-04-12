const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = require('./configuration/database.js');
const dotenv = require('dotenv');
const mongoSanitize = require('express-mongo-sanitize');
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');

dotenv.config();
const app = express();
app.set('trust proxy', 1);
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));


app.use('/favicon.ico', (req, res) => {
    res.status(204).end();
});

app.use(
    mongoSanitize({
        replaceWith: '_',
    })
);

app.use('/api', userRoutes);
app.use('/api', projectRoutes);

const PORT = process.env.PORT || 5000;
database();
app.listen(PORT, () => {
   
});
module.exports = app;
