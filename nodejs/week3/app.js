import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
const port = process.env.PORT;

// import database connection module
import dbcon from "./database.js";

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

contactsAPIRouter.get("/", async (req, res) => {
  let dbquery = dbcon("contacts");
  const regexPattern = /^[A-Za-z_]+(\s[A-Za-z]+)?$/;
  const { sort } = req.query;

  if (sort) {
    if (regexPattern.test(sort)) {
      dbquery = dbquery.orderByRaw(sort.toString());
    } else {
      return res.status(400).json({
        error:
          "No special character in query string except underscore(_), please!",
      });
    }
  }

  try {
    const data = await dbquery;
    res.json({ data });
  } catch (e) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/", (req, res) => {
  res.send("test");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
