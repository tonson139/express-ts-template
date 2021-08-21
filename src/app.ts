import express, { Application } from "express";

const app: Application = express();

app.get("/ping", async (_req, res) => {
	res.send({
		message: "pong",
	});
});

export default app;
