const express = require('express')
const app = express()
const port = 3000

//Cấu hình pug
app.set("views", "./views");
app.set("view engine", "pug");

//Nhúng route
const route = require("./routes/client/index.route");
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});