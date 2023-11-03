// packages 
const express = require('express');
const htmlRoute = require('./routes/html-routes');
const apiRoute = require('./routes/api-routes');

const PORT = process.env.PORT || 3001;

// initialize express 
const app = express();

//Middleware for parsing and urlencoded form data 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(htmlRoute)
app.use(apiRoute)

app.use(express.static('public'));

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);