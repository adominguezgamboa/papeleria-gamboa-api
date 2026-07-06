const app = require("./app");

const { PORT } = require("./config/env");

app.listen(PORT, () => {
    console.log("");
    console.log("======================================");
    console.log(" Papelería Gamboa API");
    console.log("======================================");
    console.log(` Puerto : ${PORT}`);
    console.log(` URL    : http://localhost:${PORT}`);
    console.log("======================================");
    console.log("");
});