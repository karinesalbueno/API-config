const express = require('express');
const cors = require('cors');
const config = require("../config.js");
const routes = require('./routes');

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use(routes);

app.listen(config.server.port, () => {
  console.log("Servidor Iniciado!", config.server.port);
});
