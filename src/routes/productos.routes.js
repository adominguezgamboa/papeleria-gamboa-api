const express = require("express");

const {
    listar,
} = require("../controllers/productos.controller");

const router = express.Router();

router.get(
    "/productos",
    listar
);

module.exports = router;