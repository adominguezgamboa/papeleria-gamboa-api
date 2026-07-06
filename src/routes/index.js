const express = require("express");

const healthRoutes = require("./health.routes");
const oauthRoutes = require("./oauth.routes");

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Health
|--------------------------------------------------------------------------
*/

router.use("/", healthRoutes);

/*
|--------------------------------------------------------------------------
| OAuth
|--------------------------------------------------------------------------
*/

router.use("/", oauthRoutes);

module.exports = router;