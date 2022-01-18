const express = require('express)');
const path = require('path');
const apiRoutes = require('./apiroutes.js');
const htmlRoutes = require('./htmlroutes.js');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
app.use('/api', htmlRoutes);


app.use(express.static('public'));


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
