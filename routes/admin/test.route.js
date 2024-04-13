const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/test.controller");

router.get("/", controller.test);

module.exports = router;