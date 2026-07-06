const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");

const routes = require("./routes");

const app = express();

app.use(helmet());

app.use(cors());

app.use(compression());

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Ruta no encontrada.",
    });
});

module.exports = app;