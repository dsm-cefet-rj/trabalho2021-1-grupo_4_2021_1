const cors = require('cors');
const express = require('express')
const app = express()
const port = 3001;
const exames = require('./exam');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send({res: 'Hello World!'})
})

app.use('/exames', exames);

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`);
})