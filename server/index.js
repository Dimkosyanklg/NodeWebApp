// Section 1
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(3000, () => {
    console.log('server started on port 3000');
});
