import express from "express";
import type { Application } from "express";
import connectSql from "./connection";
import router from "./routers/users";

const startApp = async (): Promise<Application> => {
	const connection = await connectSql();
	const app = express();
	app.use(express.json());
	console.log("start app");
	if (connection.isConnected) {
		console.log(connection.isConnected);
		app.use("/", router);
	}
	return app;
};
export default startApp;
