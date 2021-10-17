const path = require("path");

module.exports = {
    watch: true,
    watchOptions: {
        ignored: ["**/node_modules"]
    },
    entry: "./server/index.js",
    devtool: "inline-source-map",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "public", "dist"),
    },
    mode: "development"
};