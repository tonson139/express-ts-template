import { Router } from "express";
import { Request, Response } from "express";
import { getConnection } from "typeorm";
import { Photo } from "../entity/Photo";

console.log("here router");

const router = Router();

const getConnected = getConnection();
const photoRepository = getConnected.getRepository(Photo);

router.get("/photos", async function (req: Request, res: Response) {
	const photos = await photoRepository.find();
	res.json(photos);
});

router.get("/photos/:id", async function (req: Request, res: Response) {
	const results = await photoRepository.findOne(req.params.id);
	return res.send(results);
});

router.post("/photos", async function (req: Request, res: Response) {
	const photo = await photoRepository.create(req.body);
	const results = await photoRepository.save(photo);
	return res.send(results);
});

router.patch("/photos/:id", async function (req: Request, res: Response) {
	const photo = await photoRepository.findOne(req.params.id);
	photoRepository.merge(photo, req.body);
	const results = await photoRepository.save(photo);
	return res.send(results);
});

router.delete("/photos/:id", async function (req: Request, res: Response) {
	const results = await photoRepository.delete(req.params.id);
	return res.send(results);
});

export default router;
