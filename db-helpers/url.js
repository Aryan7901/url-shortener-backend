const Url = require("../models/urlSchema");
const save = async (longURL, shortURL, shortUrlId) => {
  await Url.create({ longURL, shortURL, shortUrlId });
};
const find = async (shortUrlId) => {
  return await Url.findOne({ shortUrlId: shortUrlId });
};
const findUrl = async (longURL) => {
  return await Url.findOne({ longURL: longURL });
};
module.exports = {
  save,
  find,
  findUrl,
};
