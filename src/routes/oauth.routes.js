const express = require("express");

const {
    instalar,
    callback,
} = require("../controllers/oauth.controller");

const router = express.Router();

router.get(
    "/oauth/install",
    instalar
);

router.get(
    "/oauth/callback",
    callback
);

module.exports = router;