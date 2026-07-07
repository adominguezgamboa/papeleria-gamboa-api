const express = require("express");
const storeRoutes = require("./store.routes");
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
router.use("/", storeRoutes);

module.exports = router;