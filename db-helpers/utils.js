const shortId = require("shortid");
const url = require("url");
const validateUrl = (url = "") => {
  try {
    console.log(url);
    const myURL = new URL(url);
    return true;
  } catch (error) {
    console.log(error);
    console.log(error);
    return false;
  }
};
const generateUrlKey = () => shortId.generate();
module.exports = { validateUrl, generateUrlKey: generateUrlKey };
