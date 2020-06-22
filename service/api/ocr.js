const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const config = require("config");

const ocrkey = config.get("ocrApikey");
const ocrUrl = config.get("ocrApiUrl");

module.exports = function (path) {
  const data = new FormData();
  data.append("file", fs.createReadStream(path));
  data.append("scale", "true");

  const config = {
    method: "post",
    url: ocrUrl,
    headers: {
      apikey: ocrkey,
      ...data.getHeaders(),
    },
    data: data,
  };

  return axios(config).then((response) => {
    if (response.data.ParsedResults)
      return response.data.ParsedResults[0].ParsedText.replace(/\W/g, "");
    else return null;
  });
};
