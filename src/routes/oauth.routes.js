const express = require("express");

const {
    instalar,
} = require("../controllers/oauth.controller");

const router = express.Router();

router.get(
    "/oauth/install",
    instalar
);

module.exports = router;