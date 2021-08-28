import express from "express";
import {
	getOneUser,
	getAllUser,
	createUser,
	updateUser,
	deleteUser,
} from "../controllers/users";

const router = express.Router();

router.get("/", getAllUser);
router.post("/", createUser);
router.get("/:id", getOneUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
