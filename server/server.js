const express = require('express');
const multer = require("multer");

const app = express();
const port = 8080 || process.env.PORT; 

const cors = require('cors');

app.use(cors())

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})

app.get('/', (req, res) => {
    res.send('Hello from our server!')
})
