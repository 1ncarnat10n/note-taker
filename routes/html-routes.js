const htmlRouter = require('express').Router();
const path = require('path');

// GET route for start page 
htmlRouter.get('/', (req, res)=>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

// GET route for notes page 
htmlRouter.get('/notes', (req, res)=>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

module.exports = htmlRouter;