const path = require('path');
const express = require('express');

const app = express();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/home'));

app.listen(3000, () =>
  console.log(`Server running in 3000 mode on port ${3000}`)
);
