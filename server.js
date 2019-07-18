const express = require('express');
const serveIndex = require('serve-index');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/ws/quizz', (req, res) => {
  res.json({ toto: 'titi' });
});

const www = '../quizz/dist/quizz';
app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
