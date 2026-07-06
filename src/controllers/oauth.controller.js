const {
    clientId,
    redirectUri,
} = require("../config/tiendanube.config");

function instalar(req, res) {
    if (!clientId) {
        return res.status(500).json({
            success: false,
            message: "TIENDANUBE_CLIENT_ID no está configurado.",
        });
    }

    if (!redirectUri) {
        return res.status(500).json({
            success: false,
            message: "TIENDANUBE_REDIRECT_URI no está configurado.",
        });
    }

    const authorizeUrl =
        `https://www.tiendanube.com/apps/${clientId}/authorize` +
        `?redirect_uri=${encodeURIComponent(redirectUri)}`;

    return res.redirect(authorizeUrl);
}

module.exports = {
    instalar,
};