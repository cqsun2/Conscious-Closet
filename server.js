const express = require('express'); // Import our Express dependency
const multer = require('multer');
const upload = multer({dest: 'static/uploads/'});

const app = express(); // Create a new server instance
const PORT = 80; // Port number we want to use of this server

const html_path = __dirname + '/templates/'; // HTML files folder

// Set up Middleware
app.use(express.static('static'));
app.use(express.urlencoded({extended: true}));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

app.get('/', (req, res) => {
    res.sendFile(html_path + 'index.html');
});


app.get('/store', (req, res) => {
    res.sendFile(html_path + 'store.html');
});

app.get('/blog', (req, res) => {
    res.sendFile(html_path + 'blog.html');
});



app.post('/send', upload.single('uploadImage'), (req, res) => {
    res.sendFile(html_path + 'success.html');
  })
