const express = require("express");

const {
    storeRedact,
    customersRedact,
    customersDataRequest,
} = require("../controllers/privacy.controller");

const router = express.Router();

router.post(
    "/webhooks/store-redact",
    storeRedact
);

router.post(
    "/webhooks/customers-redact",
    customersRedact
);

router.post(
    "/webhooks/customers-data-request",
    customersDataRequest
);

module.exports = router;