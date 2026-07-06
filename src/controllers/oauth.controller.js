const axios = require("axios");

const {
    clientId,
    clientSecret,
    redirectUri,
    tokenUrl,
} = require("../config/tiendanube.config");

function instalar(req, res) {
    const url =
        `https://www.tiendanube.com/apps/${clientId}/authorize` +
        `?redirect_uri=${encodeURIComponent(redirectUri)}`;

    return res.redirect(url);
}

async function callback(req, res) {
    try {
        const { code } = req.query;

        if (!code) {
            return res.status(400).json({
                success: false,
                message: "No se recibió el código OAuth.",
            });
        }

        const { data } = await axios.post(tokenUrl, {
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: "authorization_code",
            code,
        });

        console.log("================================");
        console.log("TIENDANUBE TOKEN");
        console.log(data);
        console.log("================================");

        return res.json({
            success: true,
            message: "OAuth completado correctamente.",
            data,
        });

    } catch (error) {

        console.error(
            error.response?.data || error.message
        );

        return res.status(500).json({
            success: false,
            message: "Error obteniendo Access Token.",
            error:
                error.response?.data ??
                error.message,
        });

    }
}

module.exports = {
    instalar,
    callback,
};