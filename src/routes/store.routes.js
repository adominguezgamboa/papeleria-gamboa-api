const express = require("express");

const {
    informacion,
} = require("../controllers/store.controller");

const router = express.Router();

router.get(
    "/store",
    informacion
);

module.exports = router;