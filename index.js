const express = require("express");
const app = express();
const cors = require("cors");
const { body, validationResult } = require("express-validator");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const host = process.env.HOST || "localhost";
const FRONTEND = process.env.FRONTEND;
const path = require("path");

const corsOptions = {
  origin: ["http://localhost:3000", FRONTEND],
  optionsSuccessStatus: 200,
};
const mongoose = require("mongoose");
try {
  mongoose.connect(process.env.DB || "mongodb://127.0.0.1:27017/url-shortener");
} catch (err) {
  throw err;
}
const URL = require("./db-helpers/url"); //helper
const utils = require("./db-helpers/utils");

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post("/url", body("url").isURL(), async (req, res) => {
  const errors = validationResult(req);
  let error,
    message = "";
  if (!errors.isEmpty()) {
    error = errors.array({ onlyFirstError: true });
    message = error[0].msg;
  }

  try {
    if (!errors.isEmpty()) return res.status(400).send(message);
    const requestedUrl = await URL.findUrl(req.body.url);
    if (!!requestedUrl)
      return res.status(200).send({ shortUrl: requestedUrl.shortURL });
    const urlKey = utils.generateUrlKey();
    const shortUrl = `http://${host}:${port}/${urlKey}`;
    await URL.save(req.body.url, shortUrl, urlKey);
    return res.status(200).send({ shortUrl });
  } catch (error) {
    return res.status(500).send("Error. Please try again.");
  }
});
app.get("/:shortUrlId", async (req, res) => {
  try {
    const url = await URL.find(req.params.shortUrlId);
    return !url
      ? res.status(404).send("Not found")
      : res.redirect(301, url.longURL);
  } catch (error) {
    return res.status(500).send("Error. Please try again.");
  }
});
app.use("", express.static(path.join(__dirname, "/dist")));

app.use((req, res, next) => {
  res.status(500).send("Route not found");
});

app.listen(port, () => console.log("listening port " + port));
