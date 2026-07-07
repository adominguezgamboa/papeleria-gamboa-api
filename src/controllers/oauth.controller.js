const axios = require("axios");
const fs = require("fs");
const path = require("path");

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

        const { data } = await axios.post(
            tokenUrl,
            {
                client_id: clientId,
                client_secret: clientSecret,
                grant_type: "authorization_code",
                code,
            }
        );

        const carpeta = path.join(
            __dirname,
            "..",
            "..",
            "storage"
        );

        if (!fs.existsSync(carpeta)) {
            fs.mkdirSync(carpeta);
        }

        fs.writeFileSync(
            path.join(carpeta, "tiendanube.json"),
            JSON.stringify(data, null, 4)
        );

        return res.json({
            success: true,
            message: "Aplicación conectada correctamente con Tienda Nube.",
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