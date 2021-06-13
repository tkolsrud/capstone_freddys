const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');
const { response } = require('express');



const PORT = process.env.PORT || 4000;
const app = express();
require('dotenv').config();


// middleware - JSON parsing
app.use(express.json());
app.use(cors());


// middleware - API routes
app.use('/api/v1/guitars', routes.guitars);
app.use('/api/v1/auth', routes.auth);
app.use('/api/v1/user', routes.user);

app.use(express.static(path.resolve(__dirname, './client/build')));

app.get('*', function (req, res) {
    response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});



// connection
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

