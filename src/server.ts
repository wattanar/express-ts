import app from "./app";

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
	console.log("App running on port %d in %s mode", PORT, app.get("env"));
});

export default server;
