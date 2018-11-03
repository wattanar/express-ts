import app from "./app";

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log("App is running on :%d in %s mode", PORT, app.get("env"));
});

export default server;
