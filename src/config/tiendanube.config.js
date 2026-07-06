require("dotenv").config();

module.exports = {
    clientId: process.env.TIENDANUBE_CLIENT_ID || "",

    clientSecret:
        process.env.TIENDANUBE_CLIENT_SECRET || "",

    redirectUri:
        process.env.TIENDANUBE_REDIRECT_URI || "",

    authBaseUrl:
        "https://www.tiendanube.com/apps",

    tokenUrl:
        "https://www.tiendanube.com/apps/authorize/token",

    apiBaseUrl:
        "https://api.tiendanube.com",
};