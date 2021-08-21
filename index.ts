// import app from "./src/app";

// const PORT = process.env.PORT || 8000;

// app.listen(PORT, () => {
// 	console.log("Server is running on port", PORT);
// });

import express from "express";
import { Request, Response } from "express";
import { createConnection } from "typeorm";
import { Photo } from "./src/entity/Photo";

// create typeorm connection
createConnection().then((connection) => {
	const photoRepository = connection.getRepository(Photo);

	// create and setup express app
	const app = express();
	app.use(express.json());

	// register routes

	app.get("/photos", async function (req: Request, res: Response) {
		const photos = await photoRepository.find();
		res.json(photos);
	});

	app.get("/photos/:id", async function (req: Request, res: Response) {
		const results = await photoRepository.findOne(req.params.id);
		return res.send(results);
	});

	app.post("/photos", async function (req: Request, res: Response) {
		const photo = await photoRepository.create(req.body);
		const results = await photoRepository.save(photo);
		return res.send(results);
	});

	app.patch("/photos/:id", async function (req: Request, res: Response) {
		const photo = await photoRepository.findOne(req.params.id);
		photoRepository.merge(photo, req.body);
		const results = await photoRepository.save(photo);
		return res.send(results);
	});

	app.delete("/photos/:id", async function (req: Request, res: Response) {
		const results = await photoRepository.delete(req.params.id);
		return res.send(results);
	});

	// start express server
	app.listen(8000);
});
