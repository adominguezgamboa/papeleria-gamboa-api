const express = require("express");

const healthRoutes = require("./health.routes");
const oauthRoutes = require("./oauth.routes");
const privacyRoutes = require("./privacy.routes");
const productosRoutes = require("./productos.routes");

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

/*
|--------------------------------------------------------------------------
| Privacy
|--------------------------------------------------------------------------
*/

router.use("/", privacyRoutes);

/*
|--------------------------------------------------------------------------
| Productos
|--------------------------------------------------------------------------
*/

router.use("/", productosRoutes);

module.exports = router;