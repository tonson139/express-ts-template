import express from "express";
import user from "./users";

const router = express.Router();

router.use("/user", user);

export default router;
