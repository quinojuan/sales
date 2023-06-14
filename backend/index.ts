import express from "express";
import morgan from "morgan";
import "dotenv/config";
import routes from "./routes";
import connectDB from "./db/connect";

const app = express();
connectDB();

app.use(morgan("dev"));
app.use("/api", routes);

app.get("/", (req, res) => {
  res.json("Hola mundo!");
});

app.get("/api", (req, res) => {
  res.json("Bienvenido a la API!");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("App listening on port: ", PORT);
});
