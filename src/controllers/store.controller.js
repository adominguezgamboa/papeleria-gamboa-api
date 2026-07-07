const { obtenerStore: obtenerStoreDB } =
    require("../repositories/store.repository");

const {
    obtenerStore,
} = require("../services/store.service");

async function informacion(req, res) {

    try {

        const store = await obtenerStoreDB();

        if (!store) {
            return res.status(404).json({
                success: false,
                message: "No hay ninguna tienda conectada.",
            });
        }

        const datos = await obtenerStore(store);

        return res.json({
            success: true,
            tienda: datos,
        });

    } catch (error) {

        console.error(error.response?.data || error);

        return res.status(500).json({
            success: false,
            message: "Error obteniendo la tienda.",
            error: error.response?.data || error.message,
        });

    }

}

module.exports = {
    informacion,
};