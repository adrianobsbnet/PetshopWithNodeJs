import express from "express";
import PropController from "../controller/prop.controller.js";
const router = express.Router();
router.post("/", PropController.createProprietario);
router.get("/", PropController.getProprietarios);
router.get("/:id", PropController.getProprietario);
router.delete("/:id", PropController.deleteProprietario);
router.put("/", PropController.updateProprietario);

export default router;
