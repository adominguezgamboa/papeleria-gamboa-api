const {
    clientId,
    redirectUri,
} = require("../config/tiendanube.config");

function instalar(req, res) {
    if (!clientId || !redirectUri) {
        return res.status(500).json({
            success: false,
            message: "Faltan variables de entorno de Tienda Nube.",
        });
    }

    const url =
        `https://www.tiendanube.com/apps/${clientId}/authorize` +
        `?redirect_uri=${encodeURIComponent(redirectUri)}`;

    return res.redirect(url);
}

module.exports = {
    instalar,
};