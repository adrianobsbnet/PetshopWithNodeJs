import express from "express";
import cors from "cors";
import winston from "winston";
import PropRouter from "./route/proprietario.route.js";
import AnimalRouter from "./route/animal.route.js";

const { combine, timestamp, label, printf } = winston.format;
const myformat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "petshop-api.log" }),
  ],
  format: combine(label({ label: "petshop-api" }), timestamp(), myformat),
});

const app = express();
app.use(express.json());
app.use(cors());
app.use("/proprietario", PropRouter);
app.use("/animal", AnimalRouter);
app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});
app.listen(3000, () => console.log("API Started"));
