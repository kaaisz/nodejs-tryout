const express = require('express');
const app = express();
const port = 5555;

// test - get respond with "Hello world" when a GET request is made
app.get('/', (req, res) => {
  res.send('hello world')
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));

// module.exports = router;