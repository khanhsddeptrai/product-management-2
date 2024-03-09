const express = require('express')
const app = express()
const port = 3000

//Cấu hình pug
app.set("views", "./views");
app.set("view engine", "pug");

app.get('/', (req, res) => {
    res.render("client/pages/home/index");
});

app.get("/products", (req, res) => {
    res.send("Trang dan danh sách sản phẩm");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});