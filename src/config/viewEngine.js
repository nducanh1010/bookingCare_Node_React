import express from "express";

let configViewEngine = (app) => {
    app.use(express.static("./src/public")); // truy cap file img
    app.set("view engine", "ejs");
    app.set("views", "./src/views") // truy cap vue
}

module.exports = configViewEngine;