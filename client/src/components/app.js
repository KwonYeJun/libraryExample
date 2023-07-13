const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'src/components')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'test.html'));
});

app.get('/test.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'test.css'), { contentType: 'text/css' });
});

app.listen(1234, () => {
  console.log('연결');
});
