const express = require('express');
const serveIndex = require('serve-index');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());

let list = {};
try {
  list = JSON.parse(fs.readFileSync('./quizz-list.json', 'utf-8'));
} catch (e) {}

app.get('/ws/quizz', (req, res) => {
  res.json(list);
});

app.post('/ws/quizz', (req, res) => {
  list = req.body;
  fs.writeFileSync('./quizz-list.json', JSON.stringify(list));
  res.status(204).end();
});

const www = '../quizz/dist/quizz';
app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
