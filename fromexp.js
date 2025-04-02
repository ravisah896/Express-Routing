const express = require('express')
const app = express()
const port = 3000

const about = require('./routes/About');
const contact = require('./routes/Contact');
const home = require('./routes/Home');
const helpline = require('./routes/Helpline');

app.use('/about', about);
app.use('/contact', contact);
app.use('/home', home);
app.use('/helpline', helpline);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})