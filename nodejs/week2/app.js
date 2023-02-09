import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
const port = 3000;
import doc from "./documents.json" assert { type: "json" };

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Test message");
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  let result = doc;
  if (q) {
    result = doc.filter((obj) =>
      Object.keys(obj).some((key) =>
        obj[key].toString().toLowerCase().includes(q.toLowerCase())
      )
    );
  }

  res.send(result);
});

app.get("/documents/:id", (req, res) => {
  const { id } = req.params;
  const result = doc.filter((obj) => obj["id"] == id);
  if (result.length < 1) {
    return res.status(404).send();
  }
  res.send(result);
});

app.post("/search", (req, res) => {
  let result = undefined;
  const { fields } = req.body;
  const { q } = req.query;

  if (q && fields) {
    // check for both query & fields parameter
    return res.status(400).send();
  } else if (q) {
    // check for query parameter
    result = doc.filter((obj) =>
      Object.keys(obj).some((key) =>
        obj[key].toString().toLowerCase().includes(q.toLowerCase())
      )
    );
  } else if (fields) {
    // check for fields parameters
    result = doc.filter((obj) =>
      Object.keys(fields).some((key) => fields[key] == obj[key])
    );
  } else return res.status(400).send(); // if nothing found

  if (result.length < 1) {
    // check for empty results
    return res.status(404).send();
  }
  res.send(result);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
