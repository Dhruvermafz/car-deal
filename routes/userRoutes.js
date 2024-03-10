// routes/userRoutes.js

import express from "express";
import { verifyToken } from "../middlewares/authMiddleware";
import { getUserInfo } from "../controllers/userController";

const router = express.Router();

router.get("/user/info", verifyToken, getUserInfo);

export default router;
