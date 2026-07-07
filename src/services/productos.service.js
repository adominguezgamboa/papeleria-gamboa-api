const axios = require("axios");

const {
    apiBaseUrl,
} = require("../config/tiendanube.config");

async function obtenerProductos(store) {

    const { data } = await axios.get(
        `${apiBaseUrl}/2025-03/${store.userId}/products`,
        {
            headers: {
                Authentication: `bearer ${store.accessToken}`,
                "User-Agent":
                    "Papelería Gamboa App (adominguez@papeleriagamboa.com.mx)",
                "Content-Type": "application/json",
            },
        }
    );

    return data;

}

module.exports = {
    obtenerProductos,
};