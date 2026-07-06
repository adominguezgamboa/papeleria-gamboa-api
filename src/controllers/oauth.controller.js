function instalar(req, res) {

    return res.status(200).json({

        success: true,

        message:
            "OAuth de Tienda Nube preparado.",

    });

}

module.exports = {
    instalar,
};