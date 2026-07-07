const axios = require("axios");

const {
    apiBaseUrl,
} = require("../config/tiendanube.config");

async function obtenerProductos(accessToken, userId) {

    const { data } = await axios.get(
        `${apiBaseUrl}/2025-03/${userId}/products`,
        {
            headers: {
                Authentication: `bearer ${accessToken}`,
                "User-Agent": "Papelería Gamboa App (adominguez@papeleriagamboa.com.mx)",
                "Content-Type": "application/json",
            },
        }
    );

    return data;
}

module.exports = {
    obtenerProductos,
};