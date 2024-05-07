const express = require('express');
const path = require('path');

const app = express();

app.listen(5000, () => {console.log('Сервер expressjs запущен');})