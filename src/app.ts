import express from "express";
import type { Application } from "express";
import connectSql from "./connection";
import router from "./routers";
import { consoleLogger } from "./helper/logger";

const startApp = async (): Promise<Application> => {
	const connection = await connectSql();
	console.log(`Database connection: ${connection.isConnected}`);

	const app: Application = express();
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(consoleLogger);
	app.use("/", router);
	// app.use(errorHandler());

	return app;
};
export default startApp;
