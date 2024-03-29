import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/:id", (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
