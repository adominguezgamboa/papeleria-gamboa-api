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

        await prisma.store.upsert({
            where: {
                storeId: data.user_id,
            },
            update: {
                accessToken: data.access_token,
                scope: data.scope,
                tokenType: data.token_type,
            },
            create: {
                storeId: data.user_id,
                userId: data.user_id,
                accessToken: data.access_token,
                scope: data.scope,
                tokenType: data.token_type,
            },
        });

        console.log("================================");
        console.log("TIENDA GUARDADA");
        console.log(data);
        console.log("================================");

        return res.json({
            success: true,
            message: "Aplicación conectada correctamente con Tienda Nube.",
        });

    } catch (error) {

        console.error(error.response?.data || error);

        return res.status(500).json({
            success: false,
            message: "Error durante OAuth.",
            error: error.response?.data || error.message,
        });
    }
}

module.exports = {
    instalar,
    callback,
};