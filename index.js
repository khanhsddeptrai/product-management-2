const express = require('express');
const app = express();

//Cấu hình file dotenv
require("dotenv").config();
const port = process.env.PORT;

//Cấu hình file tĩnh
app.use(express.static("public"));

//Cấu hình pug
app.set("views", "./views");
app.set("view engine", "pug");

//Cấu hình mongoose
const database = require("./config/database");
database.connect();

//Nhúng route
const route = require("./routes/client/index.route");
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});