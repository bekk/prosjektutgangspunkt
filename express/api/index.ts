import express from "express";

const app = express();

app.get("/hello", (_, res) => {
  res.json({ hello: "world" });
});

app.listen(8080, () => console.log("Serveren er tilgjengelig på port 8080!"));

module.exports = app;
