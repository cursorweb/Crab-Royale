const path = require("path");

module.exports = {
    entry: "./server/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "public", "dist"),
    },
    mode: "production"
};