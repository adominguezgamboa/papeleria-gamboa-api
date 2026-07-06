function instalar(req, res) {
    return res.status(418).json({
        success: true,
        message: "ESTE ES EL NUEVO CONTROLADOR",
    });
}

module.exports = {
    instalar,
};