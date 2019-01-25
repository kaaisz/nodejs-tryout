const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}`));

// route
app.get('/', (req, res) => {
  res.send('Hello, World');
})

app.get('/help', (req, res) => {
  res.send('This is the help page what you want');
})

app.get('/something', (req, res) => {
  res.send('Something will be shown');
})

// module.exports = router;