const app = require('express')();
const PORT = 3000



app.listen(
  PORT,
  () => console.log(`it's alive on http://localhost:${PORT}`)
)
