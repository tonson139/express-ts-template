import express, { Application } from "express";

const app: Application = express();

app.get("/ping", async (_req, res) => {
	res.send({
		message: "pong",
	});
});

import "reflect-metadata";
import { createConnection } from "typeorm";
import { Photo } from "./entity/Photo";
import { User } from "./entity/User";

createConnection()
	.then((connection) => {
		let newPhoto = new Photo();

		newPhoto.name = "Me and Bears";
		newPhoto.description = "I am near polar bears";
		newPhoto.filename = "photo-with-bears.jpg";
		newPhoto.views = 1;
		newPhoto.isPublished = true;
		console.log(newPhoto);

		return connection.manager.save(newPhoto).then((newPhoto) => {
			console.log("Photo has been saved. Photo id is", newPhoto.id);
		});
	})
	.catch((error) => console.log(error));

export default app;
