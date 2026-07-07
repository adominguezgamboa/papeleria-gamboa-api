const { obtenerProductos } = require("../services/tiendanube.service");

const ACCESS_TOKEN =
    process.env.TIENDANUBE_ACCESS_TOKEN;

const USER_ID =
    process.env.TIENDANUBE_USER_ID;

async function listar(req, res) {

    try {

        if (!ACCESS_TOKEN || !USER_ID) {
            return res.status(500).json({
                success: false,
                message: "Faltan variables TIENDANUBE_ACCESS_TOKEN o TIENDANUBE_USER_ID.",
            });
        }

        const productos = await obtenerProductos(
            ACCESS_TOKEN,
            USER_ID
        );

        return res.json({
            success: true,
            total: productos.length,
            productos,
        });

    } catch (error) {

        console.error(error.response?.data || error);

        return res.status(500).json({
            success: false,
            message: "Error obteniendo productos.",
            error: error.response?.data || error.message,
        });

    }

}

module.exports = {
    listar,
};