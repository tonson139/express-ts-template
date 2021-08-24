import startApp from "./src/app";

const PORT = 8000;

startApp().then((results) => {
	const app = results;

	app.listen(PORT, () => {
		console.log(`app running on port = ${PORT}`);
	});
});
