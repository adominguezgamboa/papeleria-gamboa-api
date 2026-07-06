const {
    TIENDANUBE_CLIENT_ID,
    TIENDANUBE_CLIENT_SECRET,
    TIENDANUBE_REDIRECT_URI,
} = process.env;

module.exports = {
    clientId: TIENDANUBE_CLIENT_ID,
    clientSecret: TIENDANUBE_CLIENT_SECRET,
    redirectUri: TIENDANUBE_REDIRECT_URI,

    apiUrl: "https://api.tiendanube.com",

    authUrl: "https://www.tiendanube.com/apps",
};