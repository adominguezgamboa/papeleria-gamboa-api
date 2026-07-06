require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 3000,

    NODE_ENV: process.env.NODE_ENV || "development",

    TIENDANUBE_CLIENT_ID:
        process.env.TIENDANUBE_CLIENT_ID || "",

    TIENDANUBE_CLIENT_SECRET:
        process.env.TIENDANUBE_CLIENT_SECRET || "",

    TIENDANUBE_REDIRECT_URI:
        process.env.TIENDANUBE_REDIRECT_URI || "",
};