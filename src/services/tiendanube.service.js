const axios = require("axios");

const {
    apiUrl,
} = require("../config/tiendanube.config");

const cliente = axios.create({
    baseURL: apiUrl,
    timeout: 15000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

module.exports = cliente;