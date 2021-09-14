const express = require('express')
const app = express()
const port = 3001

app.use(express.json());

app.get('/', (req, res) => {
  res.send({res: 'Hello World!'})
})

app.listen(port, () => {
  console.log(`Rodando em http://localhost:${port}`);
})