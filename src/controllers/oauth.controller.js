const axios = require("axios");
const prisma = require("../config/prisma");

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

        console.log("TOKEN RECIBIDO:", data);

        await prisma.store.upsert({
            where: {
                storeId: String(data.user_id),
            },
            update: {
                userId: data.user_id,
                accessToken: data.access_token,
                scope: data.scope,
            },
            create: {
                storeId: String(data.user_id),
                userId: data.user_id,
                accessToken: data.access_token,
                scope: data.scope,
            },
        });

        console.log("TIENDA GUARDADA EN POSTGRESQL");

        return res.json({
            success: true,
            message: "Aplicación conectada correctamente con Tienda Nube.",
        });

    } catch (error) {

        console.error("ERROR OAUTH:");
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Error durante OAuth.",
            error: error.message,
        });
    }
}

module.exports = {
    instalar,
    callback,
};