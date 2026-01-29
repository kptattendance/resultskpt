import express from "express";
import { getStudentResult } from "../controllers/resultController.js";

const router = express.Router();

router.get("/:regNo", getStudentResult);

export default router;
