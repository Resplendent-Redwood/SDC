const express = require('express');
const router = require('./router/controllers.js')
const PORT = 3010;

const app = express();
app.use( express.json() );

app.use('/', router.func);





app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})