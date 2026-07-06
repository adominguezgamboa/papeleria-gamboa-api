function health(req, res) {
    return res.status(200).json({
        success: true,
        message: "Papelería Gamboa API funcionando correctamente",
        version: "1.0.0",
        timestamp: new Date().toISOString(),
    });
}

module.exports = {
    health,
};