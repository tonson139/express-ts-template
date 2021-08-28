import startApp from "./src/app";
import { appPort } from "./src/configs";

startApp()
	.then((results) => {
		const app = results;
		app.listen(appPort, () => {
			console.log(`app running on port = ${appPort}`);
		});
	})
	.catch((error) => {
		console.log(error);
		process.exit(1);
	});
