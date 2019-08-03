const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const { connectDatabase } = require('./database');
const itemsController = require('./controllers/items');
const listsController = require('./controllers/lists');

connectDatabase();
const app = express();
const port = 4000;

app.use(cors())
app.use(bodyParser.json());
app.use('/lists', listsController);
app.use('/items', itemsController);

app.get('/', (req, res) => {
  res.send({test: 'test'});
});

app.listen(port, () => {
  console.log(`Listening at localhost:${port}...`);
});
