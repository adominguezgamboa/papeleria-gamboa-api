const { obtenerStore } = require("../repositories/store.repository");
const {
    obtenerProductos,
} = require("../services/productos.service");

async function listar(req, res) {

    try {

        const store = await obtenerStore();

        if (!store) {
            return res.status(404).json({
                success: false,
                message: "No hay ninguna tienda conectada.",
            });
        }

        const productos = await obtenerProductos(store);

        return res.status(200).json({
            success: true,
            total: productos.length,
            productos,
        });

    } catch (error) {

        console.error(error.response?.data || error);

        return res.status(500).json({
            success: false,
            message: "Error obteniendo productos de Tienda Nube.",
            error: error.response?.data || error.message,
        });

    }

}

module.exports = {
    listar,
};