const prisma = require("../config/prisma");

async function obtenerStore() {
    return prisma.store.findFirst();
}

module.exports = {
    obtenerStore,
};
