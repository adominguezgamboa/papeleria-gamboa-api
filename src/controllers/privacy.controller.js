function storeRedact(req, res) {
    console.log("Store Redact", req.body);

    return res.status(200).json({
        success: true,
    });
}

function customersRedact(req, res) {
    console.log("Customers Redact", req.body);

    return res.status(200).json({
        success: true,
    });
}

function customersDataRequest(req, res) {
    console.log("Customers Data Request", req.body);

    return res.status(200).json({
        success: true,
    });
}

module.exports = {
    storeRedact,
    customersRedact,
    customersDataRequest,
};