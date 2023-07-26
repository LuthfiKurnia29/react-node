import express from "express";
import { inputBarang, getBarang } from "../controller/BarangController.js";

const router = express.Router();

router.get("/barang", getBarang);
// router.get("/users/:id", getUserById);
router.post("/barang", inputBarang);
// router.patch("/users/:id", updateUser);
// router.delete("/users", deleteUser);

export default router;
