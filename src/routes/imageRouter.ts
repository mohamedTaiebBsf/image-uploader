import express from "express";
import { imageController } from "../controllers/ImageController";

const router: express.Router = express.Router();

router.post("/upload", imageController.upload);

export default router;
