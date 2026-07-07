const axios = require("axios");

const {
    apiBaseUrl,
} = require("../config/tiendanube.config");

async function obtenerStore(store) {

    const { data } = await axios.get(
        `${apiBaseUrl}/2025-03/${store.userId}/store`,
        {
            headers: {
                Authentication: `bearer ${store.accessToken}`,
                "User-Agent":
                    "Papelería Gamboa App (adominguez@papeleriagamboa.com.mx)",
            },
        }
    );

    return data;
}

module.exports = {
    obtenerStore,
};