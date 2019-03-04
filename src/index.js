const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cors = require('cors');
const db = require('./dao/db-connection');


port = 5656;

//parsing the request for further handling
app.listen(port, () => console.log('examplePort running on port 5656'));

app.use(cors());
app.use(bodyParser.json());

app.unsubscribe(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/do_you_love_me', (req, res) => {
  res.send('Yes, of course I do!');
});

app.get('/boards', (req, res) => {
  console.log('accessed');
  db.many("set schema 'public'; SELECT name FROM board;")
    .then(data => {
      console.log('data gotten');
      res.send(data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.get('/board/:id', (req, res) => {
  db.many(
    "set schema 'public'; SELECT * FROM thread where board = $1;",
    req.params.id
  )
    .then(posts => {
      res.send(posts);
    })
    .catch(error => {
      console.log(error);
    });
});

app.get('/thread/:id', (req, res) => {
  db.many(
    "set schema 'public'; SELECT * FROM post where thread = $1;",
    req.params.id
  )
    .then(posts => {
      res.send(posts);
    })
    .catch(error => {
      console.log(error);
    });
});
